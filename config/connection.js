 // Pull depency
  var mysql = require('mysql');

  var connection;
// For heroku Deployment and local mysql database
if (process.env.JAWSDB_URL) {
  //Heroku deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user : 'root',
    password :'NeilaSenor@2', //password
    database : 'burger_db'    //database
  });
}

connection.connect(function(err) {
  //If there is an error when connecting to the database, log the error to the console.
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  //If a database connection is established, log the database thread number.
  console.log("connected as id " + connection.threadId);
});


//Export Connection

module.exports = connection;
