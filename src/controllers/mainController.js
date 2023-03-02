const path = require('path');
const fs = require ('fs');


const pathJsson = path.resolve(__dirname,'../data/products.json');
const productsJson = fs.readFileSync(pathJsson,'utf-8');

const products = JSON.parse(productsJson);



module.exports={
  home:function(req,res){
    res.render('home',{ productos:products });
},

};