const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('mssql');
const { ESRCH } = require('constants');
const app = express();

let user = 'SA';
let password = '<hola1234>';
let dbConnString = `mssql://${user}:${password}@localhost/NombreBase`;

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});


app.get('/getAllItems', async function (req, res) {
  await sql.connect(dbConnString);
  
  const result = await sql.query(`SELECT * FROM Items`);     

  res.send(result.recordset);
});