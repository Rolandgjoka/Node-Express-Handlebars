// Create express connection and run node server
var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;

var app = express();


app.use(express.static('public'));


app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());


app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");


app.use("/", routes);

// Start server to begin listening .
app.listen(PORT, function () {
  
  console.log("Server listening on: http://localhost:" + PORT);
});

