//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

let str = prompt('String')

if(str[str.length - 1] != 'ь'){
    alert(str[str.length - 1])
}else alert(str[str.length - 2])