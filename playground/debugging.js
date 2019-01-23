var person = {
    name: 'Felipe'
};

person.age = 23;

debugger;

person.name = "Osiel";

console.log(person);

// node inspect debugging.js
// > n (next)
// > c (contine to end or where "debugger;" is located)
// > repl (allows to manipulate or type out variables from where it's currently standing)
// CTRL + C to exit repl
// CTRL + C (x2) to exit debug
// adding "debugger;" to code is the same thing as addding a breakpoint, you will type "c" to get there.