const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER_DB,
    /* password: process.env.PASSWORD_DB, */
    database: process.env.NAME_DB
});

connection.connect( (err)=>{
    if(err){
        console.log('No se pudo conectar a la base de datos');
        console.log(err);
    }else{
        console.log('Conectado a la base de datos');
    }
});

module.exports = connection;