function addLanguage(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li);
}
addLanguage("java");
addLanguage("Ruby")


function addOptiLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}
addOptiLanguage("golang");

function createList(listCreate){
    const li = document.createElement('li');
    li.style.background = "blue";
    li.style.padding = "10px";
    li.appendChild(document.createTextNode(listCreate));
    document.querySelector('.listName').appendChild(li);
}
    createList("Mango");
    createList("Mango");
    createList("Mango");


// Edit

const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = Mojo;
const newLi = document.createElement('li');
newLi.textContent = "Mojo"
secondLang.replaceWith(newLi);

const fourthLang = document.querySelector("li:nth-child(4)");
const linew = document.createElement('li');
linew.textContent = "R Programming";
fourthLang.replaceWith(linew);


// edit
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = '<li>TypeScript</li>';


// remove

const lastLang = document.querySelector("li:last-child");
lastLang.remove();