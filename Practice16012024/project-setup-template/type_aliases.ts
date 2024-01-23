type stringOrNumber = number | string;
type objectName = { name: string; stringOrNumber };

// const logDetails = (uid: string | number, item, string) => {   console.log(`${item} has a uid of ${uid}`); 
// }; 

const logDetails = (uid: stringOrNumber, item, string) => {   
    console.log(`${item} has a uid of ${uid}`); 
};

// const greet = (user: { name: string; uid: string | number }) => {   console.log(`${user.name} says hello`); };

const greet = (user: objectName) => {   
    console.log(`${user.name} says hello`); 
};

console.log(logDetails(1, 'test', 'james'));
console.log(greet({ name: 'john', stringOrNumber: 123}));