// let string = " ";
// const buttons = document.querySelectorAll('.button');

// Array.from(buttons).forEach((button) => {
//     buttons.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//         }
        
//         else {
//             string = string + e.target.innerHTML;
//             document.querySelector('#input').value = string;
//         }
//         console.log(e.target)

//     })
// })



// const buttons = document.querySelectorAll('.button');
// let string = '';

// buttons.forEach((button) => {
//     button.addEventListener('click', function (e) {
//         let inputElement = document.getElementById("input");
//         inputElement = button.value;
//         console.log(button.value)
//         if (e.target.innerText === '=') {
//             string = eval(string);
//             inputElement.value = string;  // Set the result as the input value
//         } else {
//             string += e.target.innerText;
//             inputElement.value = string;  // Update the input value
//         }
//     });
// });








const buttons = document.querySelectorAll('.button');

let string = '';

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        const buttonValue = e.target.innerText;

        let inputElement = document.getElementById("inputValue");
        inputElement = buttonValue;

        if (buttonValue === '=') {
            string = eval(string);
            inputElement.value = string;
        } else {
            string += buttonValue;
            inputElement.value = string;
        }
    });
});



