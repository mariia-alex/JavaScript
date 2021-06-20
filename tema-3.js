// 1. Площадь прямоугольника:

function recArea(width, height) {
  let SPryam = width * height;
  return SPryam;
}
  console.log("Площадь прямоугольника : " + recArea(10, 23))

// 1.1. Найти периметр (квадрата или прямоугольника):

var a = prompt("Сторона A", 0); 
var b = prompt("Сторона B", 0); 
var s = a * b;
alert(s);

// 2. Теорема Пифагора:

function pythagorean(sideA, sideB, sideC) {
  let sqrtA = sideA * sideA;
  let sqrtB = sideB * sideB;
  let sqrtC = sideC * sideC;
  
  if (sqrtA + sqrtB === sqrtC) {
    return "Это прямоугольный треугольник"
  } else if (sqrtA + sqrtB > sqrtC) {
    return "Это остроугольный треугольник"
  } else if (sqrtC > sqrtA + sqrtB) {
    return "Это тупоугольный треугольник"
  } else {
    "Другой тип треугольника"
  }
}
  console.log(pythagorean(2, 3, 4))

// 3. Найти дискриминант

function Discrim(a, b, c) {
  let D = (b * b) - (4 * a * c);
  let sqrtDiscr = Math.sqrt(D)

  if (D === 0) {
    let x = (-b + sqrtDiscr) / 2 * a
    return "Уравнение имеет 1 значение"
  }

  if (D > 0) {
    let x1 = (-b + sqrtDiscr) / 2 * a
    let x2 = (-b - sqrtDiscr) / 2 * a
    return "Уравнение имеет 2 значения"
  } 
    
  if (D < 0) {
    return "Уравнение не имеет значений"
  }
}
  console.log(Discrim(3, 2, 1))  

// 4. Создать только четные числа до 100

function evenNumb(num) {

let arr = [];
let j = 0;

  for (let i = 2; i <= num; i += 2, j++) {
    arr[j] = i
  }
  return arr
}
  console.log(evenNumb(100))

// 5. Создать не четные числа до 100

function oddNumb(num) {

let arr = [];
let j = 0;

  for (let i = 1; i <= num; i += 2, j++) {
  arr[j] = i
  }
  return arr
}  
  console.log(oddNumb(100))

// 6. Создать функцию по нахождению числа в степени

function degreeOfNumber(num, d) {
  let a = num
  for (let i = 1; i < d; i++) {
    a *= num
  }
  return a
}
  console.log(degreeOfNumber(3, 5))

// 7. Написать функцию сортировки. Функция принимает массив случайных чисел и сортирует их по порядку. По дефолту функция сортирует в порядке возростания.
// Но если передать всторой параметр то функция будет сортировать по убыванию.
  
let arr = [44, 12, 11, 7, 1, 99, 43, 5, 69]
function sort(arr, ascDesc) {
let lenArr = arr.length

if (ascDesc === 'asc' || !ascDesc) {
  for (let j = lenArr - 1; j > 0; j--) {
  
  for (let i = 0; i < j; i++) {
  if (arr[i] > arr[i + 1]) {
    let temp = arr[i]
    arr[i] = arr[i + 1]
    arr[i + 1] = temp
    }
  }
}
    return arr
  
  } else if (ascDesc === 'desc') {
    for (let j = lenArr - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
    if (arr[i] < arr[i + 1]) {
      let temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
  }
}
    return arr
  }
}
  console.log(sort(arr, 'desc'))

// 8. Написать функцию поиска в массиве.

let arr = [44, 12, 11, 7, 12, 44, 43, 5, 69]

function arrSearch(arr, elem) {
let num = 0
let lengArr = arr.length
  
for (let i = 0; i < lengArr; i++) {
  if (elem === arr[i]) {
  num++
  }
}
  return `Количество повторяющихся элементов: ${num}`
}
  console.log(arrSearch(arr, 44))






