var mysql = require('mysql');

module.exports  = mysql.createConnection({
    host: 'ftp.museonaturalia.cl',
    user: 'museonat_javier',
    password: 'javier123.',
    database: 'museonat_shells'
      
  });
