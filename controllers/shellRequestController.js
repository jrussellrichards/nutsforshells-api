const connection = require('../config');

exports.getShell = function(req, res) {
    connection.query('select * from shell where id='+req.params.shellId, function (err, rows, fields) {

        res.send(rows);
        // console.log(rows)
        console.log('hola')

    });
    
  };


  exports.getShells = function(req, res) {
    connection.query('select * from shell ', function (err, rows, fields) {

        res.send(rows);
        // console.log(rows)
        console.log('hola')

    });
    
  };