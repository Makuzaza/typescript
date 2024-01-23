// “let” and “const”
// 1. Declare a variable with a numeric value and then reassign it to a different numeric value
var value = 2;
value = 3;
console.log(value);
// 2. Declare a constant that holds a string value and represents a user's email which will not change
var mail = 'mail@mail.com';
console.log(mail); // mail@mail.com
// 3. Declare a constant that holds an array of numbers. Add a new number to the array.
var array = [1, 2, 3];
array.push(4);
console.log(array); // [1, 2, 3, 4]
// 4. Declare a variable of type object. Inside the object, add a property called name that holds a string, and a property called age that holds a number. Reassign the object to a new object with different property values
var person = { name: 'John', age: 25 };
person.age = 26;
console.log(person); // { name: 'John', age: 26 }
// 5. Declare a variable without initializing it. Based on a condition, assign a string value to it
var uninitializedVariable;
var condition = true;
if (condition) {
    uninitializedVariable = 'Initialized Value';
}
console.log(uninitializedVariable); // Initialized Value
var num1, num2;
num2 = true;
if (num2) {
    num1 = "hello";
    console.log(num1);
}
// 6. Use a loop to iterate over an array of strings, printing each one to the console
var stringArray = ['apple', 'orange', 'banana'];
for (var _i = 0, stringArray_1 = stringArray; _i < stringArray_1.length; _i++) {
    var item = stringArray_1[_i];
    console.log(item); // apple, orange, banana
}
var arr1 = ["a", "b", "c"];
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]); // a, b, c
}
// Arrow functions
// 1.Write an arrow function to add two numbers
var add2 = function (n1, n2) { return n1 + n2; };
console.log(add2(10, 12)); // 22
// 2.Write an arrow function to multiply two numbers
var multiple = function (n1, n2) {
    return n1 * n2;
};
console.log(multiple(10, 12)); // 120
// 3.Write an arrow function to divide two numbers
var divide = function (n1, n2) { return n1 / n2; };
console.log(divide(100, 5)); // 20
// Default function parameters
// 1. In your previous add function, add a default parameters value for second parameter e.g. 
function add3(x, y) {
    if (y === void 0) { y = 72; }
    return x + y;
}
console.log(add3(10)); // 82
// 2. And the call the add function with only one argument
var result1 = add3(5);
console.log(result1); // 77
// 3. Try for example setting default parameter for the first parameter
function add4(n1, n2) {
    if (n1 === void 0) { n1 = 10; }
    if (n2 === void 0) { n2 = 2; }
    return n1 + n2;
}
console.log(add4(11)); // 13
// Spread Operator
var hobbies = ['Sports', 'Cooking', 'Reading'];
var activeHobbies = ['Hiking'];
activeHobbies.push(hobbies[0], hobbies[1]);
console.log('activeHobbies:', activeHobbies); // activeHobbies: [ 'Hiking', 'Sports', 'Cooking' ]
activeHobbies.push.apply(// activeHobbies: [ 'Hiking', 'Sports', 'Cooking' ]
activeHobbies, hobbies);
console.log('activeHobbies:', activeHobbies); // activeHobbies: [ 'Hiking', 'Sports', 'Cooking', 'Reading' ]
// Rest parameters
// const add = (...numbers: number[]) => {
//   return numbers.reduce((currResult, currValue) => {
//     return currResult + currValue;
//   }, 0);
// };
// const addNumbers = add(5, 10, 2, 3.7);
// console.log(addNumbers);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (currResult, currValue) {
        return currResult + currValue;
    }, 0);
};
var addNumbers = add(5, 10, 2);
console.log(addNumbers); // 17
