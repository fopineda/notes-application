console.log('Starting notes.js');
// console.log(module);

var addNote = (title, body) => {
    console.log('Adding note', title, body);
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