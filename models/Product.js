const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title:String,
    price:Number,
    rate:Number,
    images:[String],
    description:{
        color:String,
        size:String
    },
    available:Boolean,
    comments:[Object]
});

module.exports = mongoose.model("Product",productSchema);