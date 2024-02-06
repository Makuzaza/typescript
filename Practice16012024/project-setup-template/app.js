"use strict";
// const logDetails = (uid: string | number, item, string) => {   console.log(`${item} has a uid of ${uid}`); 
// }; 
const logDetails = (uid, item, string) => {
    console.log(`${item} has a uid of ${uid}`);
};
// const greet = (user: { name: string; uid: string | number }) => {   console.log(`${user.name} says hello`); };
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
console.log(logDetails(1, 'test', 'james'));
console.log(greet({ name: 'john', stringOrNumber: 123 }));
// type Combinable = number | string;
// type conversionDescriptor = 'as-number' | 'as-text';
// function combine (
//     input1: Combinable,
//     input2: Combinable,
//     resultConversion: conversionDescriptor
//     ) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
//         result = +input1 + +input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     } 
//     return result;
// }
// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);
// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);
// const combinedNames = combine('James', 'Bond', 'as-text');
// console.log(combinedNames);
// function processValue(values: number[] | number) {
//     if (Array.isArray(values)) {
//         console.log('Processing array of numbers:', values);
//     } else {
//         console.log('Processing single number:', values);
//     }
// }
// processValue([1, 2, 3]);
// processValue(43);
// function combine(input1: number | string, input2: number | string) {
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2
//     } else {
//         result = input1.toString() + input2.toString()
//     }
//     return result
// }
// const combinedAges = combine(30, 26);
// console.log(combinedAges)
// const combinedNames = combine('Max', 'Anna');   
// console.log(combinedNames);
// enum Day {  
//     one = 'Monday',  
//     two = 'Tuesday',
//     three = 'Wednesday',
//     four = 'Thursday',
//     five = 'Friday',
//     six = 'Saturday',
//     seven = 'Sunday'
// }
// enum Day {  
//     Monday,  
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }
// let today: Day = Day.two; 
// console.log (today)
// console.log (Day.four)
// console.log (Day[2])
// let mytuple : [string, number, boolean] = ["James Bond", 30, true];
// console.log(`Name: ${mytuple[0]}, Age: ${mytuple[1]}, Has Driver's License: ${mytuple[2]}`);
// const person : {
//     name: any;
//     age: number;
//     hobbies: string[];
// } = {
//     name: 'Mary',
//     age: 30,
//     hobbies: ['sports', 'cooking', 'reading']
// };
// let favoriteActivities: string[];
// favoriteActivities = ["sports", "cooking"];
// for (const hobby of person.hobbies) {  
//     console.log(hobby.toUpperCase());
// }
// console.log(person.name, favoriteActivities)
// const person = {
//     name: 'Mary',
//     age: 30
// };
// console.log(person.name, person.age)
// console.log(person.nickname)
// const product : {  
//     id: string; 
//     price: number,  
//     tags: any;
//     details: {    
//         title: string;,    
//         description: string; 
//     }
// } = {  
//     id: 'abc1',  
//     price: 12.99,  
//     tags: ['great-offer', 'hot-and-new'],  
//     details: {    
//         title:'Red Carpet',    
//         description:'Agreat carpet - almost brand-new!'  
//     }
// }
// console.log(product.details.description)
