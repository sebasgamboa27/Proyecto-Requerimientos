const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('mssql');
const { ESRCH } = require('constants');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, function() {
    console.log('Server listening on port 3000!');
});

const { Pool, Client } = require('pg');


const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Requerimientos',
    password: '20001808',
    port: 5432,
})



app.post('/sp_InsertSucursal', async function(req, res) {
    //await sql.connect(dbConnString);
    const nombre = req.body.nombre;
    client.connect();

    client.query(`select insertSucursal(${nombre})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    })



    //const result = await sql.query(`EXEC sp_InsertSucursal @_nombre = '${nombre}'`);     

    //res.send(result.recordset);
});

app.get('/sp_selectSucursal', async function(req, res) {
    //await sql.connect(dbConnString);

    //const result = await sql.query(`EXEC sp_selectSucursal`);     

    //res.send(result.recordset);

    client.connect();

    client.query(`select sucursal()`, (err, results) => {
        console.log(err, results);
        res.send(results.rows);
        client.end()
    });
});

app.post('/updateSucursal', async function(req, res) {
    //await sql.connect(dbConnString);

    const id = req.body.id;
    const nombre = req.body.nombre;


    //const result = await sql.query(`EXEC updateSucursal @_id = ${id}, @_name = ${nombre}`);     

    //res.send(result.recordset);


    client.connect();

    client.query(`select updateSucursal(${id},${nombre})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });

});


app.post('/sp_deleteSucursal', async function(req, res) {
    //await sql.connect(dbConnString);

    const id = req.body.id;

    client.connect();

    client.query(`select deleteSucursal(${id})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });


    //const result = await sql.query(`EXEC sp_deleteSucursal @_id = ${id}`);     

    //res.send(result.recordset);
});

app.post('/sp_InsertCategoria', async function(req, res) {
    //await sql.connect(dbConnString);

    const nombre = req.body.nombre;

    client.connect();

    client.query(`select insertCategoria(${nombre})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });


    //const result = await sql.query(`EXEC sp_InsertCategoria @_nombre = '${nombre}'`);     

    //res.send(result.recordset);
});


app.get('/sp_selectCategoria', async function(req, res) {
    //await sql.connect(dbConnString);

    //const result = await sql.query(`EXEC sp_selectCategoria`);     

    //res.send(result.recordset);

    client.connect();

    client.query(`select Categoria()`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });
});

app.post('/updateCategoria', async function(req, res) {
    await sql.connect(dbConnString);

    const id = req.body.id;
    const nombre = req.body.nombre;

    client.connect();

    client.query(`select updateCategoria(${id},${nombre})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });

    //const result = await sql.query(`EXEC updateCategoria @_id = ${id}, @_name = ${nombre}`);     

    //res.send(result.recordset);
});


app.post('/sp_deleteCategoria', async function(req, res) {
    //await sql.connect(dbConnString);

    const id = req.body.id;

    client.connect();

    client.query(`select deleteCategoria(${id})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });


    //const result = await sql.query(`EXEC sp_deleteCategoria @_id = ${id}`);     

    //res.send(result.recordset);
});


app.post('/sp_InsertArticulo', async function(req, res) {
    //await sql.connect(dbConnString);

    const nombre = req.body.nombre;
    const descripccion = req.body.descripccion;
    const precio = req.body.precio;
    const cantidad = req.body.cantidad;
    const categoriaId = req.body.categoriaId;
    const sucursalId = req.body.sucursalId;

    client.connect();

    client.query(`select insertArticulo(${nombre},${descripccion},${precio},${cantidad},${categoriaId},${sucursalId})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });


    //const result = await sql.query(`EXEC sp_InsertArticulo @_nombre = '${nombre}',@_descripccion = '${descripccion}',@_precio = ${precio},@_cantidad = ${cantidad},
    //@_categoriaId = ${categoriaId},@_sucursalId = ${sucursalId}`);     

    //res.send(result.recordset);
});


app.get('/sp_selectArticulo', async function(req, res) {
    //await sql.connect(dbConnString);

    client.connect();

    client.query(`select selectArticulo()`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });

    //const result = await sql.query(`EXEC sp_selectArticulo`);     

    //res.send(result.recordset);
});



app.post('/sp_updateArticulo', async function(req, res) {
    //await sql.connect(dbConnString);

    const nombre = req.body.nombre;
    const descripccion = req.body.descripccion;
    const precio = req.body.precio;
    const cantidad = req.body.cantidad;
    const categoriaId = req.body.categoriaId;
    const sucursalId = req.body.sucursalId;

    client.connect();

    client.query(`select updateArticulo(${nombre},${descripccion},${precio},${cantidad},${categoriaId},${sucursalId})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });

    //const result = await sql.query(`EXEC sp_updateArticulo @_nombre = '${nombre}',@_descripccion = '${descripccion}',@_precio = ${precio},@_cantidad = ${cantidad},
    //@_categoriaId = ${categoriaId},@_sucursalId = ${sucursalId}`);     

    //res.send(result.recordset);
});


app.post('/sp_deleteArticulo', async function(req, res) {
    //await sql.connect(dbConnString);

    const id = req.body.id;

    client.connect();

    client.query(`select deleteArticulo(${id})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });

    //const result = await sql.query(`EXEC sp_deleteArticulo @_id = ${id}`);     

    //res.send(result.recordset);
});


app.post('/sp_InsertTipoUsuario', async function(req, res) {
    //await sql.connect(dbConnString);

    const nombre = req.body.nombre;

    client.connect();

    client.query(`select insertTipoUsuario(${nombre})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });

    //const result = await sql.query(`EXEC sp_InsertTipoUsuario @_nombre = '${nombre}'`);     

    //res.send(result.recordset);
});

app.get('/sp_selectTipoUsuario', async function(req, res) {
    //await sql.connect(dbConnString);

    client.connect();

    client.query(`select TipoUsuario()`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });

    //const result = await sql.query(`EXEC sp_selectTipoUsuario`);     

    //res.send(result.recordset);
});

app.post('/updateTipoUsuario', async function(req, res) {
    //await sql.connect(dbConnString);

    const id = req.body.id;
    const name = req.body.name;

    client.connect();

    client.query(`select updateTipoUsuario(${nombre})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });
    //const result = await sql.query(`EXEC updateTipoUsuario @_id = ${id},@_name = '${name}'`);     

    //res.send(result.recordset);
});



app.post('/sp_deleteTipoUsuario', async function(req, res) {
    //await sql.connect(dbConnString);

    const id = req.body.id;

    client.connect();

    client.query(`select deleteTipoUsuario(${id})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });


    //const result = await sql.query(`EXEC sp_deleteTipoUsuario @_id = ${id}`);     

    //res.send(result.recordset);
});


app.post('/sp_InsertUsuario', async function(req, res) {
    //await sql.connect(dbConnString);

    const id = req.body.id;
    const nombre = req.body.nombre;
    const apeliido = req.body.apeliido;
    const contraseña = req.body.contraseña;
    const correo = req.body.correo;
    const direccionFisica = req.body.direccionFisica;
    const nombreUsuario = req.body.nombreUsuario;
    const cedula = req.body.cedula;
    const tipoId = req.body.tipoId;

    client.connect();

    client.query(`select insertUsuario(${id},${nombre},${apeliido},${contraseña},${correo},${direccionFisica},${nombreUsuario},${cedula},${tipoId})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });


    /*const result = await sql.query(`EXEC sp_InsertUsuario @_id = ${id},@_nombre = '${nombre}',@_apeliido = '${apeliido}',@_contraseña = '${contraseña}',
    @_correo = '${correo}',@_direccionFisica = '${direccionFisica}',@_nombreUsuario = '${nombreUsuario}',@_cedula = ${cedula},@_tipoId = ${tipoId}`);     
    res.send(result.recordset);*/
});



app.get('/sp_selectUsuario', async function(req, res) {
    /*await sql.connect(dbConnString);
  
    const result = await sql.query(`EXEC sp_selectUsuario`);     
    res.send(result.recordset);*/

    client.connect();

    client.query(`select Usuario()`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });

});


app.post('/sp_updateUsuario', async function(req, res) {
    //await sql.connect(dbConnString);

    const id = req.body.id;
    const nombre = req.body.nombre;
    const apeliido = req.body.apeliido;
    const contraseña = req.body.contraseña;
    const correo = req.body.correo;
    const direccionFisica = req.body.direccionFisica;
    const nombreUsuario = req.body.nombreUsuario;
    const cedula = req.body.cedula;
    const tipoId = req.body.tipoId;

    client.connect();

    client.query(`select updatetUsuario(${id},${nombre},${apeliido},${contraseña},${correo},${direccionFisica},${nombreUsuario},${cedula},${tipoId})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });


    /*const result = await sql.query(`EXEC sp_InsertUsuario @_id = ${id},@_nombre = '${nombre}',@_apeliido = '${apeliido}',@_contraseña = '${contraseña}',
    @_correo = '${correo}',@_direccionFisica = '${direccionFisica}',@_nombreUsuario = '${nombreUsuario}',@_cedula = ${cedula},@_tipoId = ${tipoId}`);     
    res.send(result.recordset);*/
});


app.post('/sp_deleteUsuario', async function(req, res) {
    //await sql.connect(dbConnString);

    const id = req.body.id;


    /*const result = await sql.query(`EXEC sp_deleteUsuario @_id = ${id}`);     
    res.send(result.recordset);*/

    client.connect();

    client.query(`select deleteUsuario(${id})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });
});



app.post('/sp_InsertPedido', async function(req, res) {
    //await sql.connect(dbConnString);

    const estado = req.body.id;
    const fecha = req.body.fecha;
    const precioTotal = req.body.precioTotal;
    const usuarioId = req.body.usuarioId;

    client.connect();

    client.query(`select insertPedido(${estado},${fecha},${precioTotal},${usuarioId})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });


    /*const result = await sql.query(`EXEC sp_InsertPedido @_estado = '${estado}',@_fecha = '${fecha}',@_precioTotal = ${precioTotal},@usuarioId = ${usuarioId}`);     
    res.send(result.recordset);*/
});


app.get('/sp_selectPedido', async function(req, res) {
    /*await sql.connect(dbConnString);
  
    const result = await sql.query(`EXEC sp_selectPedido`);     
    res.send(result.recordset);*/

    client.connect();

    client.query(`select Pedido()`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });
});


app.post('/sp_updatePedido', async function(req, res) {
    //await sql.connect(dbConnString);

    const estado = req.body.estado;
    const fecha = req.body.fecha;
    const precioTotal = req.body.precioTotal;
    const usuarioId = req.body.usuarioId;

    client.connect();

    client.query(`select updatePedido(${estado},${fecha},${precioTotal},${usuarioId})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });


    /*const result = await sql.query(`EXEC sp_updatePedido @_estado = '${estado}',@_fecha = '${fecha}',@_precioTotal = ${precioTotal},@usuarioId = ${usuarioId}`);     
    res.send(result.recordset);*/
});

app.post('/sp_deletePedido', async function(req, res) {
    //await sql.connect(dbConnString);

    const id = req.body.id;

    client.connect();

    client.query(`select deletePedido(${id})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });

    /*const result = await sql.query(`EXEC sp_deletePedido @_id = ${id}`);     
    res.send(result.recordset);*/
});

app.post('/sp_InsertArticuloXPedido', async function(req, res) {
    //await sql.connect(dbConnString);

    const pedidoId = req.body.pedidoId;
    const ArticuloId = req.body.ArticuloId;

    client.connect();

    client.query(`select insertArticuloXPedido(${pedidoId},${ArticuloId})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });

    /*const result = await sql.query(`EXEC sp_InsertArticuloXPedido @_pedidoId = ${pedidoId},@_ArticuloId = ${ArticuloId}`);     
    res.send(result.recordset);*/
});


app.get('/sp_selectArticuloXPedido', async function(req, res) {
    /*await sql.connect(dbConnString);
  
    const result = await sql.query(`EXEC sp_selectArticuloXPedido`);     
    res.send(result.recordset);*/

    client.connect();

    client.query(`select ArticuloXPedido()`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });
});



app.post('/sp_deleteArticuloXPedido', async function(req, res) {
    //await sql.connect(dbConnString);

    const id = req.body.id;

    client.connect();

    client.query(`select deleteArticuloXPedido(${id})`, (err, results) => {
        console.log(err, results);
        res.send(results);
        client.end()
    });


    /*const result = await sql.query(`EXEC sp_deleteArticuloXPedido @_id = ${id}`);     
    res.send(result.recordset);*/
});