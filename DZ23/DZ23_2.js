var a = parseInt(prompt("Введіть число a:"));
var b = parseInt(prompt("Введіть число b:"));

if (a % b === 0) {
    console.log("Ділиться, результат поділу: " + (a / b));
} else {
    console.log("Ділиться з залишком, залишок від поділу: " + (a % b));
}