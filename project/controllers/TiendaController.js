var mongoose = require('mongoose');
var Tienda = require('../models/Tienda');

var tiendaController = {}

tiendaController.list = function (req, res) {
    Tienda.find({}).exec(function (err, tiendas) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/tiendas/index', {
            tiendas: tiendas
        });
    });

}
tiendaController.create = function (req, res) {
    res.render('../views/tiendas/create');
};

tiendaController.save = function(req, res) {
    var tienda = new Tienda( req.body );

    tienda.save(function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        
        res.redirect("/tiendas");
        // res.redirect("/empleados");        
    });
};

tiendaController.show = function(req, res) {

    Tienda.findOne({ _id: req.params.id }).exec(function(err, tienda) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/tiendas/show',{tienda: tienda });

    });
};

tiendaController.edit = function(req, res) {

    Tienda.findOne({ _id: req.params.id }).exec(function(err, tienda) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/tiendas/edit',{tienda: tienda });

    });
};



tiendaController.update = function(req, res){

    Tienda.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        adm_tienda: req.body.adm_tienda,
        direccion: req.body.direccion,
        numero: req.body.numero,
        email: req.body.email,
        descripcion: req.body.descripcion
    }}, { new: true },

    function( err, tienda){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/tiendas/edit', {tienda: req.body} );
        }
            
        res.redirect('/tiendas');
        
    });
};

tiendaController.delete = function(req, res) {

    Tienda.remove( { _id: req.params.id}, function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        
        res.redirect('/tiendas');

    });
};

module.exports = tiendaController;