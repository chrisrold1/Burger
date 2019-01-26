//Depencies
var express = require('express');

//Define where will  port be listening on
var PORT = process.env.PORT || 8080;

var app = express();

//serve static content for the app from the public directory in the application 
app.use(express.static(__dirname + '/public'));

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine","handlebars");

//Import the route and give server acces to get through
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//App listeninig
app.listen(PORT, function(){
    console.log("App is now on Port :" + PORT);
});
