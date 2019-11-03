const express = require('express');
const app = express();
var mysql = require('mysql');
const port = process.env.PORT || 5000;
app.use(express.json());


var connection = mysql.createConnection({
  host: 'ftp.museonaturalia.cl',
  user: 'museonat_javier',
  password: 'javier123.',
  database: 'museonat_shells'
    
});


function handleDisconnect() {
  // the old one cannot be reused.

  connection.connect(function (err) {              // The server is either down
    if (err) {
      connection = mysql.createConnection({
        host: 'ftp.museonaturalia.cl',
        user: 'museonat_javier',
        password: 'javier123.',
        database: 'museonat_shells'

      });                                    // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on('error', function (err) {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') { 
      connection = mysql.createConnection({
        host: 'ftp.museonaturalia.cl',
        user: 'museonat_javier',
        password: 'javier123.',
        database: 'museonat_shells'

      });                            
                                                  // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}


handleDisconnect();
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


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

app.get('/test/:id', (req, res) => {
  // res.send({ saludo: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  connection.query('select * from shell where id=' + req.params.id, function (err, rows, fields) {

    res.send(rows);
    // console.log(rows)
  });
});
