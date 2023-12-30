const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[2].innerText);

for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i].innerHTML);
    parent.children[i].style.color = "orange";
}

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);


// querySelector takes time. It tranverse the content
const dayOne = document.querySelector('.day');
// console.log(dayOne.innerHTML);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

console.log("Nodes : ", parent.childNodes);