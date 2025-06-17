//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let strOne = prompt('Number One:')
let strTwo = prompt('Number Two:')

if(strOne[0] == strTwo[0]){
    alert('Равны')
}else alert('Не равны')