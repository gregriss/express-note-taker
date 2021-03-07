module.exports = function (app) {
    // require fileSystem and path modules
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
    })

    // POST `/api/notes` - receives a new note to save on the request body
    // adds new note to the `db.json` file, and then 
    // returns the new note to the client
    app.post("/api/notes", function (req, res) {
        // read my db.json file, store contents in a variable
        let readNote = fs.readFileSync(path.join(__dirname, '../db/db.json'));
        // parse JSON data, store in variable parsedNotes
        let parsedNotes = JSON.parse(readNote);
        // assign ID to this note using current milliseconds 
        let noteID = new Date().getMilliseconds();
        // creating note object with user's title and text input, as well as noteID
        let note = {
            title: req.body.title,
            text: req.body.text,
            id: noteID
        };
        // adding note object to parsedNotes array
        parsedNotes.push(note);
        // writing updated db.json file with new note
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(parsedNotes));  
        // return new note to client
        res.json(note);
    })

    // DELETE `/api/notes/:id`
    // Should receive a query parameter containing the id of a note to delete
    app.delete("/api/notes/:id", function (req, res) {
        // identifying note to be deleted based on its id (generated in post request from current milliseconds)
        const chosenNote = req.params.id;
        console.log(chosenNote);
        // read all notes from the `db.json` file, 
        let readNote = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
        // remove the note with the given `id` property using filter()
        let filterNotes = readNote.filter(note => note.id != chosenNote);
        // rewrite the notes to the `db.json` file
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(filterNotes));
        // responding with filterNotes data
        res.json(filterNotes);
    })
};