// Loading data
// link route to db.json file
const db = require("../db/db.json");
// const index = require('../public/assets/js/index');
    // const noteData = JSON.parse(db);
// require filesystem module
var fs = require('fs');

// Routing
module.exports = function (app) {
    const fs = require('fs');
    const path = require('path');
    // API get request
    app.get("/api/notes", function (req, res) {
        // read my db.json file, store contents in a variable
        let readNote = fs.readFileSync(path.join(__dirname, '../db/db.json'));
        // parse JSON data 
        let parsedNotes = JSON.parse(readNote);
        // server returns all saved notes as its response
        res.json(parsedNotes);
        // return res.json(res);
    })

    // API post request
    // POST `/api/notes` - Should receive a new note to save on the request body
    // add it to the `db.json` file, and then 
    // return the new note to the client.

    app.post("/api/notes", function (req, res) {
        // read my db.json file, store contents in a variable
        let readNote = fs.readFileSync(path.join(__dirname, '../db/db.json'));
                        // // receive new note to save on request body
                        
        // parse JSON data 
        let parsedNotes = JSON.parse(readNote);
                    // let notesArray = JSON.parse(noteData);
                        // let parsedArray = JSON.parse(db); // was JSON.parse('../db/db.json')
        let noteID = new Date().getMilliseconds();
        console.log(noteID);

        let note = {
            title: req.body.title,
            text: req.body.text,
            id: noteID
        };
        parsedNotes.push(note);
        // add note to db.json file
        // var uniqueID = (noteData.length).toString();
        // newNote.id = uniqueID;

        // parsedArray.push(newNote);
           
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(parsedNotes));  // was notesArray = JSON.stringify(noteData);
            // fs.writeFileSync("../db/db.json", "utf-8") = db; // was = noteData
        // return new note to client
        res.json(note);
    })

    // DELETE `/api/notes/:id`
    // Should receive a query parameter containing the id of a note to delete
    // Find a way to give each note a unique `id` when it's saved.
    // In order to delete a note, you'll need to: 
    app.delete("/api/notes/:id", function (req, res) {
        // console.log(db); // was console.log(noteData)
        const chosenNote = parseFloat(req.params.id);
        console.log(chosenNote);
                
        // res.json(res);
        // read all notes from the `db.json` file, 
        let readNote = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
        // remove the note with the given `id` property using filter()
        let filterNotes = readNote.filter(note => note.id != chosenNote);
        // rewrite the notes to the `db.json` file
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(filterNotes));
        res.json(filterNotes); // was res.json(noteData)
    })
};