// including path packate to get file paths
const path = require('path');


module.exports = function(app) {
    // HTML GET requests

    app.get("", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });
}