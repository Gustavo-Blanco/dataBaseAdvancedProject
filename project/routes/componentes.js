var express = require('express');
var router = express.Router();

var componente = require('../controllers/ComponenteController');

router.get('/',componente.list);


//Categorias
router.get('/categorias',function(req, res, next){
    res.render('../views/componentes/categorias');
});

//create
router.get('/:componente/create',componente.create);

//save
router.post('/:categoria/save',componente.save);


//show
router.get('/:categoria/show/:id',componente.show);


//Delete
router.post('/delete/:id',componente.delete);

//edit
router.get('/:categoria/edit/:id',componente.edit);

//update

router.post('/:categoria/update/:id',componente.update);

module.exports = router;