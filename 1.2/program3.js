//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.


let num = prompt('Number')

numFirst = Number(num[0])
numSecond = Number(num[num.length - 1])
summ = numFirst + numSecond
alert(summ)