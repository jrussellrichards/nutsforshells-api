const connection = require('../config');

exports.getShell = function (req, res) {
    connection.query('select * from shell where id=' + req.params.shellId, function (err, rows, fields) {

        res.send(rows);
        // console.log(rows)
        console.log('consultaste un id')

    });

};


exports.getShells = function (req, res) {
    connection.query('select * from shell ', function (err, rows, fields) {

        res.send(rows);
        // console.log(rows)
        console.log('consultaste todos los id')

    });

};


exports.deleteShell = function (req, res) {
    connection.query('select * from shell ', function (err, rows, fields) {

        connection.query('delete from shell where id = ' + req.params.shellId , function (err, rows, fields) {

            res.send('eliminaste un id' );
        });

    });

};

// Funcion que elimina petición de react
// app.post('/eliminado', function (req, res) {
//     console.log('eliminando', req.body.ids_eliminados  )
//     connection.query('delete from shell where id in (' + req.body.ids_eliminados+')', function (err, rows, fields) {
  
//       res.send('eliminado' + req.data);
//     });
  
//   });