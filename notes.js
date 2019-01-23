console.log('Starting notes.js');
const fs = require('fs');

/*
--- Utility Functions
*/

// fetches all elements in notes-data.json and parses them back to object, or return empty array
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);  // return array of previous objects
    } catch (e){
        return [];  // otherwise return empty array
    }

}
// saves notes array to notes-data.json file
var saveNotes = (notes) => { fs.writeFileSync('notes-data.json', JSON.stringify(notes)); }



/*
--- Export Functions
        Note: ___.filter(..) returns an array
*/
var addNote = (title, body) => {
    var notes = fetchNotes(); // array of objects
    var note = {
        title: title,
        body: body
    };
    var duplicateNotes = notes.filter((note) => note.title === title); // reset to zero everytime it's called
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }   
};

var getAll = () => {
    console.log('Getting all notes')
}

var getNote = (title) => {
    var notes = fetchNotes();
    var singleNote = notes.filter((note) => note.title === title);
    return singleNote[0]; // either return the first item or undefined
}

var removeNote = (title) => {
    // fetch notes
    var notes = fetchNotes(); // array of objects
    // filter notes, meaning creating a new list of notes without the note we are removing
    var newNotes = notes.filter((note) => note.title !== title); // reset to zero everytime it's called
    // save new notes array
    saveNotes(newNotes);
    return notes.length !== newNotes.length;
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}