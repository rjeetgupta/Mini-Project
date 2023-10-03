const clickBotton = document.getElementById("clickBotton");


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const special = ".@#5&*? ";

const length = 12;

const mixPassword = upperCase + lowerCase + number + special;

clickBotton.addEventListener('click', function () {

    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += special[Math.floor(Math.random() * special.length)]

    while (length > password.length) {
        password += mixPassword[Math.floor(Math.random() * mixPassword.length)]
        console.log(password)
    }

    document.getElementById("password").value = password;
})

let copyText = document.getElementById("select");
copyText.addEventListener('click', function () {
    // Create a range and select the text
    let range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges(); // Clear previous selection
    window.getSelection().addRange(range); // To select text

    // Copy the selected text to the clipboard
    document.execCommand('copy');
    
    // Clear the selection
    window.getSelection().removeAllRanges();

    // Optionally provide feedback to the user
    alert('Copied the text: ' + copyText.innerText);

})