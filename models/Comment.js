const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    productId:String,
    userName:String,
    rating:Number,
    body:String,
    date: Date
});

module.exports = mongoose.model("Comment", commentSchema);
