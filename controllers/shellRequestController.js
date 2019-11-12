const connection = require('../config');



exports.getShellRequest = function(req, res) {
    connection.query('select * from shell', function (err, rows, fields) {

        res.send(rows);
        // console.log(rows)
        console.log('hola')
    });
    
  };


// exports.getShellRequest = function(req, res) {
//     var shellRequest = shellRequests.find(shellRequest => shellRequest.id === req.params.shellRequestId);
//     res.json(shellRequest);
//   };



//   var shellRequests = [{
//     id: '1',
//     device_token: '1',
//     hashtags: "#ios #swift"
//   }, {
//     id: '2',
//     device_token: '2',
//     hashtags: "#android #kotlin"
//   }, {
//     id: '3',
//     device_token: '3',
//     hashtags: "#backend #nodejs"
//   }];