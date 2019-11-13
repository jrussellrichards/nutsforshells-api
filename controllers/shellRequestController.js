const connection = require('../config');
const Shell = require('../Models/shell');

exports.getShell = function (req, res) {
    Shell.findAll({
        where: {
          id: req.params.shellId
        }
      }).then(shell => {
        res.send(shell)});

};


exports.getShells = function (req, res) {
    Shell.findAll().then(shell => {
        res.send(shell);
      });

};


exports.deleteShell = function (req, res) {
    Shell.destroy({
        where: {
          id: req.params.shellId
        }
      });

};

// Funcion que elimina petición de react
// app.post('/eliminado', function (req, res) {
//     console.log('eliminando', req.body.ids_eliminados  )
//     connection.query('delete from shell where id in (' + req.body.ids_eliminados+')', function (err, rows, fields) {
  
//       res.send('eliminado' + req.data);
//     });
  
//   });

