const { Schema  , model } = require ('mongoose');

const Product = new Schema ({
    name:{
        type : String,
        required: true,
    },
    precio:{
        type : Number,
        required: true,
    },
    marca:{
        type : String,
        required: true,
    },
   
    descripcion:{
        type : String,
        required: true,
    },
    imagenes:{
        type : String,
        required: true,
    }



    
});

module.exports = model('Product', Product)