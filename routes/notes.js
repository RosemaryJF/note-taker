const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for new note`);

  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting new note
notes.post('/', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to submit new note`);

  // Destructuring the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the new note to save
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, './db/notes.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting new note');
  }
});

notes.delete('/', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to delete note`);

  let db = JSON.parse(fs.readFileSync('db/notes.json'))
  // removing note with id
  let deleteNote = db.filter(item => item.id !== req.params.id);
  // Rewriting note to db.json
  fs.writeFileSync('db/notes.json', JSON.stringify(deleteNote));
  res.json(deleteNote);
});

module.exports = notes;



