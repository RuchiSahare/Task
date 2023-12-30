const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	user_name:{
		type:String,
		required:true,
	},
	mobile_no:{
		type:Number,
		required:true
	},
	password:{
		type:String,
		required:true
	}, 
})

module.exports = UserModel=mongoose.model("user",userSchema);