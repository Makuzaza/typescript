enum Day {  
    one = 'Monday',  
    two = 'Tuesday',
    three = 'Wednesday',
    four = 'Thursday',
    five = 'Friday',
    six = 'Saturday',
    seven = 'Sunday'
}

enum Day {  
    Monday,  
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let today: Day = Day.two; 
console.log (today)
console.log (Day.four)
console.log (Day[2])

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