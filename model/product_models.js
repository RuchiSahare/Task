const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
	product_name:{
		type:String,
		required:true,
	},
	category_name:{
		type:String,
		required:true
	},
	subcategory_name:{
		type:String,
		required:true
	},
	quantity:{
		type:String,
		required:true
	},
	weight:{
		type:String,
		required:true
	},
	price:{
		type:String,
		required:true
	},
},'product')

module.exports = ProductModel=mongoose.model("product",productSchema);