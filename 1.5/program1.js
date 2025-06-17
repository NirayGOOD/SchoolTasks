//Найдите сумму всех целых чисел от 1 до 100.

let sum = 0
for(let i = 1; i <= 100; i++){
    sum = Number(sum) + Number(i)
}
console.log(Number(sum))