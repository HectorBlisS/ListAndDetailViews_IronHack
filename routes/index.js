var express = require('express');
var router = express.Router();
const Product = require("../models/Product");
const Comment = require("../models/Comment");



//route for list View
router.get("/products", (req,res)=>{
  Product.find({}, (err, docs)=>{
    console.log(docs);
    if(err) res.status(500).send(err);
    res.render("list", {products:docs});
  });
});

//route for deailt view
router.get("/products/:id", (req,res)=>{
  const id = req.params.id;
  Product.findById(id, (err, doc)=>{
    res.render("detail",{product:doc});
  });
});

//comments route
router.post("/comments/new", (req,res)=>{
  const comment = new Comment({
    productId: req.body.productId,
    userName:req.body.userName,
    rating:0,
    body:req.body.body,
    date: new Date()
  });
  comment.save((err,result)=>{
    if(err) return res.status(448).send(err);
    Product.findByIdAndUpdate(req.body.productId, 
      {$push:{comments:comment}}, (err,result)=>{
      if(err) return res.status(500).send(err);
      res.redirect(`/products/${req.body.productId}`);
    });
  });

});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;
