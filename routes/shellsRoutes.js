var shellsController = require("../controllers/shellsController");
var mysql = require('mysql');

// var middleware = require("./middleware/auth.js");

var connection = mysql.createConnection({
  host: 'ftp.museonaturalia.cl',
  user: 'museonat_javier',
  password: 'javier123.',
  database: 'museonat_shells'
    
});
module.exports = function(app) {


  
    app
    .route("/shells")
    .get(shellsController.getShells)

    app
    .route('/eliminado')
    .delete(shellsController.deleteShells)


};

