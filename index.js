var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/      :secondname/:name", function(req, res){
   var n = req.params.name;
   var m = req.params.secondname;
   res.send("<h1>Hello " + n + " " + m +"</h1>");
});
app.listen(3003, function(){
   console.log("Example is running on port 3003");
});
