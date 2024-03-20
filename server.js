const express = require('express');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 3000;

function getNotes() {
    const data = fs.readFileSync('db.json', 'utf8');
    return JSON.parse(data);
  }

function writeNotes(notes) {
    fs.writeFileSync('db.json', JSON.stringify(notes), 'utf8');
  }

// Get notes
app.get('/api/notes', (req, res) => {
    const notes = getNotes();
    res.json(notes);
  });

// POST a new note
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const notes = getNotes();
    notes.push(newNote);
    writeNotes(notes);
    res.json(newNote);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  
// Retrieving notes
fetch('/api/notes')
  .then(response => response.json())
  .then(data => {
  });

// Saving new note
const newNote = {
    title: document.querySelector('.note-title').value,
    text: document.querySelector('.note-textarea').value
  };
  
  fetch('/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newNote)
  })
  .then(response => response.json())
  .then(data => {
  });