const h1 = document.createElement('h1')
h1.style.backgroundColor = "Orange";
h1.style.padding = "12px";
const textNode = document.createTextNode("Create Element Using JS");
h1.appendChild(textNode);
document.body.appendChild(h1);





const div = document.createElement('div');
console.log(div);

div.className = "main";
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title", "genereated title")
div.style.backgroundColor = "orange";
div.style.padding = "12px";
// div.innerHTML = "chai aur code";
const addText = document.createTextNode("Chai aur code");
div.appendChild(addText);

document.body.appendChild(div);

// const p = document.createElement('p');
// p.style.backgroundColor = "green";
// p.style.padding = "12px";
// const ptext = document.createTextNode("This is a paragraph created by Javascript");
// p.appendChild(ptext);
// document.body.appendChild(p);

// const newH2 = document.createElement('h2');
// newH2.innerHTML = "New H2 tag is created";
// newH2.appendChild(newH2)
// document.body.appendChild(h2)


// const h3 = document.createElement('h3');
// h3.style.backgroundColor = "pink";
// h3.style.padding = "10px";
// const addTexth3 = document.createTextNode("This is second Heading tag");
// h3.appendChild(addTexth3);
// document.body.appendChild(h3);


const newP = document.createElement('p');
const paraP = document.createTextNode("This is new paragraph");
newP.appendChild(paraP);
document.body.appendChild(newP);


const newHeading = document.createElement('h1');
const textHeading = document.createTextNode("This is new Heading");
newHeading.appendChild(textHeading);
document.body.appendChild(newHeading);
newHeading.style.backgroundColor = "green";
newHeading.style.border = "dotted";
newHeading.style.borderRadius = "10px";
newHeading.style.padding = "10px";