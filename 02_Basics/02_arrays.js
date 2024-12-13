const arr1 = ["abc", "pqr", "def"]
const arr2 = ["xyz", "ghi", "jkl"] 

// arr1.push(arr2)
// console.log(arr1);
// console.log(arr1[3][1]);

// concat() returns a new array after concatnating two arrays
const arr3 = arr1.concat(arr2)
console.log(arr3);

// spread operator
const arr4 = [...arr1, ...arr2]
console.log(arr4);

const arr5 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const arr6 = arr5.flat(Infinity) 
// const arr6 = arr5.flat(2) 
console.log(arr6);

console.log(Array.isArray("henry")); // Checks if the given value is an array and returns boolean
console.log(Array.from("Vladilena")); // Converts the given value to an array
console.log(Array.from({name: "Shinei"})); // 

let n1 = 100
let n2 = 200
let n3 = 300

console.log(Array.of(n1, n2, n3));

