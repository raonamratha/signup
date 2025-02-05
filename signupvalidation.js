document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const firstnameInput = document.getElementById('firstname-input');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password-input');
    const confirmPasswordInput = document.getElementById('confirm-input');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        let errors = [];

       
        clearErrorStyles();

        if (!firstnameInput.value.trim()) {
            errors.push('First name is required');
            setErrorStyle(firstnameInput);
        }
        if (!emailInput.value.trim()) {
            errors.push('Email is required');
            setErrorStyle(emailInput);
        }
        if (!passwordInput.value.trim()) {
            errors.push('Password is required');
            setErrorStyle(passwordInput);
        }
        if (passwordInput.value !== confirmPasswordInput.value) {
            errors.push('Passwords do not match');
            setErrorStyle(confirmPasswordInput);
        }

        if (errors.length > 0) {
            errorMessage.innerText = errors.join('. ');
        } else {
            form.submit();
        }
    });

    function setErrorStyle(inputElement) {
        inputElement.parentElement.classList.add('incorrect');
    }

    function clearErrorStyles() {
        const incorrectElements = form.querySelectorAll('.incorrect');
        incorrectElements.forEach((element) => {
            element.classList.remove('incorrect');
        });
    }
});
