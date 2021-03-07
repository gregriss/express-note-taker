const express = require('express');

// telling node we're creating an express server
const app = express();

// setting up initial port 
const PORT = process.env.PORT || 3000;

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// need this line to access static (frontend files)
app.use(express.static('public'));

// routing to route files for api routes and html routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener for server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });