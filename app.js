// Require and Initialize Express
var express = require("express");
var app = express();

// Require and Initialize Body Parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// Configure pacechart.css
app.use(express.static("public"));

// EJS shortcut
app.set("view engine", "ejs");

// Root Route
app.get("/", function(req, res){
	res.render("home");
})

// Form Route
app.get("/form", function(req, res){
	res.render("form");
})

// About Route
app.get("/about", function(req, res){
	res.render("about");
})
	
// Post Route
app.post("/form", function(req, res){
	var minutes = req.body.minutes;
	var seconds = req.body.seconds;
	var milliseconds = req.body.milliseconds;
	var event = req.body.event;
	var stroke = req.body.stroke;
	var newTime = {minutes: minutes, seconds: seconds, milliseconds: milliseconds, event: event, stroke: stroke};
	res.render("chart", {newTime: newTime});
})
	
// Listen for Requests
app.listen(3000, function(){
	console.log("SERVER IS RUNNING");
})