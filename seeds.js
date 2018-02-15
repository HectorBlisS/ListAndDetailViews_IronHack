const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/store");
const Product = require("./models/Product");

const productos = [
    {
        title:"noise blocker",
        price:2000,
        rate:5,
        images:["https://www.ireviews.com/wp-content/uploads/2016/11/ireviews_muzo_4.jpg"],
        description:{
            color:"white",
            size:"XXLbig"
        },
        available:true,
        comments:[]
    },
    {
        title:"Light Saber",
        price:150,
        rate:3,
        images:["https://http2.mlstatic.com/fun-central-au173-light-up-tri-saber-con-sonido-multico-D_NQ_NP_820084-MCO26135353220_102017-O.jpg"],
        description:{
            color:"red",
            size:"XXs"
        },
        available:true,
        comments:[]
    },
    {
        title:"Teleport Gun",
        price:10000,
        rate:5,
        images:["https://ih1.redbubble.net/image.151609095.9352/flat,800x800,075,f.u2.jpg"],
        description:{
            color:"green",
            size:"medium"
        },
        available:true,
        comments:[]
    }
]

Product.create(productos, function(err, result){
    if(err) console.log("Nel");
    console.log("lo lograste!", result);
});

//mongoose.close();
