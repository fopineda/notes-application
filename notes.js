console.log('Starting notes.js');
const fs = require('fs');

var addNote = (title, body) => {
    
    var notes = []; // array of objects
    var note = {
        title: title,
        body: body
    }

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e){
        // TODO: Implement this
    }


    var duplicateNotes = notes.filter((note) => note.title === title); // reset to zero everytime it's called

    if (duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
     
};

var getAll = () => {
    console.log('Getting all notes')
}

var getNote = (title) => {
    console.log(title);
}

var removeNote = () => {
    console.log(title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}