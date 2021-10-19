'use strict';




let checkPalindrome = prompt('Please, enter something. I\'ll check if it is a palindrome', 'something');


let regExp = /[^A-Za-z0-9]/g;      //в неті знайшов
let lowReg = checkPalindrome.toLowerCase().replace(regExp, '');
let reverseStr = lowReg.split('').reverse().join('');

function palindrome() {
   if (lowReg === reverseStr) {
      alert(checkPalindrome + ' - it is a palindrome')
   } else {
      alert('It\'s not a palindrom');
   }
}

palindrome();



/*
Пробував сам вирішити задачку використовуючи слайси. Ідея була витягнути 2 половини рядка.
Але все одно без .replace(regExp, '') і .split('').reverse().join('') не обійшлося
*/

// let checkPalindrome = prompt('Please, enter something. I\'ll check if it is a palindrome', 'something');


// let regExp = /[^A-Za-z0-9]/g;
// let loverCase = checkPalindrome.toLowerCase().replace(regExp, '');
// let stringLength = loverCase.length;

// function palindrome() {
//    if (stringLength % 2 == 0) {
//       let halfString = loverCase.slice(0, stringLength / 2);
//       let halfString2 = loverCase.slice(stringLength / 2, stringLength);
//       let reverseStr = halfString2.split('').reverse().join('');
//       if (reverseStr == halfString) {
//          alert(checkPalindrome + ' - it\'s a palindrome')
//       } else alert('It is not a palindrome')
//    } else {
//       let halfString = loverCase.slice(0, stringLength / 2 + 1);
//       let halfString2 = loverCase.slice(stringLength / 2, stringLength);
//       let reverseStr = halfString2.split('').reverse().join('');
//       if (reverseStr == halfString) {
//          alert(checkPalindrome + ' - it\'s a palindrome')
//       } else alert('It is not a palindrome')
//    }
// }

// palindrome();



