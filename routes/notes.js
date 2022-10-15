const notes = require('express').Router();
const fs = require('fs');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// Route for retrieving all notes
notes.get('/', (req, res) => {
  // Log that a get request was received
  console.info(`${req.method} request received to retrieve notes`);

  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

// Post route for submitting new note
notes.post('/', (req, res) => {
  // Log that a post request was received
  console.info(`${req.method} request received to submit new note`);

  // Destructuring of the items in req.body
  const { title, text } = req.body;

  // If all the required mote properties are present
  if (title && text) {
    // A variable for the new note to save is created
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    // Appends the new note to the db file
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

// Deletes a note with a specific ID from the db file 
// Writes a new file without it
notes.delete("/:id", (req, res) => {

  // Log that a delete request was received
  console.info(`${req.method} request received to delete note`);

  // New variables for the required process to delete the note
  // and rewrite the file
  const noteId = req.params.id.toString();
  const file = JSON.parse(fs.readFileSync("./db/notes.json", "utf8"));
  const newFile = file.filter(note =>
    note.id.toString() !== noteId
  );

  fs.writeFileSync('./db/notes.json', JSON.stringify(newFile));
  res.json(newFile);
  // Log that delete request was completed
  console.log(`${req.method} request completed`);
});

module.exports = notes;