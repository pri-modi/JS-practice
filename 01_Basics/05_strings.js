let novel = "Eighty Six"
let name = "Lena"
let age = 16

// Bad coding style
// console.log(name + " " + age);

// Use backticks (``) for stinr interpolation
// Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). 

console.log(`The name of the female protagist of light novel ${novel} is ${name}, and she is ${age} years old.`);

console.log(`Novel- ${novel.toUpperCase()}`);

const mmc = new String('Shinei Nouzen')
console.log(mmc[0]);
console.log(mmc.__proto__);
console.log(mmc.length);
console.log(mmc.toUpperCase());
console.log(mmc.charAt(10));
console.log(mmc.indexOf('N'));

console.log(mmc.substring(0,4))


const replaceVar = 'Vladilena16Milize'
console.log(replaceVar.replace('16', ' '));
console.log(replaceVar.includes("lena"));
console.log(replaceVar.split('16'));
