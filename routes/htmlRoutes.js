// including path package to get file paths
var path = require('path');

module.exports = function (app) {
    // GET `/notes` returns `notes.html` file
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
        // res.send("Hello, this is the notes page")
        // res.end();
    });

    // GET `*` returns `index.html` file
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
        // res.send("Hello, this is the homepage");
        // res.end();
    });
};
