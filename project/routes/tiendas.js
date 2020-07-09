var express = require('express');
var router = express.Router();

var tienda = require('../controllers/TiendaController');


router.get('/',tienda.list);
router.get('/create', tienda.create);
router.post('/save', tienda.save);
router.get('/show/:id', tienda.show);
router.get('/edit/:id', tienda.edit);
router.post('/update/:id', tienda.update);
router.post('/delete/:id', tienda.delete);


module.exports = router;