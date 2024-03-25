const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

function getNotes() {
    const data = fs.readFileSync('db/db.json', 'utf8');
    return JSON.parse(data);
}

function writeNotes(notes) {
    fs.writeFileSync('db/db.json', JSON.stringify(notes), 'utf8');
}

//Get notes
router.get('/notes', (req, res) => {
    const notes = getNotes();
    res.json(notes);
});

// Post a new note
router.post('/notes', (req, res) => {
    const newNote = req.body;
    const notes = getNotes();
    notes.push(newNote);
    writeNotes(notes);
    res.json(newNote);
});

module.exports = router;