var express = require('express');
var router = express.Router();

var producto = require('../controllers/ProductoController');

router.get('/',producto.list);

//Categorias
router.get('/categorias',function(req, res, next){
    res.render('../views/productos/categorias');
});

//create
router.get('/:producto/create',producto.create);

//save
router.post('/:categoria/save',producto.save);


//show
router.get('/:categoria/show/:id',producto.show);


//Delete
router.post('/delete/:id',producto.delete);

//edit
router.get('/:categoria/edit/:id',producto.edit);

//update

router.post('/:categoria/update/:id',producto.update);

module.exports = router;