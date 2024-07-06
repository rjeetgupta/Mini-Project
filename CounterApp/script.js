const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

function addByOne(intialValue){
    return intialValue + 1;
}

function subtractByOne(initialValue) {
    if (initialValue <= 0) {
        return 0;
    }
    else {
        return initialValue - 1;
    }
}

plus.addEventListener('click', () => {
    const counter = document.querySelector('#value');
    counter.textContent = addByOne(parseInt(counter.textContent));
});

minus.addEventListener('click', () => {
    const counter = document.querySelector('#value');
    counter.textContent = subtractByOne(parseInt(counter.textContent));
});
