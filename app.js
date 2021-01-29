
//import express
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser');
//create a middleware
app.use(bodyparser.json());

//import routes
const postRoute = require('./routes/post')
app.use('/post',postRoute)

//routes
app.get('/', (req,res)=> {
  res.send("we are on home");
});

//connect to db
mongoose.connect("mongodb://localhost/userfeeddb", {useNewUrlParser:true}, { useUnifiedTopology: true });
mongoose.connection
.once('open', ()=> console.log('sucessfully connected'))
.on('error', (error)=> {
  console.log(error)
});

//app.listen(port);
app.listen(3000);
