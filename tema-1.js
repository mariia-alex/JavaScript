// 1. Создайте переменную a и присвойте ей значение 3. Выведите значение этой переменной на экран.

var a = 3;

alert(a)


// 2. Создайте переменные a = 10 и b = 2. Выведите на экран их сумму, разность, произведение и частное(результат деления).

var a = 10;
var b = 2;

alert(a + b)
alert(a - b)
alert(a * b)
alert(a / b)


// 3. Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.

var c = 15;
var d = 2;
let result = c + d 

alert(result) 


// 4. Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.

var a = 10;    //Первый вариант решения
var b = 2;
var c = 5;

alert(a + b + c)

var a = 10;   //Второй вариант решения
var b = 2;
var c = 5;
let result = a + b + c

alert(result) 


// 5. Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.

var a = 17;
var b = 10;
var c = a - b;
var d = 7;
let result = c + d 

alert(result)  // Результат: 14


// 6. Создайте переменную text и присвойте ей значение 'Привет, Мир!'.Выведите значение этой переменной на экран.

let text = "Hola, Mundo!";

alert(text)


// 7. Создайте переменные text1='Привет, ' и text2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.

let text1 = "Hola, ";
let text2 = " Mundo!";

alert(text1 + text2)


// 8. Напишите скрипт, который считает количество секунд в часе, сутках, неделе, месяце из 30 дней.

alert(60 * 60);
alert(60 * 60 * 24);
alert(60 * 60 * 24 * 7);
alert(60 * 60 * 24 * 7 * 30)


// 9. Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.

var chas = "15 : ";
var min = "30 : ";
var sec = "25";

alert(chas + min + sec) 


// 10. Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться! Код для переделки:

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;

console.log(num)


// 11. Переделайте этот код так, чтобы в нем использовалась операция +=. Количество строк кода при этом не должно измениться!

let text = 'Я';
text += ' хочу';
text += ' знать';
text += ' JS!';

console.log(text)


// 12. Задана переменная foo = 'bar'; Создать переменную bar, в которой будет храниться число 10. Вывести число 10, используя только переменную foo

var foo = 'bar';
var bar = 10;
foo = bar;

alert(foo)  //Результат: 10


// 13. Даны два числа. Найти их сумму и произведение. 

var a = 8;
var b = 7;
var c = a + b;
var d = a * b;

alert(c), alert(d)


// 14. Даны два числа. Найдите сумму их квадратов. 

var a = 5;
var b = 6;
let result = (a * a) + (b * b)

alert(result)  // Результат: 61


// 15. Даны три числа. Найдите их среднее арифметическое. 

var a = 3;
var b = 6;
var c = 9;
let result = (a + b + c) / 3;

alert(result)  // Результат: 6


// 16. Даны три числа x,y и z. Найдите (x+1)−2(z−2x+y)

var x = 3;
var y = 6;
var z = 9;
let result = (x + 1) - 2 * (z - 2 * x + y);

alert(result)  // результат: -14


// 17. Даны натуральные числа. Найдите остатки от деления этих чисел на 3 и на 5. 

var a = 7;
var b = 9;
a /= 3;
b /= 3;
alert(a), alert(b)

a /= 5;
b /= 5;
alert(a), alert(b) 


// 18. Дано число. Увеличьте его на 30%, на 120%. 

var a = 15;
let result = a / 100 * 30 + a;

alert(result)  // Результат: 19,5

var b = 15;
let result = b / 100 * 120 + b;

alert(result)  // Результат: 33


// 19. Дано два числа. Найдите сумму 40% от первого числа и 84% от второго числа. 

var a = 50;  //Первый вариант решения
var b = 100;
a = a / 100 * 40;
b = b / 100 * 84;

alert(a + b) //Результат: 104

var a = 50;  //Второй вариант решения
var b = 100;
a = a / 100 * 40;
b = b / 100 * 84;

let result = a + b;

alert(result) //Результат: 104


// 20. Дано трехзначное число. Найдите сумму его цифр. 

var num = "333";
var a = num[0];
var b = num[1];
var c = num[2];
let result = parseInt(a) + parseInt(b) + parseInt(c);

alert(result)  // Результат: 9


// 21. Дано трехзначное числа. Поменяйте среднюю цифру на ноль. Найдите число, полученное выписыванием в обратном порядке цифр данного трехзначного натурального числа.

var a = "333";
var b = 0;
var num = a[0] + b + a[2];

alert(num)   // Результат: 303


// 22. Дано трехзначное число. Найдите число, полученное выписыванием в обратном порядке цифр данного трехзначного натурального числа.

var a = "369";
var b = a[2] + a[1] + a[0];

alert(b)   // Результат: 963


// 23. Задача (запустить код)

var a = 1; 
var b = 3;

a++ + b;
a + ++b;
++a + b++

alert(a), alert(b)  // Результат: 3 и 5


// 24. По примеру "3 > 2 ? 'сдал экзамен' : 'не сдал экзамен'" реализуй три задачи. 1) "Тебе есть 18 лет"; 2) "Есть ли у тебя загранпаспорт". 3) "Есть ли тебе 16 лет"

var grado = 3; // Первый вариант решения

grado > 2 ? alert('сдал экзамен') : alert('не сдал экзамен')

var grado = 3; // Второй вариант решения

if (grado > 2) { 
  console.log('сдал экзамен'); 
} else { 
  console.log('не сдал экзамен');  // Результат: "сдал экзамен"
}


// 24.1

let age = 25;

age >= 18 ? console.log('Ya tengo 18') : console.log('Todavia no tengo 18')


//24.2

let age = 25;

age >= 16 ? console.log('Ya tengo pasaporte') : console.log('Todavia no tengo pasaporte')


// Задача деление по модулю: определить какое число четное или не четное. Реализовать через тернарную операцию.

var num = 5;

num % 2 == 0 ? console.log('Chetnoe') : console.log('Ne chetnoe')



