const showPassword = document.getElementById('showPassword');

showPassword.addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const passwordContent = document.getElementById('passwordContent');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordContent.textContent = 'Hide Password';
    }
    else {
        passwordField.type = 'password';
        passwordContent.textContent = 'Show Password';
    }
})