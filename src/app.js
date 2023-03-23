const express = require('express');
const app = express();
const path = require('path');
const dbConnect = require('./config/mongo');

/*configuracion express*/

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));
app.use(express.static(path.resolve(__dirname,'../public')));
app.use(express.static(path.resolve(__dirname , 'src')));
// Para poder usar el POST.


/* routes*/
const main = require('./routes/main');
app.use('/', main);

const products = require('./routes/products');
app.use('/products' , products);


/* 404* not found*/

app.use((req,res,next)=>{
res.render('404-page');

});


// Conectamos a la DB
dbConnect();

app.listen(3000,()=>console.log('El servidor esta corriendo en el puerto 3000'));