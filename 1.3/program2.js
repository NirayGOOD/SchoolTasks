//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

let numFirst = Number(prompt("Number One:"))
let numSecond = Number(prompt("Number Two:"))

if((numFirst % numSecond) == 0)
    alert((numFirst / numSecond) + '.' + (numFirst % numSecond))
else alert('Увы')