// ---1---
// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
//   return age > 18 || confirm("Батьки дозволили?");
// }
// checkAge(11);

// function checkAge(age) {
//   return age > 18 ? true : confirm("Батьки дозволили?");
//}

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b
// function min(a, b) {
//   return a < b ? a : b;
// }

// var result = min(5, 3);
// console.log(result);

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );

// const que = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// que(
//   "Ви згодні?",
//   () => {
//     alert("Ви погодились.");
//   },
//   () => {
//     alert("Ви скасували виконання.");
//   }
// );
