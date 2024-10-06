const mongoose = require("mongoose");

const cartDetailScheama = new mongoose.Schema({
	userid: { type: mongoose.Schema.ObjectId, required: true ,ref:"users"},
	totalcount: { type: Number, required: true },
	totalprice: { type: Number, required: true },
    products:[{productid:{type:mongoose.Schema.ObjectId,ref:"products"}}]
})
const cartDetail=mongoose.model("cartdetails",cartDetailScheama);    
module.exports=cartDetail;
