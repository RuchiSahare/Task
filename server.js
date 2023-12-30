const express = require('express');
const app = express();
const port = 3011; 
const mongoose = require('mongoose')
//connect mongodb with localhost
mongoose.connect('mongodb://localhost:27017/Needoo',{
   useNewUrlParser: true,
   useUnifiedTopology: true,
});
mongoose.connection.on('error',err =>{
	console.log('connection fail');

})
mongoose.connection.on('connected',connected =>{
	console.log('mongodb connected');
})

app.listen(port,(req,res)=>{
	console.log('server successfully created',port);
});