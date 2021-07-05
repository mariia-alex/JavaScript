// 1.1. Дано два числа 42 и 55 определите при помощи тернарной операции какое число больше.

let a = 42;
let b = 55;
let res = a > b ? "Число 'a' больше, чем 'b'" : "Число 'b' больше, чем 'a'";

alert(res)


// 1.2. Используй вместо статических чисел функцию rand(); Пример: я ограничил набор случайных чисел от 5 до 15 - rand(5, 15). Определи минимальное и максимальное число

let a = 5;
let b = 15;

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

let a = 12, b = 14, c = 10, d = -12;

let res1 = a > b ? a : b; 
let res2 = c > d ? c : d;
let res3 = a < b ? a : b;
let res4 = c < d ? c : d;
let resMax = res1 > res2 ? `Максимальное число ${res1}` : `Максимальное число ${res2}`
let resMin = res3 < res4 ? `Минимальное число ${res3}` : `Минимальное число ${res4}`

console.log(resMax, resMin)

res_1 = a > b ? a : b
res_2 = c > d ? c : d
res_1 > res_2 ? console.log(`Максимальное число - ${res_1}`) : console.log(`Максимальное число - ${res_2}`)

res_1 = a < b ? a : b
res_2 = c < d ? c : d
res_1 < res_2 ? console.log(`Минимальное число - ${res_1}`) : console.log(`Минимальное число - ${res_2}`)


// 4. Даны три стороны треугольника. Алгоритм должен определить и вывести сообщение какой это треугольник.

let a = 3;
let b = 5;
let c = 7;

if (a === b && a === c) {
  alert("Равносторонний треугольник")
} else {
  alert("Разносторонний треугольник")
}


// 5. Известны 4 стороны. Программа должна выводить прямоугольник или квадрат. Также продумать исключения является ли это вообще фигурой.

let a = 16;
let b = 32;
let c = 16;
let d = 32;

if (((a == b) && (a == c)) && a == d) {
  alert("Квадрат")
} else if (a == c && b == d) {
  alert("Прямоугольник")
} else {
  alert("Другая фигура")
}


// 6.	Вам нужно разработать программу, которая считала бы количество вхождений какой-нибудь выбранной вами цифры в выбранном вами числе. Например: цифра 7 в числе 123456789 встречается 1 раза (ограничите себя функцией rand(1, 99999) – это ваше случайное число) используй функцию substr_count()

let a = 1;
let b = 999999;
num1 = Math.floor(Math.random() * (b - a + 1) + a)
num1 = num1.toString()
let num1Len = num1.length
let checkNum = "1"
let k = 0

for (i = 0; i < num1Len; i++) {
  if (num1[i] == checkNum) {
    k++
  }
}
console.log(`${num1}  Numero ${k} tiene ${checkNum}`)


// 7.	В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = 6;

if (month == 12 || month >= 1 && month <= 2) {
  alert("Зима");
} else if (month >= 3 && month <= 5) {
  alert("Весна");
} else if (month >= 6 && month <= 8) {
  alert("Лето");
} else if (month >= 9 && month <= 11) {
  alert("Осень");
} else {
  alert("Нет такого месяца в году")
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

let lang = "ru";
if (lang == "ru") {
  arr = ['пнд', ' вт', ' ср', ' чтв', ' пт', ' сбт', ' вс'];
}
if (lang == "en") {
  arr = ['mn', ' ts', ' wd', ' th', ' fr', ' st', ' sn'];
}
alert(arr);

let lang = "en";
switch (lang) {
  case "ru":
    arr = ['пнд', ' вт', ' ср', ' чтв', ' пт', ' сбт', ' вс'];
    break;

  case "en":
    arr = ['mn', ' ts', ' wd', ' th', ' fr', ' st', ' sn'];
    break;
}
alert(arr)


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
let len = arr.length;                          // Цикл for
let j = 0;

for (let i = len - 1; i >= 0; i--) {       
  result[j] = arr[i]
  j++
}
alert(result)


let arr = [' Alex ', ' Vanya ', ' Tanya ', ' Lena ', ' Tolya '];  //Цикл while
let result = [];        
let len = arr.length;
let i = len - 1;
let j = 0;

while (i >= 0) {
  result[j] = arr[i]
  i--
  j++
}
alert(result)


let arr = [' Alex ', ' Vanya ', ' Tanya ', ' Lena ', ' Tolya '];   // Цикл do while
let result = [];        
let len = arr.length;
let i = len - 1;
let j = 0;

  do {
  result[j] = arr[i]
  i--
  j++
}
  while (i >= 0)
  alert(result)


let arr = [' Alex ', ' Vanya ', ' Tanya ', ' Lena ', ' Tolya '];   // Цикл for of
let result = [];       
let len = arr.length;

for (elem of arr) {
  result[len] = elem
  len--
}
alert(result)


let arr = [' Alex ', ' Vanya ', ' Tanya ', ' Lena ', ' Tolya '];     // Цикл for in
let result = [];       
let len = arr.length;
let i = 1;
let j = 0;

  for (elem in arr) {
  result[j] = arr[len - i]
  i++
  j++
}
  alert(result)


// 2. Дан массив [44, 12, 11, 7, 1, 99, 43, 5, 69]. Развернуть этот массив в обратном направлении.

let arr = [44, 12, 11, 7, 1, 99, 43, 5, 69];      // Цикл for 
let result = [];
let len = arr.length;
let j = 0;

  for (let i = len - 1; i >= 0; i--) {
  result[j] = arr[i]
  j++
}
  console.log(result)


let arr = [44, 12, 11, 7, 1, 99, 43, 5, 69];    // Цикл for of
let result = [];  
let len = arr.length

  for (elem of arr) {
  result[len] = elem
  len--
}
  console.log(result)


let arr = [44, 12, 11, 7, 1, 99, 43, 5, 69];      // Цикл for in
let result = [];
let len = arr.length;
let i = 1;
let j = 0;

  for (elem in arr) {
  result[j] = arr[len - i]
  i++
  j++
}
  console.log(result)


let arr = [44, 12, 11, 7, 1, 99, 43, 5, 69];     // Цикл while
let result = [];              
let len = arr.length;
let i = len - 1;
let j = 0;

  while (i >= 0) {
  result[j] = arr[i]
  i--
  j++
}
  console.log(result)


let arr = [44, 12, 11, 7, 1, 99, 43, 5, 69];      // Цикл do while
let result = [];             
let len = arr.length;
let i = len - 1;
let j = 0;

  do {
  result[j] = arr[i]
  i--
  j++
}
  while (i >= 0)
  console.log(result)


  
// 3. Дана строка let str = 'Hi, I am ALex', развернуть строку в обратном направлении.

let str = "Hi, I am ALex";               // Цикл for 
let result = " ";
let len = str.length;

  for (let i = len - 1; i >= 0; i--) {
  result += str[i]
}
  console.log(result)


let str = "Hi, I am ALex";               // Цикл for of
let result = " ";
let len = str.length;

  for (elem of str) {
  result = elem + result
}
  console.log(result)


let str = "Hi, I am ALex";               // Цикл for in
let result = " ";

  for (elem in str) {
  result = str[elem] + result
}
  console.log(result)


let str = "Hi, I am ALex";               // Цикл while
let result = " ";
let len = str.length;
let i = len - 1;

  while (i >= 0) {
  result += str[i]
  i--
}
  console.log(result)


let str = "Hi, I am ALex";               // Цикл do while
let result = " ";
let len = str.length;
let i = len - 1;

  do {
  result += str[i]
  i--
}
  while (i >= 0)
  console.log(result)


 // 4. Дана строка let str = 'Hi, I am ALex', сделать ее с маленьких букв.

let str = "Hi, I am ALex";

console.log(str.toLowerCase())

// 5. Дана строка let str = 'Hi, I am ALex', сделать все буквы большие.

let str = "Hi, I am ALex";

console.log(str.toUpperCase())


// 7. Дан массив ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'], сделать все буквы с маленькой.

let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];   // Цикл while
let result = [];
let len = arr.length;
let len_res = res.length; 
i = 0; j = 1;

while (i < len) {
  result[len_res] = arr[len - j].toLowerCase()
  i++
  j++
  len_res++
}
console.log(result)


let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];     // Цикл do while
let result = [];                    
let len = arr.length;
let len_res = res.length;
i = 0; j = 1;

do {
  result[len_res] = arr[len - j].toLowerCase()
  i++
  j++
  len_res++
}
while (i < len)
console.log(result)


let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];      // Цикл for
let result = [];                    
let len = arr.length;
let len_res = res.length;
let j = 1;

for (let i = 0; i < len; i++) {
  result[len_res] = arr[len - j].toLowerCase()
  j++
  len_res++
}
console.log(result)


let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];     // Цикл for of
let result = [];                    
let len = arr.length

for (elem of arr) {
  result[len] = elem.toLowerCase()
  len--
}
console.log(result)


let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];      // Цикл for in
let result = []; 
let len = arr.length;
i = 1; j = 0;

for (elem in arr) {
  result[j] = arr[len - i].toLowerCase()
  i++
  j++
}
console.log(result)


// 8. Дан массив ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'], сделать все буквы с большой.

let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];    // Цикл while
let result = [];
let len = arr.length;
let len_res = res.length;
i = 0, j = 1;

while (i < len) {
  result[len_res] = arr[len - j].toUpperCase()
  i++
  j++
  len_res++
}
console.log(result)


let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];    // Цикл do while
let result = [];                    
let len = arr.length;
let len_res = res.length;
i = 0, j = 1;

do {
  result[len_res] = arr[len - j].toUpperCase()
  i++
  j++
  len_res++
}
while (i < len)
console.log(result)


let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];     // Цикл for
let result = [];                     
let len = arr.length;
let len_res = res.length;
j = 1;

for (let i = 0; i < len; i++) {
  result[len_res] = arr[len - j].toUpperCase()
  j++
  len_res++
}
console.log(result)


let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];     // Цикл for of
let result = [];                     
let len = arr.length;

for (elem of arr) {
  result[len] = elem.toUpperCase()
  len--
}
console.log(result)


let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];     // Цикл for in
let result = [];                      
let len = arr.length;
let len_res = res.length;
i = 1;

for (elem in arr) {
  result[len_res] = arr[len - i].toUpperCase()
  i++
  len_res++
}
console.log(result)


// 9. Дано число let num = 1234678, развернуть его в обратном направлении.

let num = 1234678;       // Цикл while
let str = `${num}`;       
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

let arr = [44, 12, 11, 7, 1, 99, 43, 5, 69];       // Цикл do while
let len = arr.length;
j = len - 1;

while (j > 0) {
let i = 0
  while (i < j) {
  if (arr[i] < arr[i + 1]) {
  let temp = arr[i]
  arr[i] = arr[i + 1]
  arr[i + 1] = temp
  }
    i++
  }
    j--
}
console.log(arr)


let arr = [44, 12, 11, 7, 1, 99, 43, 5, 69];       // Цикл for
let len = arr.length;

for (let j = len - 1; j > 0; j--) {
  for (let i = 0; i < j; i++) {
  if (arr[i] < arr[i + 1]) {
  let temp = arr[i]
  arr[i] = arr[i + 1]
  arr[i + 1] = temp
  }
}
}
console.log(arr)


