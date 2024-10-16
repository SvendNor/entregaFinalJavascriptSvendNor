async function fetchData() {
    try {
        const carResponse = await fetch('info_autos.json');
        const modificationResponse = await fetch('info_modificaciones.json');
        const carData = await carResponse.json();
        const modificationsData = await modificationResponse.json();

        return { carData, modificationsData };
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudieron cargar los datos correctamente.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
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

let selectedModifications = {};

function updateDisplay(displayElement, value, lights, unit) {
    displayElement.textContent = value + ' ' + unit;

    lights.forEach((light) => light.classList.remove('active'));

    if (value >= 150 && value <= 250) {
        lights[0]?.classList.add('active');
    } else if (value > 250 && value <= 325) {
        lights[1]?.classList.add('active');
    } else if (value > 325) {
        lights[2]?.classList.add('active');

        Swal.fire({
            title: 'Advertencia',
            text: `El valor de HP (${value}) excede el límite seguro de 300 HP.`,
            icon: 'warning',
            confirmButtonText: 'Entendido'
        });
    }
}

function displayCarDetails(carData, modificationsData, selectedCar = null, selectedMods = {}) {
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

    let pendingModifications = {};

    function updateCarDetails(car) {
        const { hp, torque, image } = carData[car];
        carTitle.textContent = car;
        updateDisplay(hpDisplay, hp, hpLights, 'HP');
        updateDisplay(torqueDisplay, torque, torqueLights, 'Nm');
        carDetails.textContent = `HP: ${hp}, Torque: ${torque}`;
        const carImage = document.getElementById('carImage');
        carImage.src = image;

        modificationOptions.innerHTML = '';
        selectedModsList.innerHTML = '';
        pendingModifications = {};

        const mods = modificationsData[car];

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

                    pendingModifications[mod] = { ...modDetails, brand: selectedBrand };
                });

                if (selectedMods[mod]) {
                    brandSelect.value = selectedMods[mod].brand;
                    const modDetails = mods[mod].marcas[selectedMods[mod].brand];
                    const logo = document.createElement('img');
                    logo.src = modDetails.logo;
                    logo.classList.add('brand-logo');
                    logoContainer.innerHTML = '';
                    logoContainer.appendChild(logo);

                    pendingModifications[mod] = { ...modDetails, brand: selectedMods[mod].brand };

                    selectedModifications[mod] = pendingModifications[mod];
                    updateSelectedModsList(selectedModsList, carData);
                }
            }
        } else {
            const noModsMessage = document.createElement('p');
            noModsMessage.textContent = "No hay modificaciones disponibles para este auto.";
            modificationOptions.appendChild(noModsMessage);
        }

        Swal.fire({
            title: 'Auto Seleccionado',
            text: `Has seleccionado el ${car}.`,
            icon: 'success',
            confirmButtonText: 'Continuar'
        });

        updateFinalValues(carData);
    }

    carSelect.addEventListener('change', (event) => {
        const selectedCar = event.target.value;
        updateCarDetails(selectedCar);
    });

    if (selectedCar) {
        carSelect.value = selectedCar;
        updateCarDetails(selectedCar);
    }

    applyButton.addEventListener('click', () => {
        if (Object.keys(pendingModifications).length === 0) {
            Swal.fire({
                title: 'Error',
                text: 'No se han seleccionado modificaciones.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        selectedModifications = { ...pendingModifications };
        updateSelectedModsList(selectedModsList, carData);
        updateFinalValues(carData);

        Swal.fire({
            title: 'Modificaciones Aplicadas',
            text: 'Las modificaciones han sido aplicadas correctamente.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    });
}

function updateSelectedModsList(listElement, carData) {
    listElement.innerHTML = '';

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
            updateFinalValues(carData);
        });
    }

    updateFinalValues(carData);
}

function updateFinalValues(carData) {
    const carSelect = document.getElementById('carSelect');
    if (!carSelect.value) return;

    const baseHp = carData[carSelect.value].hp;
    const baseTorque = carData[carSelect.value].torque;
    let totalPrice = 0;
    let totalHp = baseHp;
    let totalTorque = baseTorque;

    for (const mod in selectedModifications) {
        const modDetails = selectedModifications[mod];
        totalHp += modDetails.hp;
        totalTorque += modDetails.torque;
        totalPrice += modDetails.precio;
    }

    updateDisplay(document.getElementById('hpDisplay'), totalHp, document.querySelectorAll('.hp-light'), 'HP');
    updateDisplay(document.getElementById('torqueDisplay'), totalTorque, document.querySelectorAll('.torque-light'), 'Nm');
    document.getElementById('priceOutput').textContent = `Total Price: $${totalPrice}`;

    Swal.fire({
        title: 'Resultados del Simulador',
        html: `<strong>HP Final:</strong> ${totalHp} <br>
               <strong>Torque Final:</strong> ${totalTorque} Nm <br>
               <strong>Precio Total:</strong> $${totalPrice}`,
        icon: 'info',
        confirmButtonText: 'Aceptar'
    });

    saveCarToUserHistory(carSelect.value, totalHp, totalTorque);
}

function refreshModifiedCarsList() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUser = users.find(user => user.username === loggedInUser);
        const tableBody = document.querySelector('#userVehiclesTable tbody');

        if (currentUser && currentUser.autos.length > 0) {
            tableBody.innerHTML = '';

            currentUser.autos.forEach((auto, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${auto.nombre}</td>
                    <td>${auto.hp}</td>
                    <td>${auto.torque}</td>
                    <td>
                        <button class="select-vehicle" data-index="${index}">Seleccionar</button>
                    </td>
                `;
                tableBody.appendChild(row);

                row.querySelector('.select-vehicle').addEventListener('click', function() {
                    const selectedVehicle = currentUser.autos[index];
                    localStorage.setItem('selectedVehicle', JSON.stringify(selectedVehicle));

                    Swal.fire({
                        title: 'Vehículo seleccionado',
                        text: `Has seleccionado el ${selectedVehicle.nombre} para seguir trabajando.`,
                        icon: 'success',
                        confirmButtonText: 'Continuar'
                    });

                    window.location.reload();
                });
            });
        } else {
            tableBody.innerHTML = '<tr><td colspan="4">No has trabajado en ningún auto todavía.</td></tr>';
        }
    }
}

function saveCarToUserHistory(selectedCar, hp, torque) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUser = users.find(user => user.username === loggedInUser);

        if (currentUser) {
            const autoSeleccionado = { 
                nombre: selectedCar,
                hp: hp, 
                torque: torque,
                modifications: selectedModifications
            };

            const autoIndex = currentUser.autos.findIndex(auto => auto.nombre === autoSeleccionado.nombre);
            if (autoIndex > -1) {
                currentUser.autos[autoIndex] = autoSeleccionado;
            } else {
                currentUser.autos.push(autoSeleccionado);
            }

            localStorage.setItem('users', JSON.stringify(users));
            refreshModifiedCarsList();
        }
    }
}

async function init() {
    const { carData, modificationsData } = await fetchData();

    generateCarOptions(carData);

    const storedVehicle = localStorage.getItem('selectedVehicle');
    if (storedVehicle) {
        const selectedVehicle = JSON.parse(storedVehicle).nombre;
        const selectedMods = JSON.parse(storedVehicle).modifications || {};
        displayCarDetails(carData, modificationsData, selectedVehicle, selectedMods);
        localStorage.removeItem('selectedVehicle');
    } else {
        displayCarDetails(carData, modificationsData);
    }

    refreshModifiedCarsList();
}

window.onload = init;
