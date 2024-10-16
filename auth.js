document.getElementById('register-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('new-username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('new-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const userExists = users.find(user => user.username === username);
    
    if (userExists) {
        alert('El nombre de usuario ya está en uso.');
    } else {
        users.push({ username, email, password, autos: [] });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Usuario registrado con éxito.');
        window.location.href = 'index.html';
    }
});

document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'index.html';
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

window.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const userAuthDiv = document.getElementById('user-auth');

    if (loggedInUser) {
        userAuthDiv.innerHTML = `
            <span>Bienvenido, ${loggedInUser}</span>
            <button id="logout-btn">Finalizar Sesión</button>
        `;
        document.getElementById('logout-btn').addEventListener('click', function() {
            localStorage.removeItem('loggedInUser');
            window.location.reload();
        });
    }
});
