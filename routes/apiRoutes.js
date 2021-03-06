// set up server (done)  (with express rather than http, handle request, etc)
// get response from the server (done) (listener is responding properly)


// * The following API routes should be created:
//   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
//   * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


// Loading data
// link routes to a series of "data" sources
const noteData = require("../db/db.json");
// const index = require('../public/assets/js/index');
const express = require('express');

const app = express();

// including filesystem to read files 
const fs = require('fs');

const PORT = 3000;


// Setting up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing

// API get request
// GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", function (req, res) {
    // read db.json file
    res.json();
    // return all saved notes as json
    return res.json();
})

// API post request
// POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

app.post("/api/notes", function (req, res) {
    // receive new note to save on request body
    var newNote = req.body;
    // add note to db.json file

    // return new note to client


})

// DELETE `/api/notes/:id`
// Should receive a query parameter containing the id of a note to delete
// Find a way to give each note a unique `id` when it's saved.
// In order to delete a note, you'll need to: 
app.delete("", function (req, res) {
    // read all notes from the `db.json` file, 
    // remove the note with the given `id` property, and the
    // rewrite the notes to the `db.json` file
})



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});