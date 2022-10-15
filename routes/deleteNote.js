const deleteNote = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all notes
deleteNote.get('/', (req, res) => {
    console.info(`${req.method} request received to retrieve notes`);
  
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
  });

// POST Route for submitting new note
deleteNote.delete('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to delete note`);
  
    let db = JSON.parse(fs.readFileSync('db/notes.json'))
    // removing note with id
    let deleteNote = db.filter(item => item.id !== req.params.id);
    // Rewriting note to db.json
    fs.writeFileSync('db/notes.json', JSON.stringify(deleteNote));
    res.json(deleteNote);
    
});
