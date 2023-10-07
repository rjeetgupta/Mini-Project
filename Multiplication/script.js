
document.getElementById("mult").addEventListener('click', function () {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const mult = num1 * num2;
    document.getElementById("result").value = String(mult);
})