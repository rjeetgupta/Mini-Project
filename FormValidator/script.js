const submitButton = document.getElementById("submit");
submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const retypePassword = document.getElementById("retypePassword").value;

    // Validate first name and last name
    if (firstName.trim() === '' && lastName.trim() === '') {
        alert("Please enter your first and last name.");
        return false;
    }

    // Validate date of birth
    if (dob === '') {
        alert("Please enter your date of birth.");
        return false;
    }

    // Validate email
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate password
    if (password === '') {
        alert("Please enter your password.");
        return false;
    }

    // Validate retype password
    if (password !== retypePassword) {
        alert("Passwords do not match.");
        return false;
    }

    // If all validations passed, form is valid
    alert("Form is valid. Submitting...");

    // Uncomment the line below to actually submit the form
    // document.getElementById("yourFormId").submit();
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
