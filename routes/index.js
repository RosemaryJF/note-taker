const express = require('express');

// Imports the modular routers for /notes
const newNoteRouter = require('./newNote');

const api = express();

api.use('/newNote', newNoteRouter);

module.exports = api
