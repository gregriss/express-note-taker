// Loading data
// link routs to a series of "data" sources
var tableData = require("");

// Routing

module.exports = function(app) {
    // API get requests
    app.get("", function(req, res){
        res.json(tableData);
    })

    app.get("", function(req, res) {
        res.json(waitlistData);
    })

    // API post requests

    app.post("", function(req, res) {

    })

    app.post("", function(req,res) {

    })
}