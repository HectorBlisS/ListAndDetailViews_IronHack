var express = require('express');
var router = express.Router();
const Product = require("../models/Product");




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



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;
