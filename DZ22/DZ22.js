var number1 = parseFloat(prompt("Введіть перше число:"));
var number2 = parseFloat(prompt("Введіть друге число:"));
var number3 = parseFloat(prompt("Введіть третє число:"));

var sum_all = number1 + number2 + number3;
var sum_2 = number1 + number2;
var product = sum_2 * number3;
var remainder = (number1 % number2) / number3;
var roundedResult = Math.round(number3 / number2);

console.log("1. Сума чисел: " + sum);
console.log("2. Сума перших двох чисел, помножена на третє число: " + product);
console.log("3. Залишок від поділу першого числа на друге, розділений на третє число: " + remainder);
console.log("4. Округлений результат розділу третього числа на друге: " + roundedResult);
console.log("5. Моя перша програма!");