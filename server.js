// Import express and path modules.
var express = require( "express");
var path = require( "path");
var mongodb = require('mongodb');
const bodyParser = require('body-parser');
const session = require('express-session')({
    secret: 'secret'
});
// Create the express app.
var app = express();
const port = process.env.PORT || 8000;
// Define the static folder.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client/static")));
app.use(session);
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// Start Node server listening on port 8000.
var server = app.listen(port, () => {
    console.log("listening on port: ", port);
});
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app,server);
