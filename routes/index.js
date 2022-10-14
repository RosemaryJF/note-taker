const express = require('express');

// Imports the modular routers for /notes
const noteRouter = require('./notes');

const app = express();

app.use('/notes', noteRouter);

module.exports = app;
