//Даны два слова. Проверьте, что первые буквы этих слов совпадают.

let strOne = prompt('String One:')
let strTwo = prompt('String Two:')

if(strOne[1] == strTwo[1]){
    alert('Равны')
}else alert('Не равны')