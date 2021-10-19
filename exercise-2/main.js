'use strict';

let anyNumber = prompt('Please, enter any number', 3);
anyNumber = +anyNumber;

let product;

function multiply() {
   if (anyNumber % 2 == 0) {
      product = anyNumber * 8;
   } else {
      product = anyNumber * 9
   }

   alert(product)
}

multiply();