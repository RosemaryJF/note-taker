const express = require('express');

// Imports the modular routers for /notes
const noteRouter = require('./notes');

const api = express();

api.use('/notes', noteRouter);

module.exports = api
