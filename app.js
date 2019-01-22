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
    if (note === undefined){
        console.log("Note already exists!");
    }
    else {
        console.log('Note successfully added!');
        console.log('-------------------------');
        console.log(`Title: ${note.title}`);
        console.log(`Title: ${note.body}`);
        console.log('-------------------------');
    }
} else if (command  === "list"){
    notes.getAll();
} else if (command  === "read"){
    notes.getNote(argv.title);
} else if (command  === "remove"){
    notes.removeNote(argv.title);
} else{
    console.log("command not recognized")
}