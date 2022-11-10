'use strict'
// task 1

alert(`Вы ввели: ${prompt('Введите текст')}`);

// task 2

const term1 = prompt('Введите первое слагаемое');
const term2 = prompt('Введите второе слагаемое');
const sum = +term1 + +term2;
alert(`Сумма чисел: ${sum}`);

// task 3

const name = prompt('Введите имя пользователя');
const age = prompt('Введите сколько Вам лет');
age >= 18 ? alert(`Добро пожаловать ${name}`): alert(`Простите, ${name}, доступ закрыт`);

// task 4

let blockName, elName, mod;
if (confirm('Хотите ввести название блока?')) {
    blockName = prompt('Введите название блока')
    if (confirm('Хотите ввести название элемента?')){
        elName = prompt('Введите название элемента')
        if (confirm('Хотите ввести название модификатора?')){
            mod = prompt('Введите название модификатора');
            console.log(`Название блока: ${blockName}__${elName}_${mod}`);
        } else console.log(`Название блока: ${blockName}__${elName}`);
    } else console.log(`Название блока: ${blockName}`);
} else console.log('Элементу не присвоен класс');




// task 5

let result;
const num1 = prompt('Введите первое число');
const num2 = prompt('Введите второе число');
const oper = prompt('Выберите нужную арифметическую операцию (div, plus, mult, minus)');
if (oper === 'div') {
    result = +num1 / +num2;
    alert(result);
} else if (oper === 'plus') {
    result = +num1 + +num2;
    alert(result);
} else if (oper === 'mult') {
    result = +num1 * +num2;
    alert(result);
} else if (oper === 'minus') {
    result = +num1 - +num2;
    alert(result);
} else alert('Что-то пошло не так');