// 1. 
// type numArray = Array<number>
// type arr = Array<string>
// const last = (arr: Array<any>) => {
//     return arr[arr.length -1];
// };
// const l = last([1, 2, 3]);
// const l2 = last (['a', 'b', 'c']);
// console.log(l);
// console.log(l2);
// 2.
// function wrapInArray<T>(value: T): T[] {
//     return [value];
//   }
// // Usage with a number 
// const numberArray = wrapInArray(5);
// console.log(numberArray); // Outputs: [5]
// // Usage with a string
// const stringArray = wrapInArray("Hello");
// console.log(stringArray); // Outputs: ["Hello"]
// 3.
// Write your the generic function called “createTuple” here
// Usage with a string and a number
function createTuple(v1, v2) {
    return [v1, v2];
}
var tuple1 = createTuple("Username", 42);
console.log(tuple1); // Should output: ["Username", 42]
// Usage with a boolean and an array
var tuple2 = createTuple(true, [1, 2, 3]);
console.log(tuple2); // Should output: [true, [1, 2, 3]]
