document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-registro');
    const nombre = document.getElementById('nombre');
    const rut = document.getElementById('rut');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const password = document.getElementById('password');

    form.addEventListener('submit', (e) => {
        let esValido = true;

        // Limpieza de mensajes
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

        // Validar Nombre
        if (nombre.value.trim().length < 3) {
            document.getElementById('error-nombre').textContent = 'Ingrese un nombre válido (mínimo 3 letras).';
            esValido = false;
        }

        // Validar RUT (Formato simple con guión)
        const rutRegex = /^\d{7,8}-[kK\d]$/;
        if (!rutRegex.test(rut.value.trim())) {
            document.getElementById('error-rut').textContent = 'Ingrese un RUT válido sin puntos y con guión (Ej: 12345678-9).';
            esValido = false;
        }

        // Validar Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            document.getElementById('error-email').textContent = 'Ingrese un correo electrónico válido.';
            esValido = false;
        }

        // Validar Teléfono (9 dígitos)
        const telRegex = /^9\d{8}$/;
        if (!telRegex.test(telefono.value.trim())) {
            document.getElementById('error-telefono').textContent = 'El teléfono debe empezar con 9 y tener 9 dígitos en total.';
            esValido = false;
        }

        // Validar Contraseña
        if (password.value.length < 6) {
            document.getElementById('error-password').textContent = 'La contraseña debe tener al menos 6 caracteres.';
            esValido = false;
        }

        if (!esValido) {
            e.preventDefault();
        } else {
            e.preventDefault();
            alert('¡Registro exitoso en TechVerse! Bienvenido/a.');
            form.reset();
        }
    });
});