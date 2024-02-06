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
