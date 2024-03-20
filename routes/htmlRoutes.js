const express = require('express');
const path = require('path');

const router = express.Router();

// Route to serve index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Route to serve notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
});

module.exports = router;
