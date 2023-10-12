document.addEventListener('DOMContentLoaded', function () {
    var togglePasswordIcons = document.querySelectorAll('.toggle-password');
    var passwordField1 = document.getElementById('password1');
    var passwordField2 = document.getElementById('password2');
    var submitButton = document.querySelector('input[type="submit"]');
    var charLimitWarning = document.getElementById('charLimitWarning');
    var charLimitWarning2 = document.getElementById('charLimitWarning2');
    var charLimitWarning3 = document.getElementById('charLimitWarning3');
    var charLimitWarning4 = document.getElementById('charLimitWarning4');
    var charLimitWarning5 = document.getElementById('passwordMismatchWarning');
    var comprovacionusuario = document.getElementById('usuario');

    function validatePasswords() {
        // Inicialmente, no hay errores
        passwordField1.classList.remove('error');
        passwordField2.classList.remove('error');

        // Ocultar mensajes de advertencia
        charLimitWarning.style.display = 'none';
        charLimitWarning2.style.display = 'none';

        if ((passwordField1.value !== passwordField2.value) && passwordField2.value !== '') {
            charLimitWarning5.style.display = 'block';
            passwordField2.classList.add('error'); // Agregar la clase de error a passwordField2
        } else {
            charLimitWarning5.style.display = 'none';
        }

        if (passwordField1.value !== '' && passwordField1.value.length > 18) {
            charLimitWarning.style.display = 'block';
            passwordField1.classList.add('error');
            submitButton.disabled = true;
        }

        if (passwordField2.value !== '' && passwordField2.value.length > 18) {
            charLimitWarning2.style.display = 'block';
            passwordField2.classList.add('error');
            submitButton.disabled = true;
        }

        if (passwordField2.value !== '' && passwordField2.value.length < 7) {
            charLimitWarning4.style.display = 'block';
            passwordField2.classList.add('error');
        } else {
            charLimitWarning4.style.display = 'none';
        }

        if (passwordField1.value !== '' && passwordField1.value.length < 7) {
            charLimitWarning3.style.display = 'block';
            passwordField1.classList.add('error');
        } else {
            charLimitWarning3.style.display = 'none';
        }

        if (comprovacionusuario.value !== '' && passwordField1.value === passwordField2.value &&
            passwordField1.value.length >= 7 && passwordField1.value.length <= 18) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    function checkEmptyFields() {
        if (comprovacionusuario.value === '' || passwordField1.value === '' || passwordField2.value === '') {
            submitButton.disabled = true;
        }
    }

    function checkOneEmptyField() {
        if (comprovacionusuario.value === '' || (passwordField1.value === '' && passwordField2.value === '')) {
            submitButton.disabled = true;
        }
    }

    comprovacionusuario.addEventListener('input', function () {
        validatePasswords();
        checkEmptyFields();
        checkOneEmptyField();
    });

    passwordField1.addEventListener('input', function () {
        if (passwordField1.value.length > 19) {
            passwordField1.value = passwordField1.value.slice(0, 19);
        }
        validatePasswords();
        checkEmptyFields();
        checkOneEmptyField();
    });

    passwordField2.addEventListener('input', function () {
        if (passwordField2.value.length > 19) {
            passwordField2.value = passwordField2.value.slice(0, 19);
        }
        validatePasswords();
        checkEmptyFields();
        checkOneEmptyField();
    });

    togglePasswordIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            var targetId = this.getAttribute('data-target');
            var passwordField = document.getElementById(targetId);

            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                this.src = 'eye-crossed.png';
            } else {
                passwordField.type = 'password';
                this.src = 'eye.png';
            }
            validatePasswords();
            checkEmptyFields();
            checkOneEmptyField();
        });
    });
});
