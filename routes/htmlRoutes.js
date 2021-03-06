// * The following HTML routes should be created:
//   * GET `/notes` - Should return the `notes.html` file.
//   * GET `*` - Should return the `index.html` file

// including path package to get file paths
const path = require('path');

const fs = require('fs');

module.exports = function(app) {
    // HTML GET requests

    // GET `*` - Should return the `index.html` file
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
        
        res.end();
    });
    // GET `/notes` - Should return the `notes.html` file
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))

        res.end();
    });
}