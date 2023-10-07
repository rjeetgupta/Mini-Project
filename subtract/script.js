// function subtract() {
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);
//     const sub = num1 - num2;
//     const result = document.getElementById("result").value = String(sub);
// }


// const button = document.getElementById("sub");


document.getElementById("sub").addEventListener('click', function () {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    let subtract = num1 - num2;
    document.getElementById("result").value = String(subtract);
})