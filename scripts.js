document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    const mainPage = document.getElementById('main-page');
    const loginPage = document.getElementById('login-page');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'USER' && password === 'PASS') {
            loginMessage.textContent = 'Inicio de sesión correcto.';
            loginPage.classList.remove('active');
            mainPage.classList.add('active');
            sendEmail(username);
        } else {
            loginMessage.textContent = 'Contraseña incorrecta.';
        }
    });

    const userForm = document.getElementById('user-form');
    const userWelcome = document.getElementById('user-welcome');

    userForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        userWelcome.textContent = `Bienvenido, ${name}!`;
    });

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        formMessage.textContent = 'Mensaje enviado correctamente.';
        contactForm.reset();
        // Aquí iría la lógica para enviar el formulario por correo
    });

    function sendEmail(username) {
        console.log(`Correo enviado: El usuario ${username} ha ingresado a la página.`);
        // Aquí iría la lógica para enviar el correo.
    }

    document.querySelectorAll('nav a').forEach(navLink => {
        navLink.addEventListener('click', function () {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            const targetId = navLink.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });

    // API Interactions (Ejemplo de simulación)
    function apiInteraction(apiNumber) {
        alert(`Interacción con la API ${apiNumber}`);
    }

    // Inicializar la primera página visible
    document.querySelector('.page').classList.add('active');
});

// Función para interactuar con las APIs
function apiInteraction(apiNumber) {
    const apiResult = document.getElementById('api-result');

    switch (apiNumber) {
        case 1:
            // Simulación de llamada a una API de clima
            apiResult.innerHTML = 'Obteniendo datos del clima...';
            setTimeout(() => {
                apiResult.innerHTML = 'Clima: Soleado, 25°C';
            }, 1000);
            break;
        case 2:
            // Simulación de llamada a una API de criptomoneda
            apiResult.innerHTML = 'Consultando precio de criptomoneda...';
            setTimeout(() => {
                apiResult.innerHTML = 'Precio de Bitcoin: $50,000';
            }, 1000);
            break;
        case 3:
            // Simulación de llamada a una API de noticias
            apiResult.innerHTML = 'Obteniendo noticias recientes...';
            setTimeout(() => {
                apiResult.innerHTML = 'Noticias: “La tecnología AI revoluciona la industria.”';
            }, 1000);
            break;
        default:
            apiResult.innerHTML = 'Interacción no válida.';
    }
}
