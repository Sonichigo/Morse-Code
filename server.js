var express = require('express');

var app = express();

app.use(express.static("public"))


app.get("/", function(request, response){
  response.sendFile(__dirname + "/public/index.html")
})

app.get("/api/saved", function(request, response){
  response.send("/API retrieve saved translations")
})

app.post("/api/save", function(request, response){
  response.send("/API save translation")
})

app.listen("3001", function(){
  console.log("now listening on 3001")
})