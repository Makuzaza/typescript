// “let” and “const”

// 1. Declare a variable with a numeric value and then reassign it to a different numeric value
let value: number = 2;
value = 3;
console.log(value);

// 2. Declare a constant that holds a string value and represents a user's email which will not change
const mail: string = 'mail@mail.com';
console.log(mail); // mail@mail.com

// 3. Declare a constant that holds an array of numbers. Add a new number to the array.
const array: number[] = [1, 2, 3];
array.push(4);
console.log(array); // [1, 2, 3, 4]

// 4. Declare a variable of type object. Inside the object, add a property called name that holds a string, and a property called age that holds a number. Reassign the object to a new object with different property values
const person: { name: string, age: number } = { name: 'John', age: 25 };
person.age = 26;
console.log(person); // { name: 'John', age: 26 }

// 5. Declare a variable without initializing it. Based on a condition, assign a string value to it
let uninitializedVariable: string | undefined;
const condition = true;
if (condition) {
    uninitializedVariable = 'Initialized Value';
}
console.log(uninitializedVariable); // Initialized Value

let num1: string, num2: boolean;
num2 = true;
if (num2) {
  num1 = "hello";
  console.log(num1);
}

// 6. Use a loop to iterate over an array of strings, printing each one to the console
const stringArray: string[] = ['apple', 'orange', 'banana'];
for (const item of stringArray) {
    console.log(item); // apple, orange, banana
}

const arr1: string[] = ["a", "b", "c"];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]); // a, b, c
}

// Arrow functions

// 1.Write an arrow function to add two numbers
const add2 = (n1: number, n2: number): number => n1 + n2;
console.log(add2(10,12)) // 22

// 2.Write an arrow function to multiply two numbers
const multiple = (n1: number, n2: number): number => {
 return n1 * n2;
}
console.log(multiple(10,12)) // 120

// 3.Write an arrow function to divide two numbers
const divide = (n1: number, n2: number): number => n1 / n2;
console.log(divide(100,5)) // 20

// Default function parameters

// 1. In your previous add function, add a default parameters value for second parameter e.g. 
function add3(x: number, y: number = 72): number {
    return x + y;
}
console.log(add3(10)) // 82

// 2. And the call the add function with only one argument
const result1 = add3(5);
console.log(result1); // 77

// 3. Try for example setting default parameter for the first parameter
function add4(n1: number = 10, n2: number = 2): number { 
    return n1 + n2;
}
console.log(add4(11)) // 13

// Spread Operator

const hobbies: string[] = ['Sports', 'Cooking', 'Reading'];
const activeHobbies: string[] = ['Hiking'];
 
activeHobbies.push(hobbies[0], hobbies[1]);
console.log('activeHobbies:', activeHobbies); // activeHobbies: [ 'Hiking', 'Sports', 'Cooking' ]
 
activeHobbies.push(...hobbies);
console.log('activeHobbies:', activeHobbies); // activeHobbies: [ 'Hiking', 'Sports', 'Cooking', 'Reading' ]

// Rest parameters

// const add = (...numbers: number[]) => {
    //   return numbers.reduce((currResult, currValue) => {
        //     return currResult + currValue;
        //   }, 0);
        // };
        // const addNumbers = add(5, 10, 2, 3.7);
        // console.log(addNumbers);
        const add = (...numbers: number[]) => {  
            return numbers.reduce((currResult, currValue) => {    
                return currResult + currValue;  
            }, 0);
        };
        const addNumbers = add(5, 10, 2);
        console.log(addNumbers); // 17
