const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsControllers');

// Requerimos multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      const fileExt = path.extname(file.originalname);
      const fileName = Date.now() + fileExt;
      cb(null, fileName);
    },
  })
  const upload = multer({ 
    // Le pasamos la configuración del storage
    storage: storage,
    // Le pasamos la configuración del filtrador de archivos
    fileFilter: function (req, file, cb) {
      // Nombre del archivo original con tu extensión
      const originalFileName = file.originalname;
      // Extraemos la extensión del archivo original
      const fileExt = path.extname(originalFileName);
      //console.log(fileExt);
     // Filtramos la extensión pero antes la paso a mayúsculas, para validar correctamente
      if (![".JPG", ".PNG", ".GIF",".BMP",".JPEG"].includes(fileExt.toUpperCase()))
      {
       return cb(null,false);
      }
      cb(null, true);
    },
   });

router.get('/',controller.product);
router.get('/detail/:id',controller.detail);
router.get('/edit/:id',controller.edit);
router.get('/create',controller.create);
router.post('/create',upload.single("image"),controller.store);
router.post('/edit/:id',controller.update);
router.post('/delete/:id',controller.delete);




module.exports = router; 
