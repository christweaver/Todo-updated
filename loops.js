const express = require("express");
 const Datastore=require('nedb')
const app = express();
 const database= new Datastore('database.db')
 database.loadDatabase()
app.use(express.json({limit: '1mb'}))
app.use('/static', express.static('public'));


 
 
app.listen(3000, function () {console.log("Server is running on localhost3000");
});



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
 });


 app.post('/api', (request, response)=>{
    data=request.body
    Name=request.body.Name
    text=request.body.text
   //  console.log(Name, text)
   //  console.log(data)
    database.insert(data)
 })

 
 app.delete('/api', (req, res)=>{
   
 })