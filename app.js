console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash'); 
const notes = require('./notes.js');
const yargs = require("yargs");


const argv = yargs.argv;
var command = process.argv[2];
console.log("Command: " + command + "\n");
// console.log("yargs: "+ argv.body); // Ex: argv.title


if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    var message = (note === undefined) ? "Note already exists" : `Note successfully added\n--------------\nTitle: ${note.title}\nBody: ${note.body}\n--------------`
    console.log(message);
} else if (command  === "list"){
    notes.getAll();
} else if (command  === "read"){
    var note = notes.getNote(argv.title);
    var message = (note === undefined) ? "Note not found" : `Note title: ${note.title}, Note body: ${note.body}`;
    console.log(message);

} else if (command  === "remove"){
    var noteRemoved = notes.removeNote(argv.title);
    var message  = (noteRemoved) ? "Note was removed" : "Note not found";
    console.log(message);

} else{
    console.log("command not recognized")
}