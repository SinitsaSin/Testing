var worked = parseInt(prompt("Скільки років ви працюєте у компанії?"));
var salary = parseFloat(prompt("Введіть вашу поточну зарплату:"));

if (worked >= 1 && worked <= 3) {
    salary *= 1.1;
} else if (worked > 3) {
    salary *= 1.2;
}

if (salary < 4000) {
    salary += 1000;
} else if (salary >= 4000) {
    salary += 500;
}

console.log("Ваша нова зарплата: " + salary);