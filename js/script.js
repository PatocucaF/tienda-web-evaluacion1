document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-registro');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    form.addEventListener('submit', (e) => {
        let esValido = true;

        // Limpiar mensajes de error previos
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

        // Validación Nombre (no vacío)
        if (nombre.value.trim() === '') {
            document.getElementById('error-nombre').textContent = 'El nombre completo es obligatorio.';
            esValido = false;
        }

        // Validación Email (formato válido)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            document.getElementById('error-email').textContent = 'Ingrese un correo electrónico válido (ejemplo@dominio.com).';
            esValido = false;
        }

        // Validación Contraseña (mínimo 6 caracteres)
        if (password.value.length < 6) {
            document.getElementById('error-password').textContent = 'La contraseña debe tener al menos 6 caracteres.';
            esValido = false;
        }

        // Si hay algún error, evita el envío del formulario
        if (!esValido) {
            e.preventDefault();
        } else {
            e.preventDefault(); // Evitamos recarga real para la demostración
            alert('¡Registro exitoso! Todos los datos son válidos.');
            form.reset();
        }
    });
});