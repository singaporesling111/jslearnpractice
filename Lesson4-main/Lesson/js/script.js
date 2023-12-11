// const testFunk = function (a, b) {
//   console.log("a :", a);
//   console.log("b :", b);
// };

// testFunk(5, 8);

// const a = function () {
//   console.log("function a");
//   b();
// };

// const b = function () {
//   console.log("function b");
// };

// const c = function () {
//   console.log("function c");
// };

// a();

// const addName = function (...arg) {
//   console.log(arg);
// };

// addName(1, 3, 5);

//callback

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   console.log("You say ok!");
// }

// function showCancel() {
//   console.log("You say no!");
// }

// ask("Yes or no?", showOk, showCancel);

//HOF high order function

// const hello = function (name) {
//   console.log(`Hello ${name}`);
// };

// const searchName = function (callback) {
//   const name = "Ivan";
//   callback(name);
// };

// searchName(hello);
// function checkAge(age) {
//   if (age > 18) {
//     return console.log("Confirmed");
//   }
//   return console.log("declined");
// }

// checkAge(12);

// function showMovie(age) {
//   if (age < 21) {
//     return;
//   }
//   return console.log("Go to cinema");
// }

// showMovie(30);

// arrow funcs

// const test = (arg) => {
//   console.log(arg);
// };

// test("hello");

// const showMovie = (age) => {
//   if (age < 21) {
//     return console.log("bye bye");
//   }
//   return console.log("Go to the cinema!");
// };

// showMovie(12);

// const a = () => {
//   console.log("a");
// };

// const b = () => {
//   console.log("b");
// };

// const c = () => {
//   console.log("c");
//   a();
//   b();
// };

// c();

// const addNumber = (number) => {
//   let summ = Number(number) + 10;
//   return console.log(summ);
// };

// const numberRef = document.querySelector('input[name="number"]');

// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener("click", () => addNumber(numberRef.value));
