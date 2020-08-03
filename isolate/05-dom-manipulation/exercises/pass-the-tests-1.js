"use strict";

const divEl = document.createElement("ul");
divEl.innerHTML = `
  <p></p> // replace
  <section></section> // insert before
  <h1></h1> // remove
`;
console.log(divEl.nodeName + " (before)", divEl.cloneNode(true));

// --- write some code ---

divEl.replaceChild(document.createElement("nav"), divEl.children[0]);
divEl.insertBefore(document.createElement("h1"), divEl.children[1]);
divEl.removeChild(divEl.children[3]);
divEl.appendChild(document.createElement("p"));
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- --- --- --- --- ---

console.log(divEl.nodeName + " (after)", divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4, "Test: .childElementCount");

console.assert(divEl.children[0].nodeName === "NAV", "Test: 1st child");
console.assert(divEl.children[1].nodeName === "H1", "Test: 2nd child");
console.assert(divEl.children[2].nodeName === "SECTION", "Test: 3rd child");
console.assert(divEl.children[3].nodeName === "P", "Test: 4th child");
