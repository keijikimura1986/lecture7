var express = require("express");
var path = require("path");
var app = express();
app.use(express.static("./"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/users/:username", function(req,res){
    var user = req.params.username;
    res.send("<h1> Hello "+user+"</h1>");
});


app.listen(8080); // port number

// app.get("/login");

