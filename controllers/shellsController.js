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
    Shell.destroy({
      where: {
        id:
        {
          [Op.in]: req.body.ids_eliminados
        }
  
      }
    });
    res.send(req.body.ids_eliminados);
  
  };
  

  exports.createShell = async (req, res) => {
    console.log('este es el body'+{...req.body})
    try {
      const shell = await Shell.create({
        familia: req.body.familia,
        genero: req.body.genero,
        especie: req.body.especie,
        calidad: req.body.calidad,
        tamano: req.body.tamano,
        ciudad: req.body.ciudad,
        comentario: req.body.comentario,
        precio: Number(req.body.precio),
        habitad: req.body.habitat,
      } );
      return res.status(201).json({
        shell,
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }
  // app.post('/eliminado', function (req, res) {
  //   console.log('eliminando', req.body.ids_eliminados  )
  //   console.log('delete from shell where id in (' + req.body.ids_eliminados+')')

  //   connection.query('delete from shell where id in (' + req.body.ids_eliminados+')', function (err, rows, fields) {
  
  //     res.send('eliminado' + req.data);
  //   });
  
  // });