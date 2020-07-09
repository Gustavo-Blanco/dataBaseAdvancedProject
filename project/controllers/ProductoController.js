var mongoose = require('mongoose');
var Producto = require('../models/Producto');

var productoController = {}

productoController.list = function (req, res) {
    Producto.find({}).exec(function (err, listaProductos) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/productos/index', {
            productos: listaProductos
        });
    });
}

productoController.create = function (req, res) {
    var categoria = req.params.producto;
    res.render('../views/productos/' + categoria + '/create');

}

productoController.save = function (req, res) {
    var producto = new Producto(req.body);
    //console.log(req.body);
    producto.save(function (err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Producto creado satisfactoriamente");
        //res.redirect('/usuarios/show/' + usuario._id);

        res.redirect('/productos');
    });
}

productoController.show = function (req, res) {
    Producto.findOne({
        _id: req.params.id
    }).exec(function (err, producto) {
        if (err) {
            console.log('Error', err);
            return;
        }
        categoria = req.params.categoria;

        res.render('../views/productos/' + categoria + '/show', {
            producto: producto
        });
    });

}

productoController.delete = function (req, res) {

    Producto.remove({
        _id: req.params.id
    }, function (err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("producto eliminado");
        res.redirect('/productos');

    });
};


productoController.edit = function (req, res) {

    Producto.findOne({
        _id: req.params.id
    }).exec(function (err, producto) {
        if (err) {
            console.log('Error', err);
            return;
        }
        var categoria = req.params.categoria;
        res.render('../views/productos/' + producto.categoria + '/edit', {
            producto: producto
        });
    });
}

function busqueda(categoria, arreglo) {
    
    if (categoria == "pc") {
        arreglo = {
            procesador: arreglo[5],
            ram: arreglo[6],
            placa: arreglo[7],
            fuente: arreglo[8],
            video: arreglo[9]
        }
        return arreglo;
    } else if (categoria == "laptop") {
        arreglo = {
            modelo: arreglo[5],
            almacenamiento: arreglo[6],
            ram: arreglo[7]
        }
        return arreglo;
    } else if (categoria == "celular") {
        arreglo = {
            bateria: arreglo[5],
            ram: arreglo[6],
            almacenamiento: arreglo[7]
        }
        return arreglo;
    }
}
productoController.update = function (req, res) {
    var arreglo = Object.values(req.body);

    console.log(arreglo);

    var detalles = busqueda(req.body.categoria, arreglo);
    Producto.findByIdAndUpdate(req.params.id, {
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

        function (err, producto) {
            if (err) {
                console.log('Error: ', err);
                res.render('../productos/' + req.params.categoria + '/edit', {
                    producto: req.body
                });
            }

            console.log(producto);

            res.redirect('/productos');

        });
};



module.exports = productoController;