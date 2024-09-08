import mongoose  from  "mongoose";

 const productModel= new mongoose.Schema({
    name:String,
    price:String,
    company:String,
    color:String,
    category:String

 })

 const Product= mongoose.Model.products || mongoose.Model("products",productModel);