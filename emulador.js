async function fetchData() {
    try {
        const carResponse = await fetch('info_autos.json');
        const modificationResponse = await fetch('info_modificaciones.json');
        const carData = await carResponse.json();
        const modificationsData = await modificationResponse.json();

        return { carData, modificationsData };
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function generateCarOptions(carData) {
    const carSelect = document.getElementById('carSelect');
    carSelect.innerHTML = '';
    for (const car in carData) {
        const option = document.createElement('option');
        option.value = car;
        option.textContent = car;
        carSelect.appendChild(option);
    }
}

function displayCarDetails(carData, modificationsData) {
    const carSelect = document.getElementById('carSelect');
    const carTitle = document.getElementById('carTitle');
    const carDetails = document.getElementById('carDetails');
    const modificationOptions = document.getElementById('modificationOptions');
    const selectedModsList = document.getElementById('selectedModsList');
    const applyButton = document.getElementById('applyModifications');
    const hpDisplay = document.getElementById('hpDisplay');
    const hpLights = document.querySelectorAll('.hp-light');
    const torqueDisplay = document.getElementById('torqueDisplay');
    const torqueLights = document.querySelectorAll('.torque-light');
    const priceOutput = document.getElementById('priceOutput');

    let selectedCar = null;
    let selectedModifications = {};
    let pendingModifications = {};

    carSelect.addEventListener('change', (event) => {
        selectedCar = event.target.value;
        const { hp, torque, image } = carData[selectedCar];

        carTitle.textContent = selectedCar;
        updateDisplay(hpDisplay, hp, hpLights, 'HP');
        updateDisplay(torqueDisplay, torque, torqueLights, 'Nm');
        carDetails.textContent = `HP: ${hp}, Torque: ${torque}`;

        const carImage = document.getElementById('carImage');
        carImage.src = image;

        modificationOptions.innerHTML = '';
        selectedModifications = {};
        pendingModifications = {};  // Resetear modificaciones pendientes
        selectedModsList.innerHTML = '';  // Limpiar la lista de modificaciones al cambiar de vehículo

        const mods = modificationsData[selectedCar];

        if (mods && Object.keys(mods).length > 0) {
            for (const mod in mods) {
                const modContainer = document.createElement('div');
                modContainer.classList.add('mod-container');

                const modLabel = document.createElement('label');
                modLabel.textContent = mod;

                const brandSelect = document.createElement('select');
                brandSelect.disabled = false;
                brandSelect.style.display = 'none';

                const logoContainer = document.createElement('div');
                logoContainer.classList.add('brand-logo-container');

                for (const brand in mods[mod].marcas) {
                    const option = document.createElement('option');
                    option.value = brand;
                    option.textContent = `${brand} (+${mods[mod].marcas[brand].hp} HP, +${mods[mod].marcas[brand].torque} Nm)`;
                    brandSelect.appendChild(option);
                }

                modContainer.appendChild(modLabel);
                modContainer.appendChild(brandSelect);
                modContainer.appendChild(logoContainer);
                modificationOptions.appendChild(modContainer);

                modLabel.addEventListener('mouseover', () => {
                    brandSelect.style.display = 'inline-block';
                });

                modContainer.addEventListener('mouseleave', () => {
                    brandSelect.style.display = 'none';
                });

                brandSelect.addEventListener('change', (e) => {
                    const selectedBrand = e.target.value;
                    const modDetails = mods[mod].marcas[selectedBrand];
                    const logo = document.createElement('img');
                    logo.src = modDetails.logo;
                    logo.classList.add('brand-logo');
                    logoContainer.innerHTML = '';
                    logoContainer.appendChild(logo);

                    pendingModifications[mod] = { ...modDetails, brand: selectedBrand };  // Agregar correctamente la marca
                });
            }
        } else {
            const noModsMessage = document.createElement('p');
            noModsMessage.textContent = "No hay modificaciones disponibles para este auto.";
            modificationOptions.appendChild(noModsMessage);
        }
    });

    function updateDisplay(displayElement, value, lights, unit) {
        displayElement.textContent = value + ' ' + unit;

        lights.forEach((light) => light.classList.remove('active'));

        if (value >= 150 && value <= 250) {
            lights[0]?.classList.add('active');
        } else if (value > 250 && value <= 325) {
            lights[1]?.classList.add('active');
        } else if (value > 325) {
            lights[2]?.classList.add('active');
        }
    }

    function updateSelectedModsList(listElement) {
        listElement.innerHTML = '';  // Limpiar lista antes de añadir modificaciones

        for (const mod in selectedModifications) {
            const modDetails = selectedModifications[mod];
            const modItem = document.createElement('li');
            modItem.setAttribute('data-mod', mod);

            modItem.innerHTML = `
                <span class="mod-name">${mod}</span>: 
                <span class="mod-brand">${modDetails.brand}</span> 
                <span class="mod-hp">+${modDetails.hp} HP</span>, 
                <span class="mod-torque">+${modDetails.torque} Nm</span>
                <button class="remove-mod">Eliminar</button>
            `;

            listElement.appendChild(modItem);

            modItem.querySelector('.remove-mod').addEventListener('click', () => {
                delete selectedModifications[mod];
                listElement.removeChild(modItem);
                updateFinalValues(); 
            });
        }

        updateFinalValues();  // Recalcular valores
    }

    function updateFinalValues() {
        if (!selectedCar) return;

        const baseHp = carData[selectedCar].hp;
        const baseTorque = carData[selectedCar].torque;
        let totalPrice = 0;
        let totalHp = baseHp;
        let totalTorque = baseTorque;

        for (const mod in selectedModifications) {
            const modDetails = selectedModifications[mod];
            totalHp += modDetails.hp;
            totalTorque += modDetails.torque;
            totalPrice += modDetails.precio;
        }

        updateDisplay(hpDisplay, totalHp, hpLights, 'HP');
        updateDisplay(torqueDisplay, totalTorque, torqueLights, 'Nm');
        priceOutput.textContent = `Total Price: $${totalPrice}`;
    }

    applyButton.addEventListener('click', () => {
        selectedModifications = { ...pendingModifications };  // Transferir modificaciones pendientes a las seleccionadas
        updateSelectedModsList(selectedModsList);  // Mostrar las modificaciones en la lista
    });
}

async function init() {
    const { carData, modificationsData } = await fetchData();
    generateCarOptions(carData);
    displayCarDetails(carData, modificationsData);
}

window.onload = init;
