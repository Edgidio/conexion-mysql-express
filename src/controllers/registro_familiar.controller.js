const controllers = {}

// import modules npm
const rn = require('random-number');
// funcion numeros randoms
const gen = rn.generator({
    min:  -1000
  , max:  1000
  , integer: true
});

// conexion mysql
const mysqlConnection = require('../database');

// PETICION GET
controllers.GET_Controller = ( (req, res)=>{

    // Consullta a la base de datos
    mysqlConnection.query('SELECT * FROM registro_familiar.familia;', (err, rows, fields)=>{
        if (err){
            res.status(500)
               .json({
                   connection: false
               })
        }else {
            res.status(200)
               .json({
                   connection: true,
                   data: rows,
                   //fields:fields
               }) 
        }
    });

});

// PETICION GET ONE
controllers.GET_ONE_Controller = ((req, res)=>{

    const id = req.params.id;
    const consulta = `select * from familia where id = ${id};`

    mysqlConnection.query(consulta, (err, rows, fiels)=>{
        if(err){
            res.status(400)
                .json({
                    peticion:false,
                });
        }else{
            res.status(200)
                .json({
                    peticion: true,
                    data: rows
                })
        }
    });
});

// PETICION POST
controllers.POST_controller = ((req, res)=>{
    
    const {nombres, apellidos, edad, parentesco} = req.body;
    const consulta = `insert into familia value(${gen()}, '${nombres}', '${apellidos}', ${edad}, '${parentesco}');`;

    // consulta a la base de datos
    mysqlConnection.query(consulta, (err, rows, fiels)=>{
        if(err){
            res.status(400)
                .json({
                    peticion: false
                })
        }else{
            res.status(200)
                .json({
                    peticion: true,
                    data: rows
                });
        }
    });

});

// PETICION UPDATE
controllers.PUT_Controller = ((req, res)=>{
    const id = req.params.id;
    const {nombres, apellidos, edad, parentesco} = req.body;
    const consulta = `update familia set nombres = '${nombres}', apellidos = '${apellidos}', edad = ${edad}, parentesco = '${parentesco}' where id = ${id}`

    mysqlConnection.query(consulta, (err, rows, fiels) => {
        if(err){
            res.status(400)
                .json({
                    peticion: false,
                    error:err
                })
        }else{
            res.status(200)
                .json({
                    peticion: true,
                    data: rows
                });
        }
    });
});

// PETICION DELETE
controllers.DELETE_Controller = ((req, res)=>{
    const id = req.params.id;
    const consulta = `delete from familia where id = ${id};`;

    mysqlConnection.query(consulta, (err, rows, fiels) => {
        if (err){
            res.status(400)
                .json({
                    peticion: false,
                    mensaje: 'Familiar no encontrado'
                })
        }else{
            res.status(400)
            .json({
                peticion: true,
                mensaje: 'Familiar elminado'
            })
        }
    })
});

module.exports = controllers;