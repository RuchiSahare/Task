const jwt = require('jsonwebtoken');
const UserModel = require('../model/user_models.js');
const ProductModel = require('../model/product_models.js');



const LoginPage = async(req,res)=>{
    try{
        const { mobile_no,password } = req.body;
        if(mobile_no && password ){
   	        const user_data = await UserModel.findOne({'mobile_no':mobile_no,'password':password});
   	        const user = jwt.sign()
   	        const update_data = await appModel.findOneAndUpdate({'mobile_no':mobile_no},{set:{token:user}},{new:true})
            if(user_data){
      	        res.status(200).json({
      		        result:"true",
      		        msg:"user successfully login",
      		        data:update_data
      	        })
            }else{
                res.status(400).json({
          	         result:"false",
          	        msg:"mobile_no & password invalid please enter the valid mobile_no or password"
                })      
            }
        }else{
   	        res.status(400).json({
   		       result:"false",
   		        msg:"required parameters mobile_no  & password "
   	        })
        }
    }catch(err){
        res.status(400).json({
            result:"false",
            msg:err.message()
        })
    }
}

const  AddData = async(req,res)=>{
    try{
        const { product_name,category_name,subcategory_name,quantity,weight,price } = req.body;
        if(product_name && category_name && subcategory_name && quantity && weight &&  price ){
            const product_data = new ProductModel({product_name,category_name,subcategory_name,quantity,weight,price}) 
            const data = await product_data.save();
            res.status(200).json({
                 result:"true",
                 msg:"product data add sucessfully",
                 data:data
            })
        }else{
            res.status(400).json({
              result:"false",
               msg:"required parameters product_name,category_name,subcategory_name,quantity,weight & price"
            })
        }
    }catch(err){
        res.status(400).json({
             result:"false",
            msg:err.message()
        })
    }
}

const  GetData = async(req,res)=>{
    try{
       const { category_name,subcategory_name } = req.body;
       if(category_name && subcategory_name) {
            const product_data = await ProductModel.find({'category_name':category_name,'subcategory_name':subcategory_name});
            const no_of_product = product_data.length;
            res.status(200).json({
                 result:"true",
                 msg:"product data get successfully accoding to category_name & subcategory_name",
                 total_no_of_product:no_of_product,
                 data:product_data
            })
       }else{
            res.status(400).json({
              result:"false",
               msg:"required parameters category_name,subcategory_name"
            })
        }

    }catch(err){
        res.status(400).json({
             result:"false",
            msg:err.message()
        })
    }
}

module.exports = {
    LoginPage,
    AddData,
    GetData 
}