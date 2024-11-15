// Задание 1: Дано: массив чисел const numbers = [5, 10, 15, 20, 25]. Используя map, создайте новый массив, где каждый элемент будет увеличен на 3.
// Ожидаемый результат: [8, 13, 18, 23, 28]

const numbers = [5, 10, 15, 20, 25];

const newNumbers = numbers.map(function(element) {
    return element + 3;
});
console.log("newNum result: ", newNumbers);


// Задание 2: Дан массив строк const words = ["apple", "banana", "cherry", "date"]. Используя метод map, создайте новый массив, который будет содержать длины каждой строки из исходного массива.
// Ожидаемый результат: [5, 6, 6, 4]

const words = ["apple", "banana", "cherry", "date"];

const lengths = words.map(function(word){
    return word.length;
});

console.log("lengths result :", lengths)


// Задание 3: Дан массив объектов с информацией о товарах:
// const products = [
//     { name: "laptop", price: 1000 },
//     { name: "phone", price: 600 },
//     { name: "tablet", price: 450 }
// ];
// Используя map, создайте новый массив, где каждый объект будет содержать только name товара и price с 20%-ной скидкой.


// Ожидаемый результат:
// [
//     { name: "laptop", price: 800 },
//     { name: "phone", price: 480 },
//     { name: "tablet", price: 360 }
// ]

const products = [
    { name: "laptop", price: 1000 },
    { name: "phone", price: 600 },
    { name: "tablet", price: 450 }
    ];

const discountedProducts = products.map(function(product){
    
    return product.name, product.price * 0.8
    
});

console.log(discountedProducts)