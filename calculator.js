const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({entended:true}));


app.post("/", function(request, response){
var num1 = Number(request.body.num1);
var num2 = Number(request.body.num2);
var sum = num1 + num2;
response.send("The required sum is equal to "+ sum );
});


app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/bmicalculator",function(req,res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = weight /(height*height);
  res.send("The required bmi is equal to "+ bmi);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html")
});



app.listen(3001, function() {
  console.log("anurag");
});
