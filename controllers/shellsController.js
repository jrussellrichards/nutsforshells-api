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
    try {

      Shell.findAll().then(shell => {
        res.send(shell);
      });
      
    } catch (error) {

      res.send(error);

      
    }

  
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

  exports.updateShell = async (req, res) => {
    console.log('este es el body'+req.body.id)

    const shellin = await Shell.findByPk(req.body.id);
    console.log('this is:'+shellin)

    
    try {
      const shell= {
       
        ...req.body.family && { familia: req.body.family },
        ...req.body.gender && { genero: req.body.gender },
        ...req.body.species && { especie: req.body.species },
        ...req.body.quality && { calidad: req.body.quality },
        ...req.body.size && { tamano: req.body.size },
        ...req.body.country && { ciudad: req.body.country },
        ...req.body.comment && { comentario: req.body.comment },
        ...req.body.price && { precio: req.body.price },
        ...req.body.habitat && { habitad: req.body.habitat },
      }

      // shellin.familia = req.body.family
      // shellin.genero = req.body.gender
      // shellin.especie = req.body.species
      // shellin.calidad = req.body.quality
      // shellin.tamano = req.body.size
      // shellin.ciudad = req.body.country
      // shellin.comentario = req.body.comment
      // shellin.precio = req.body.price
      // shellin.habitad = req.body.habitat
  
     const updateData = () => {

      for (const key in shell) {
        // console.log(`${property}: ${object[property]}`);
        shellin[key] = shell[key]
        // shellin.familia = shell[key]
      }

     }
     await updateData()
     
     console.log('el await')
      await shellin.save();

      // console.log(shellin)
      return res.status(201).json({
        shellin

        
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