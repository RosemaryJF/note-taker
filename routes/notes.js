const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received to retrieve notes`);

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
    
  let jsonFilePath = path.join(__dirname, "./db/notes.json");
    // request to delete note by id.
    for (let i = 0; i < notes.length; i++) {

        if (notes[i].id == req.params.id) {
            // Splice takes i position, and then deletes the 1 note.
            notes.splice(i, 1);
            break;
        }
    }
    // Write the db.json file again.
    fs.writeFileSync(jsonFilePath, JSON.stringify(notes), function (err) {

        if (err) {
            return console.error(err);
        } else {
            console.log("The selected note was deleted!");
        }
    });
    res.json(notes);
});

module.exports = notes;



