const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/index.js');

const app = express();
// const PORT = process.env.PORT || 3001;
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET Route for note page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.listen(PORT, () =>
    console.log(`App is running at http://localhost:${PORT}`)
);