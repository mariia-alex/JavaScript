// 1.1. Дано два числа 42 и 55 определите при помощи тернарной операции какое число больше.

var a = 42;
var b = 55;

a > b ? alert("Число 'a' больше, чем 'b'") : alert("Число 'b' больше, чем 'a'")


// 1.2. Используй вместо статических чисел функцию rand(); Пример: я ограничил набор случайных чисел от 5 до 15 - rand(5, 15). Определи минимальное и максимальное число

var a = 5;
var b = 15;

res1 = Math.floor(Math.random() * (b - a + 1) + a)
res2 = Math.floor(Math.random() * (b - a + 1) + a)
res1 > res2 ? console.log(`${res1} больше, чем ${res2}`) : console.log(`${res2} больше, чем ${res1}`)


// 2. Сокращение Имени и Отчества. Возьмите за основу свою ФИО. У вас будет 3 переменные. (Ф.И.О.) Ваша программа должна сократить Имя и Отчество. вот пример: (Иванов Иван Иванович) => (Иванов И.И.)

let sn = "Perekhoda ";
let nam = " Maria ";
let fn = " Olexandrivna";
let fio = sn + nam.substr(0, 2) + "." + fn.substr(0, 2) + ".";
alert(fio)

// 3. Даны 4-ри разных числа (a=12 b=14 c=10 d=-12) Программа должна быть универсальной, и должна подходить для масштабирования. Задачей алгоритма определить какой число минимальное какое максимальное. НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ ГОТОВЫЕ ФУНКЦИИ!

var a = 12;
var b = 14;
var c = 10;
var d = -12;

let res1
let res2
a > b ? res1 = a : res1 = b
c > d ? res2 = c : res2 = d
res1 > res2 ? alert(`Максимальное число ${res1}`) : alert(`Максимальное число ${res2}`)

a < b ? res1 = a : res1 = b
c < d ? res2 = c : res2 = d
res1 < res2 ? alert(`Минимальное число ${res1}`) : alert(`Минимальное число ${res2}`)


// 4. Даны три стороны треугольника. Алгоритм должен определить и вывести сообщение какой это треугольник.

var a = 3;
var b = 5;
var c = 7;

if (a === b && a === c) {
  alert("Равносторонний треугольник")
} else {
  alert("Разносторонний треугольник")
}


// 5. Известны 4 стороны. Программа должна выводить прямоугольник или квадрат. Также продумать исключения является ли это вообще фигурой.

var a = 16;
var b = 32;
var c = 16;
var d = 32;

if (((a == b) && (a == c)) && a == d) {
  alert("Квадрат")
} else if (a == c && b == d) {
  alert("Прямоугольник")
} else {
  alert("Другая фигура")
}


// 6.	Вам нужно разработать программу, которая считала бы количество вхождений какой-нибудь выбранной вами цифры в выбранном вами числе. Например: цифра 7 в числе 123456789 встречается 1 раза (ограничите себя функцией rand(1, 99999) – это ваше случайное число) используй функцию substr_count()

var a = 1
var b = 999999
var num1 = Math.floor(Math.random() * (b - a + 1) + a)
var num1 = num1.toString()
let num1Len = num1.length
let checkNum = "1"
let k = 0

for (i = 0; i < num1Len; i++) {
  if (num1[i] == checkNum) {
  k++
  }
}
alert(`${num1}  Numero ${k} tiene ${checkNum}`)


// 7.	В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = 6;

if (month == 12 || month <= 2) {
  alert("Зима");
}
if (month >= 3 && month <= 5) {
  alert("Весна");
}
if (month >= 6 && month <= 8) {
  alert("Лето");
}
if (month >= 9 && month <= 11) {
  alert("Осень");
}


// 8.	Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

let = "abcde";

if (let[0] == "a") {   // Первый вариант решения
  alert("Yes")
} else {
  alert("No")
}

(let[0] == "a") ? alert("Yes") : alert("No")   // Второй вариант решения


// 9.	Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let = "12345";

if (let[0] == "3") {
  alert("Yes")
} else {
  alert("No")
}


// 10. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - тернарка и if else.

let test = true;

if (test === true) {
  alert("Verno!")
} else {
  alert("Neverno!")
}

test === true ? alert("Verno!") : alert("Neverno!")

let test = false;

if (test === true) {
  alert("Verno!")
} else {
  alert("Neverno!")
}

test === false ? alert("Verno!") : alert("Neverno!")


// 11. Дано Два массива рус и англ ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']. Если переменная lang = ru вывести массив на русском языке, а если en, то вывести на английском языке. Сделать через if else и через тернарку.

var lang = "ru";
if (lang == "ru") {
  var arr = ['пнд', ' вт', ' ср', ' чтв', ' пт', ' сбт', ' вс'];
}
if (lang == "en") {
  arr = ['mn', ' ts', ' wd', ' th', ' fr', ' st', ' sn'];
}
alert(arr);

var lang = "en";
switch (lang) {
  case "ru":
    arr = ['пнд', ' вт', ' ср', ' чтв', ' пт', ' сбт', ' вс'];
    break;

    case "en":
    arr = ['mn', ' ts', ' wd', ' th', ' fr', ' st', ' sn'];
    break;
}
  alert(arr);


// 12. В переменной cloсk лежит число от 0 до 59 – это минуты. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую). тернарка и if else.

var clock = 25;

  if (clock >= 0 && clock <= 14) {
  alert("В первую четверть.");
}
  if (clock >= 15 && clock <= 30) {
  alert("Во вторую четверть.");
}
  if (clock >= 31 && clock <= 45) {
  alert("В третью четверть.");
}
  if (clock >= 46 && clock <= 59) {
  alert("В четвертую четверть.");
}  


// Все следующие задания делаем через -while, -do while, -for, -for in, -for of

// 1. Дан массив ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya']. Развернуть этот массив в обратном направлении.

let arr = [' Alex ', ' Vanya ', ' Tanya ', ' Lena ', ' Tolya '];  
let result = [];

for (var i = arr.length - 1; i >= 0; i--) {      // Цикл for
result.push(arr[i]);
}
alert(result)

let result = [];        //Цикл while
let len = arr.length;
i = 0;

while (i < len) {
  result.push(arr[i])
  i++
}
alert(result)

let result = [];        // Цикл do while
let len = arr.length;
i = 0;

do {
  result.unshift(arr[i])
  i++
} while (i < len)
alert(result)

let result = [];       // Цикл for of

for (elem of arr) {
  result.unshift(elem)
}
console.log(result)

let result = [];        // Цикл for in

for (elem in arr) {
  result.unshift(arr[elem])
}
console.log(result)



// 2. Дан массив [44, 12, 11, 7, 1, 99, 43, 5, 69]. Развернуть этот массив в обратном направлении.

let arr = [44, 12, 11, 7, 1, 99, 43, 5, 69];
let result = [];

for (var i = arr.length - 1; i >= 0; i--) {    // Цикл for 
  result.push(arr[i]);
}
alert(result)

let result = [];            // Цикл for of

for (elem of arr) {
  result.unshift(elem)
}
alert(result)

let result = [];             // Цикл for in

for (elem in arr) {
  result.unshift(arr[elem])
}
alert(result)

let result = [];              // Цикл while
let len = arr.length;
i = 0;

while (i < len) {
  result.unshift(arr[i])
  i++
}
alert(result)


let result = [];             // Цикл do while
let len = arr.length;
i = 0;

do {
  result.unshift(arr[i])
  i++
} while (i < len)
console.log(result)



// 3. Дана строка let str = 'Hi, I am ALex', развернуть строку в обратном направлении.

let str = "Hi, I am ALex";
let arr = [" Hi ", " I ", " am ", " ALex "];
let result = [];

for (var i = arr.length - 1; i >= 0; i--) {
result.push(arr[i]);
}
alert(result) 


// 4. Дана строка let str = 'Hi, I am ALex', сделать ее с маленьких букв.

let str = "Hi, I am ALex";

console.log(str.toLowerCase()) 

// 5. Дана строка let str = 'Hi, I am ALex', сделать все буквы большие.

let str = "Hi, I am ALex";

console.log(str.toUpperCase())


// 7. Дан массив ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'], сделать все буквы с маленькой.

let arr = [' Alex ', ' Vanya ', ' Tanya ', ' Lena ', ' Tolya '];
let result = [];
let len = arr.length;
i = 0

while (i < len) {                    // Цикл while
result.push(arr[i].toLowerCase())
  i++
}
alert(result)

let result = [];                     // Цикл do while
let len = arr.length;
i = 0

do {
result.push(arr[i].toLowerCase())
  i++
} while (i < len)
alert(result)

let result = [];                     // Цикл for
let len = arr.length;

for (i = 0; i < len; i++) {
result.push(arr[i].toLowerCase())
}
alert(result)

let result = [];                     // Цикл for of

for (val of arr) {
result.push(val.toLowerCase())
}
alert(result)

let result = [];                      // Цикл for in

for (val in arr) {
result.push(arr[val].toLowerCase())
}
alert(result)


// 8. Дан массив ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'], сделать все буквы с большой.

let arr = [' Alex ', ' Vanya ', ' Tanya ', ' Lena ', ' Tolya '];
let result = [];
let len = arr.length;
i = 0

while (i < len) {                    // Цикл while
result.push(arr[i].toUpperCase())
i++
}
alert(result)

let result = [];                     // Цикл do while
let len = arr.length;
i = 0

do {
  result.push(arr[i].toUpperCase())
  i++
} while (i < len)
alert(result)

let result = [];                     // Цикл for
let len = arr.length;

for (i = 0; i < len; i++) {
result.push(arr[i].toUpperCase())
}
alert(result)

let result = [];                     // Цикл for of

for (val of arr) {
result.push(val.toUpperCase())
}
alert(result)

let result = [];                      // Цикл for in

for (val in arr) {
  result.push(arr[val].toUpperCase())
}
alert(result)

// 9. Дано число let num = 1234678, развернуть его в обратном направлении.

let num = 1234678;
let str = "1234678";
let result = str[6] + str[5] + str[4] + str[3] + str[2] + str[1] + str[0];

alert(result) 


let str = `${num}`;       // Цикл while
let result = " ";
let len = str.length;
i = len - 1;

while (i >= 0) {
  result += str[i]
  i--
}
alert(result)  

let str = `${num}`;      // Цикл do while
let result = " ";
let len = str.length;
i = len - 1;

do {
  result += str[i]
  i--
} while (i >= 0)
alert(result)

let str = `${num}`;      // Цикл for
let result = " ";
let len = str.length;

for (i = len - 1; i >= 0; i--) {
  result += str[i]
}
alert(result)

let str = `${num}`;      // Цикл for of
let result = " ";
let len = str.length;
i = len - 1;

for (val of str) {
  result = val + result
}
console.log(result)

let str = `${num}`;      // Цикл for in
let result = " ";
let len = str.length;
i = len - 1;

for (val in str) {
  result = str[val] + result
}
console.log(result)


// 10. Дан масси [44, 12, 11, 7, 1, 99, 43, 5, 69], отсортируй его в порядке убывания, не используй готовые функции.

let arr = [44, 12, 11, 7, 1, 99, 43, 5, 69];
let result = arr;
let sort = false;
  
while (!sort) {
  sort = true;
  for (i = 1; i < result.length; i++) {
  if (result[i - 1] < result[i]) {
    sort = false;
    let fil = result[i - 1];
    result[i - 1] = result[i];
    result[i] = fil;
    }
  }
}
console.log(result)

