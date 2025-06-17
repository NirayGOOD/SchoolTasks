//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

let str = prompt('String')

if(str.length >= 2)
    alert(str[str.length - 2])
else alert(str.length)