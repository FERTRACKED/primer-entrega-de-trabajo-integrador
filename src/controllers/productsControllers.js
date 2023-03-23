const Product = require ("../data/models/Product");

let productsController = {
    product: async (req,res)=>{
        const products = await Product.find()
        res.render('products/products',{productos:products})
    },
    detail: async (req,res)=>{
        try{
        const product = await Product.findById(req.params.id
        )
        res.render('products/detail',{producto:product});
    }
         catch{   
            res.render("404");
        
        }
        
    },
    edit: async (req,res)=>{
        try{
        const product = await Product.findById(req.params.id
        )
        res.render('products/edit',{producto:product});
    }
         catch{   
            res.render("404");
        
        }
        
    },
    create: (req,res)=>{
       
        res.render('products/create');
    },
    store: async (req,res)=>{
        if(!req.file){
            res.render("404");
        }else{
            
           await Product.create({...req.body, image: req.file.filename});

           const products = await Product.find()
           res.render('products/products',{productos:products})
        }
        },
    update:async (req,res,next)=>{
        
        const product = await Product.findById(req.params.id);
        
       await Product.findByIdAndUpdate({_id:req.params.id},
        {
            name:req.body.name,
            brand:req.body.brand,
            price:req.body.price,
            description:req.body.description,
           
        },);
            
        const products = await Product.find()
        res.render('products/products',{productos:products})
    },
    delete: async(req,res)=>{  

        await Product.findOneAndRemove({_id:req.params.id}
            );
        const products = await Product.find()
        res.render('products/products',{productos:products})
    },
    
}


module.exports = productsController;