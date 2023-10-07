const tolower = document.querySelector(".tolower");
const toupr = document.querySelector(".toupr");

tolower.addEventListener('click', function () {
    const input = document.getElementById("strings").value;
    const convertedText = input.toLowerCase();
    document.getElementById("convertedText").value = convertedText;
});

toupr.addEventListener('click', function () {
    const input = document.getElementById("strings").value;
    const convertedText = input.toUpperCase();
    document.getElementById("convertedText").value = convertedText;
});

const resetButton = document.getElementsByClassName("reset");
resetButton.addEventListener('click', function () {

    const inputFild = document.getElementById("strings").value;
    inputFild.value = '';
});