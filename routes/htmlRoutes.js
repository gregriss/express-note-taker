// * The following HTML routes should be created:
//   * GET `/notes` - Should return the `notes.html` file.
//   * GET `*` - Should return the `index.html` file

// including path package to get file paths
const path = require('path');
var noteData = require('../db/db.json');
// const fs = require('fs');

module.exports = function (app) {
    // HTML GET requests

    // GET `/notes` - Should return the `notes.html` file
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
        res.send("Hello, this is the notes page")
        res.render(noteData);
        console.log(noteData);
        res.end();
    });

    // GET `*` - Should return the `index.html` file
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
        // res.render('../public/index.html');
        // res.send("Hello, this is the homepage");
        // res.end();
    });

    // GET `*` - Should return the `index.html` file
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
        // res.render('../public/index.html');
        // res.send("Hello, this is the homepage");
        // res.end();
    });
};
