// Move Elements

let allParagraphs = document.querySelectorAll("p");
let parent = allParagraphs[0].parentNode;

console.log(parent)

parent.appendChild(allParagraphs[1]);
parent.appendChild(allParagraphs[0]);
parent.appendChild(allParagraphs[2]);
parent.appendChild(allParagraphs[3]);