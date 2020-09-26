var tournamentController = require("../../futbol-back/controllers/tournamentRequestController");
var usersController = require("../../futbol-back/controllers/usersRequestController");
// var middleware = require("./middleware/auth.js");

module.exports = function(app) {


    // app.use(middleware.checkToken)

    app.get('/', function (req, res) {
      res.send('GET request to the HOME');
    });
    
    
    app.post('/eliminado', function (req, res) {
      console.log('eliminando', req.body.ids_eliminados  )
      connection.query('delete from shell where id in (' + req.body.ids_eliminados+')', function (err, rows, fields) {
    
        res.send('eliminado' + req.data);
      });
    
    });
    // app.post('/eliminado', function (req, res) {
    //   console.log(req.data)
    //   for (const prop in req.data) {
    //     console.log(prop);
    //   }
    
    //   console.log('holass')
    // });
    // create a GET route
    app.get('/express', (req, res) => {
      // res.send({ saludo: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
      connection.query('select * from shell', function (err, rows, fields) {
    
        res.send(rows);
        // console.log(rows)
        console.log('hola')
      });
    
    });
    

};

