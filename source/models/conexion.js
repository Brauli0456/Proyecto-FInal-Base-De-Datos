const mysql = require("mysql");
const { promisify } = require('util');

var sqlConnecion = mysql.createConnection({
    host: 'free-version.cy69d1pvwusw.us-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'caca1020',
    port: "3306",
    database: 'contactos'
});
sqlConnecion.connect(function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Conexion Establecida");
    }

});
sqlConnecion.query = promisify(sqlConnecion.query)
module.exports = sqlConnecion;
