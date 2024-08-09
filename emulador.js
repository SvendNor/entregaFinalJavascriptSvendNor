// Valores base de un Honda Civic Si 2009
const baseHP = 197;
const baseTorque = 174;
let precioTotal = 0;
let hpActual = baseHP;
let torqueActual = baseTorque;

// Estipulamos las modificaciones, sus precios y consecuencias en el rendimiento del auto
const modificaciones = {
    "turbo": { hp: 60, torque: 80, precio: 300000 },
    "escape": { hp: 10, torque: 12, precio: 120000 },
    "reprogramacion": { hp: 20, torque: 25, precio: 80000 },
    "intake": { hp: 5, torque: 7, precio: 60000 },
    "suspension": { hp: 0, torque: 0, precio: 150000 }
};

function calcular() {
    // Aca reseteamos los valores
    hpActual = baseHP;
    torqueActual = baseTorque;
    precioTotal = 0;

    const form = document.getElementById('modForm');
    const seleccionadas = new FormData(form).getAll('modificaciones');

    for (let i = 0; i < seleccionadas.length; i++) {
        let mod = seleccionadas[i];

        if (mod === "turbo" && hpActual > 300) {
            alert("El motor no soporta más de 300 HP con un turbo adicional.");
            continue;
        }

        hpActual += modificaciones[mod].hp;
        torqueActual += modificaciones[mod].torque;
        precioTotal += modificaciones[mod].precio;
    }

    document.getElementById('hp').textContent = hpActual;
    document.getElementById('torque').textContent = torqueActual;
    document.getElementById('precio').textContent = precioTotal.toLocaleString('es-AR');
}
