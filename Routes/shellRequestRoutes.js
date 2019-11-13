var shellController = require('../controllers/shellRequestController');


module.exports = function (app) {

  app.route('/shell/:shellId')
    .get(shellController.getShell)
  // .delete(shellController.deleteshell);
  app.route('/shell/')
    .get(shellController.getShells)

};