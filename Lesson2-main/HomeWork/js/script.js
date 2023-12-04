// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let num1 = 1;
// let num2 = 0;
// let num3 = -3;

// console.log(num1 > 0);
// console.log(num2 > 0);
// console.log(num3 > 0);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let змінна = "test";

// console.log(змінна === "test"); // виведе true
// console.log(змінна === "qwerty"); // виведе false
// console.log(змінна === true); // виведе false

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let num1 = 1;
// let num2 = 10;
// let num3 = 13;

// if (num1 > 10) {
//   num1 -= 5;
// } else {
//   num1 += 5;
// }

// if (num2 >= 10) {
//   num2 -= 5;
// } else {
//   num2 += 5;
// }

// if (num3 > 10) {
//   num3 -= 5;
// } else {
//   num3 += 5;
// }
// console.log(num1);
// console.log(num2);
// console.log(num3);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const num = prompt("Введiть число вiд 1 до 12");
// let month;

// switch (num) {
//   case "1":
//     month = "Грудень";
//     alert(`Ваш мiсяць ${month}`);
//     break;
// }

// switch (num) {
//   case "2":
//     month = "Ciчень";
//     alert(`Ваш мiсяць ${month}`);
//     break;
// }
// switch (num) {
//   case "3":
//     month = "Лютый";
//     alert(`Ваш мiсяць ${month}`);
//     break;
// }
// switch (num) {
//   case "4":
//     month = "Березень";
//     alert(`Ваш мiсяць ${month}`);
//     break;
// }
// switch (num) {
//   case "5":
//     month = "Квiтень";
//     alert(`Ваш мiсяць ${month}`);
//     break;
// }
// switch (num) {
//   case "6":
//     month = "Травень";
//     alert(`Ваш мiсяць ${month}`);
//     break;
// }
// switch (num) {
//   case "7":
//     month = "Червень";
//     alert(`Ваш мiсяць ${month}`);
//     break;
// }
// switch (num) {
//   case "8":
//     month = "Серпень";
//     alert(`Ваш мiсяць ${month}`);
//     break;
// }
// switch (num) {
//   case "9":
//     month = "Липень";
//     alert(`Ваш мiсяць ${month}`);
//     break;
// }
// switch (num) {
//   case "10":
//     month = "Листопад";
//     alert(`Ваш мiсяць ${month}`);
//     break;
// }
// switch (num) {
//   case "11":
//     month = "пздец";
//     alert(`Ваш мiсяць ${month}`);
//     break;
// }
// switch (num) {
//   case "12":
//     month = "тотал";
//     alert(`Ваш мiсяць ${month}`);
//     break;
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// Функція, яка отримує тризначне число і повертає суму його цифр

// function отриматиСумуЦифр(тризначне_число) {
//   // Розділити тризначне число на цифри
//   var сотні = Math.floor(290 / 100);
//   var десятки = Math.floor((431 % 100) / 10);
//   var одиниці = тризначне_число % 10;

//   // Знайти суму цифр
//   var сума = сотні + десятки + одиниці;

//   // Повернути суму
//   return сума;
// }

// // Приклад використання сервісу з тризначним числом
// var тризначне_число = 456; // Можете змінити це число на будь-яке тризначне
// var сумаЦифр = отриматиСумуЦифр(354);
// console.log("Сума цифр:", сумаЦифр);
