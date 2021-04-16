const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('mssql');
const { ESRCH } = require('constants');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, function() {
    console.log('Server listening on port 3000!');
});

const { Pool, Client } = require('pg');
client: Pool;

/*const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Requerimientos',
    password: '20001808',
    port: 5432,
})*/

const client = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Requerimientos',
    password: '20001808',
    port: 5432,
})

//client.connect()

app.get('/sp_selectSucursal', async function(req, res) {
    const response = await pool.query(`SELECT getallsucursales()`);
    res.json(response.rows);
    /*
        client.query(`select getAllSucursales()`, (err, results) => {
            console.log(err, results);
            console.log(results.rows[0])
            res.json(results);
            client.end()
        });*/
});


app.get('/sp_selectCategoria', async function(req, res) {
    
    /*client.connect();

    client.query(`select getAllCategorias()`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });*/
    const response = await pool.query(`select getAllCategorias()`);
    res.json(response.rows);
});

app.post('/sp_InsertArticulo', async function(req, res) {
    const nombre = req.body.nombre;
    const descripccion = req.body.descripccion;
    const precio = req.body.precio;
    const cantidad = req.body.cantidad;
    const categoriaId = req.body.categoriaId;
    const sucursalId = req.body.sucursalId;

    /*client.connect();

    client.query(`call sp_InsertArticulo(${nombre},${descripccion},${precio},${cantidad},${categoriaId},${sucursalId})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });*/

    const response = await pool.query(`call sp_InsertArticulo(${nombre},${descripccion},${precio},${cantidad},${categoriaId},${sucursalId})`);
    res.json(response.rows);
    
});


app.get('/sp_selectArticulo', async function(req, res) {
    const idv = req.body.id;

    /*
    client.connect();

    client.query(`select getArticuloWhitNomb(${idv})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });*/

    const response = await pool.query(`select getArticuloWhitNomb(${idv})`);
    res.json(response.rows);
});


app.post('/sp_updateArticulo', async function(req, res) {
    const idv = req.body.id;
    const nombre = req.body.nombre;
    const descripccion = req.body.descripccion;
    const precio = req.body.precio;
    const cantidad = req.body.cantidad;
    const categoriaId = req.body.categoriaId;
    const sucursalId = req.body.sucursalId;

    /*client.connect();

    client.query(`call sp_updateArticulo(${idv},${nombre},${descripccion},${precio},${cantidad},${categoriaId},${sucursalId})`, (err, results) => {
        console.log(err, results);
        res.json('Articulo actualizado');
        client.end()
    });*/

    const response = await pool.query(`call sp_updateArticulo(${idv},${nombre},${descripccion},${precio},${cantidad},${categoriaId},${sucursalId})`);
    res.json(response.rows);

    
});


app.post('/sp_deleteArticulo', async function(req, res) {
    const id = req.body.id;

    /*client.connect();

    client.query(`call sp_deleteArticulo(${id})`, (err, results) => {
        console.log(err, results);
        res.send('Articulo borrado');
        client.end()
    });*/

    const response = await pool.query(`call sp_deleteArticulo(${id})`);
    res.json(response.rows);
    
});


app.post('/sp_InsertUsuario', async function(req, res) {
    const nombre = req.body.nombre;
    const apeliido = req.body.apeliido;
    const contrasena = req.body.contraseña;
    const correo = req.body.correo;
    const direccionFisica = req.body.direccionFisica;
    const nombreUsuario = req.body.nombreUsuario;
    const cedula = req.body.cedula;
    const tipoId = req.body.tipoId;

    /*client.connect();

    client.query(`call sp_InsertUsuario(${nombre},${apeliido},${contrasena},${correo},${direccionFisica},${nombreUsuario},${cedula},${tipoId})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });*/

    const response = await pool.query(`call sp_InsertUsuario(${nombre},${apeliido},${contrasena},${correo},${direccionFisica},${nombreUsuario},${cedula},${tipoId})`);
    res.json(response.rows);
});


app.get('/sp_selectUsuario', async function(req, res) {
    const id = req.body.id;
    /*client.connect();

    client.query(`select getUsusarioWhitId(${id})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });*/

    const response = await pool.query(`select getUsusarioWhitId(${id})`);
    res.json(response.rows);
});


app.post('/sp_updateUsuario', async function(req, res) {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apeliido = req.body.apeliido;
    const contraseña = req.body.contraseña;
    const correo = req.body.correo;
    const direccionFisica = req.body.direccionFisica;
    const nombreUsuario = req.body.nombreUsuario;
    const cedula = req.body.cedula;
    const tipoId = req.body.tipoId;

    /*client.connect();

    client.query(`call sp_updateUsuario(${id},${nombre},${apeliido},${contraseña},${correo},${direccionFisica},${nombreUsuario},${cedula},${tipoId})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });*/

    const response = await pool.query(`call sp_updateUsuario(${id},${nombre},${apeliido},${contraseña},${correo},${direccionFisica},${nombreUsuario},${cedula},${tipoId})`);
    res.json(response.rows);

});


app.post('/sp_deleteUsuario', async function(req, res) {
    const id = req.body.id;

    /*client.connect();

    client.query(`call sp_deleteUsuario(${id})`, (err, results) => {
        console.log(err, results);
        res.json('Empleado eliminado');
        client.end()
    });*/

    const response = await pool.query(`call sp_deleteUsuario(${id})`);
    res.json(response.rows);
});



app.post('/sp_InsertPedido', async function(req, res) {
    const estado = req.body.id;
    const precioTotal = req.body.precioTotal;
    const usuarioId = req.body.usuarioId;
    /*
    client.connect();
    client.query(`call sp_InsertPedido(${estado},${precioTotal},${usuarioId})`, (err, results) => {
        console.log(err, results);
        res.json('Su pedido se a realizado');
        client.end()
    });*/

    const response = await pool.query(`call sp_InsertPedido(${estado},${precioTotal},${usuarioId})`);
    res.json(response.rows);
});


app.get('/sp_selectPedidos', async function(req, res) {
    /*client.connect();

    client.query(`select getAllPedidos()`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });*/

    const response = await pool.query(`select getAllPedidos()`);
    res.json(response.rows);
});
app.get('/sp_selectPedido', async function(req, res) {
    const id = req.body.id;

    /*
    client.connect();

    client.query(`select getPedidoWhitId(${id})`, (err, results) => {
        console.log(err, results);
        res.json(results.rows);
        client.end()
    });*/

    const response = await pool.query(`select getPedidoWhitId(${id})`);
    res.json(response.rows);
});


app.post('/sp_deletePedido', async function(req, res) {

    const id = req.body.id;

    /*client.connect();

    client.query(`call sp_deletePedido(${id})`, (err, results) => {
        console.log(err, results);
        res.json('Pedido cancelado');
        client.end()
    });*/

    const response = await pool.query(`call sp_deletePedido(${id})`);
    res.json(response.rows);

});


app.get('/sp_selectArticuloXPedido', async function(req, res) {
    /*client.connect();

    client.query(`select ArticuloXPedido()`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });*/

    const response = await pool.query(`select ArticuloXPedido()`);
    res.json(response.rows);
});

app.post('/sp_deleteArticuloXPedido', async function(req, res) {
    const id = req.body.id;
    
    
    /*client.connect();
    client.query(`select deleteArticuloXPedido(${id})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });*/

    const response = await pool.query(`select deleteArticuloXPedido(${id})`);
    res.json(response.rows);
    
});

app.post('/seleccionarSucursal', async function(req, res) {
    const id = req.body.sucursal;
    process.env.SUCURSAL = id;
});

app.post('/agregarAcarrito', async function(req, res) {
    const id = req.body.item;
    const cant = req.body.cant;
    var element = { id: id, cantidad: cant };
    process.env.CARRITO.push(element);
    res.json('Producto agregado');

});

app.post('/eliminarcarrito', async function(req, res) {
    const idv = req.body.item;
    for (let i = 0; i < process.env.CARRITO.length; i++) {
        if (process.env.CARRITO[i].id == idv) {
            process.env.CARRITO[i].cantidad = process.env.CARRITO[i].cantidad - 1;
            res.json('Producto eliminado');
        }
    }
    res.json('No se hay productos en el carrito');
});

app.post('/vaciarcarrito', async function(req, res) {
    process.env.CARRITO = []
    res.json('Carrito vaciado');
});