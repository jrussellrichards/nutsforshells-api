const Sequelize = require('sequelize');
const Shell = require('../models/shell');
const Op = Sequelize.Op

exports.deleteTournament = function (req, res) {
    Shell.destroy({
      where: {
        id:
        {
          [Op.in]: req.params.shellId.split(',')
        }
  
      }
    });
  };

  exports.getShells = function (req, res) {
    Shell.findAll().then(shell => {
      res.send(shell);
    });
  
  };

  exports.deleteShells = function (req, res) {
    console.log('algo'+req.body.ids_eliminados)
    Shell.destroy({
      where: {
        id:
        {
          [Op.in]: req.body.ids_eliminados
        }
  
      }
    });
  
  };
  
  // app.post('/eliminado', function (req, res) {
  //   console.log('eliminando', req.body.ids_eliminados  )
  //   console.log('delete from shell where id in (' + req.body.ids_eliminados+')')

  //   connection.query('delete from shell where id in (' + req.body.ids_eliminados+')', function (err, rows, fields) {
  
  //     res.send('eliminado' + req.data);
  //   });
  
  // });