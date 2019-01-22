// explores JSON


// -- Takes JSON object and converts it to a string (stringify)
// var obj = {
//     name: 'Felipe'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);  // correct!
// console.log(obj);

// -- Takes JSON string and converts it to a JSON object (parse)
// var personString = '{"name": "Felipe", "age": 23}'; // can be grabbed from a server or text file
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


const fs = require('fs');

// object
var originalNote = {
    title: "Some Title",
    body: 'Some Body'
}
// Converts JSON object into a string
originalNoteString = JSON.stringify(originalNote);
// Writes string to json file
fs.writeFileSync('notes.json', originalNoteString);


// read out the contents of JSON file 
var noteString = fs.readFileSync('notes.json');
// Converts string to JSON object
var note = JSON.parse(noteString);

// Prints out object
console.log(typeof note);
console.log(note);