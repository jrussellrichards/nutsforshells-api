
module.exports  = function(app) {
    var shellRequestController = require('../controllers/shellRequestController');
  
    app.route('/shellRequest')
      .get(shellRequestController.getShellRequest)
      // .delete(shellRequestController.deleteShellRequest);
  };

