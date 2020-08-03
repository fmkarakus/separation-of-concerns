"use strict";

const divEl = document.createElement("div");
divEl.innerHTML = `
  <a href='#toop'>
    <button>back to the top</button>
  </a>
`;
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- write some code ---

divEl.children[0].href = "#top";
divEl.children[0].children[0].innerHTML = "to the top";

// --- --- --- --- --- ---

console.log(divEl.nodeName, divEl.cloneNode(true));

<<<<<<< HEAD
console.assert(divEl.children[0].href === "#top", "Test: href");
=======
console.assert(divEl.children[0].getAttribute('href') === '#top',
  'Test: href');

console.assert(divEl.children[0].children[0].innerHTML === 'to the top',
  'Test: button innerHTML');
>>>>>>> d5bfb27a971aebb0851b52c7459562827b139913

console.assert(
  divEl.children[0].children[0].innerHTML === "to the top",
  "Test: button innerHTML"
);
