//1
// function gij(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

//2
// // function gij(number) {
//   const divisors = [];
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       divisors.push(i);
//     }
//   }
//   return divisors;
// }

//3
// function gij(str) {
//   return str.split("");
// }

//4
// function gij(str) {
//   return str.split("").reverse().join("");
// }

//5
// function  gij(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

//6
// function gij(str) {
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = gij(words[i]);
//   }
//   return words.join(" ");
// }
// function gij(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

//7
// function gij(n) {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

//8
// function gij(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }

//9
// function gij(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

//10
// function gij(seconds) {
//   const secondsInDay = 24 * 60 * 60;
//   const days = Math.floor(seconds / secondsInDay);
//   return days;
// }

//11
// function gij(array) {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }

//12
// function gij(number) {
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

