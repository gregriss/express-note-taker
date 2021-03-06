// * The following API routes should be created:
//   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
//   * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

// Loading data
// link routes to a series of "data" sources
var noteData = require("../db/db.json");
// const index = require('../public/assets/js/index');

var fs = require('fs');

// Routing
module.exports = function (app) {
    // API get request
    // GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    app.get("/api/notes", function (req, res) {
        // read db.json file
        res.json(noteData);
        // return all saved notes as json
        // return res.json(res);
    })

    // API post request
    // POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

    app.post("/api/notes", function (req, res) {
        
        // receive new note to save on request body
        var newNote = req.body;
        // add note to db.json file
        // var uniqueID = (noteData.length).toString();
        // newNote.id = uniqueID;
        noteData.push(newNote);
        // var noteData = fs.readFileSync("./db/db.json", "utf-8");
        // return new note to client
        res.json(newNote);
    })

    // DELETE `/api/notes/:id`
    // Should receive a query parameter containing the id of a note to delete
    // Find a way to give each note a unique `id` when it's saved.
    // In order to delete a note, you'll need to: 
    app.delete("/api/notes/:id", function (req, res) {
        console.log(noteData);
        const { id } = req.params;
        console.log(id);
        // res.json(res);
        // read all notes from the `db.json` file, 
        // fs.readFile('../db/db.json');
        // remove the note with the given `id` property, and the

        // rewrite the notes to the `db.json` file
    })
};