// "use strict"
// getString();
// function getString(){
//     console.log('hello world!')
// }
// getString();

// //1
// function sumArrayElements(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

//2
// // function findDivisors(number) {
//   const divisors = [];
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       divisors.push(i);
//     }
//   }
//   return divisors;
// }

//3
// function getCharacters(str) {
//   return str.split("");
// }

//4
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

//5
// function capitalizeFirstLetter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

//6
// function capitalizeFirstLetterOfWords(str) {
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = capitalizeFirstLetter(words[i]);
//   }
//   return words.join(" ");
// }
// function capitalizeFirstLetter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

//7
// function fillArray(n) {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

//8
// function sumDigits(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }

//9
// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

//10
// function countDays(seconds) {
//   const secondsInDay = 24 * 60 * 60;
//   const days = Math.floor(seconds / secondsInDay);
//   return days;
// }

//11
// function getRandomElement(array) {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }

//12
// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

