//create a homepage
//create survey
//Create routes to both survey and homepage
//create api get and post routes to handle friend's JSON and incoming survey results
//send JSON data to friends.js
//Compare friends
//Display modal pop-up


//Last thing I need to do is fix the submit button


//NPM packages used 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Creating an express server
var app = express();

//Sets initial port
var PORT = process.env.PORT || 8080;

// Express handles data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the other directories in the application directory.
app.use(express.static('./app/public'));

//Router, points server to the right route files
//require("./routing/apiRoutes")(app);
//require("./routing/htmlRoutes")(app);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

app.post("/api/survey", function(req, res) {
    var newSurvey = req.body;
    res.json(newSurvey);
});

//Listener that starts the route
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
