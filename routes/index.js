var express = require('express');
var router = express.Router();
const Product = require("../models/Product");
const Comment = require("../models/Comment");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);



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


//signup route
router.get("/signup", (req,res)=>{
  res.render("signup_form", {error:null});
});
router.post("/signup", (req,res)=>{
  //checamos si el usuario no esta sonso
  if(req.body.password2 !== req.body.password){
    res.render("signup_form", {error:"Tus password no coinciden duh!"})
  }
  const hash = bcrypt.hashSync(req.body.password, salt);
  const user = new User({
    userName: req.body.userName,
    password: hash,
    favoriteHexColor: req.body.favoriteHexColor
  });
  user.save((err,result)=>{
    if(!err){
      res.redirect("/");
    }
  });

});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;
