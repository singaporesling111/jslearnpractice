//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// const frutNames = fruts.map((frut) => frut.name);

// console.log(frutNames);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let j = 0; j <= i.length; j++) {
//   if (i[j] % 2 === 0) {
//     console.log(i[j]);
//   }
// }

//  -- 3 --
// Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }

// let i = 0;
// while (i < 5) {
//   i++;
//   console.log(`Цифра ${i}`);
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let userInput;

// do {
//   userInput = prompt("Введіть число більше за 100:", "");

//   if (userInput === null || userInput === "") {
//     break;
//   }

//   userInput = parseFloat(userInput);

//   if (isNaN(userInput) || userInput <= 100) {
//     alert("Будь ласка, введіть число більше за 100.");
//   }
// } while (isNaN(userInput) || userInput <= 100);

// if (userInput !== null && userInput !== "") {
//   alert("Ви ввели число більше за 100. Дякуємо!");
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// const sumOfAges = girls.reduce((sum, girl) => sum + girl.age, 0);

// const averageAge = sumOfAges / girls.length;

// console.log(averageAge);
