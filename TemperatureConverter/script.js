const cButton = document.getElementById("cButton");
cButton.addEventListener('click', function () {
    // console.log(inputTemp.value);
    // alert("Button clicked");
    const inputFildValue = Number(document.getElementById("inputTemp").value);
    const celcius = ((5 * (inputFildValue - 32)) / 9).toFixed(2);
    document.getElementById("outputTemp").value = String(celcius) + "  C";
    
    // console.log(celcius);

})

const fButton = document.getElementById("fButton");
fButton.addEventListener('click', function () {
    // alert("Clicked the button");
    const inputFildValue = Number(document.getElementById("inputTemp").value)
    const fahrenheit = (((inputFildValue * 9) + 32) / 5).toFixed(2);
    document.getElementById("outputTemp").value = String(fahrenheit) + "  F";
    // console.log(fahrenheit)
})


