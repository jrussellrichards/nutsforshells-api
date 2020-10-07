var shellsController = require("../controllers/shellsController");

// var middleware = require("./middleware/auth.js");

module.exports = function(app) {


  
    app
    .route("/shells")
    .get(shellsController.getShells)
    .delete(shellsController.deleteShells)

    app.route('/shell')
    .post(shellsController.createShell)
    .put(shellsController.updateShell)


};

