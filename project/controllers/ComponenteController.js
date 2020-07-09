var mongoose = require('mongoose');
var Componente = require('../models/Componente');

var componenteController = {}

componenteController.list = function (req, res) {
    Componente.find({}).exec(function (err, listaComponentes) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/componentes/index', {
            componentes: listaComponentes
        });
    });
}

componenteController.create = function (req, res) {
    var categoria = req.params.componente;
    res.render('../views/componentes/' + categoria + '/create');

}

componenteController.save = function (req, res) {
    var componente = new Componente(req.body);
    //console.log(req.body);
    componente.save(function (err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Componente creado satisfactoriamente");
        //res.redirect('/usuarios/show/' + usuario._id);

        res.redirect('/componentes');
    });
}

componenteController.show = function (req, res) {
    Componente.findOne({
        _id: req.params.id
    }).exec(function (err, componente) {
        if (err) {
            console.log('Error', err);
            return;
        }
        categoria = req.params.categoria;

        res.render('../views/componentes/' + categoria + '/show', {
            componente: componente
        });
    });

}

componenteController.delete = function (req, res) {

    Componente.remove({
        _id: req.params.id
    }, function (err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("eliminado eliminado");
        res.redirect('/componentes');

    });
};


componenteController.edit = function (req, res) {

    Componente.findOne({
        _id: req.params.id
    }).exec(function (err, componente) {
        if (err) {
            console.log('Error', err);
            return;
        }
        var categoria = req.params.categoria;
        res.render('../views/componentes/' + componente.categoria + '/edit', {
            componente: componente
        });
    });
}

function busqueda(categoria, arreglo) {
    
    if (categoria == "procesador") {
        arreglo = {
            modelo: arreglo[5],
            nucleos: arreglo[6],
            frecuencia: arreglo[7]
        }
        return arreglo;
    } else if (categoria == "ram") {
        arreglo = {
            modelo: arreglo[5],
            capacidad: arreglo[6],
            frecuencia: arreglo[7]
        }
        return arreglo;
    } else if (categoria == "placa") {
        arreglo = {
            modelo: arreglo[5],
            soporte: arreglo[6],
            formato: arreglo[7]
        }
        return arreglo;
    } else if (categoria == "video") {
        arreglo = {
            modelo: arreglo[5],
            memoria: arreglo[6],
            frecuencia: arreglo[7]
        }
        return arreglo;
    } else if (categoria == "disco") {
        arreglo = {
            tipo: arreglo[5],
            interfaz: arreglo[6],
            velocidad: arreglo[7]
        }
        return arreglo;
    } else if (categoria == "fuente") {
        arreglo = {
            tipo: arreglo[5],
            certificacion: arreglo[6],
            voltaje: arreglo[7]
        }
        return arreglo;
    }
}
componenteController.update = function (req, res) {
    var arreglo = Object.values(req.body);

    console.log(arreglo);

    var detalles = busqueda(req.body.categoria, arreglo);
    Componente.findByIdAndUpdate(req.params.id, {
            $set: {
                nombre: req.body.nombre,
                marca: req.body.marca,
                precio: req.body.precio,
                stock: req.body.stock,
                categoria: req.body.categoria,
                detalle: detalles
            }
        }, {
            new: true
        },

        function (err, componente) {
            if (err) {
                console.log('Error: ', err);
                res.render('../componentes/' + req.params.categoria + '/edit', {
                    componente: req.body
                });
            }

            console.log(componente);

            res.redirect('/componentes');

        });
};



module.exports = componenteController;