// Pull in depency
let mysql = require('mysql');
var connection;
//This is connect with jaws database and this code will create a connection for us 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    // this is connection from my local database
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'NeilaSenor@2',
        database: 'burger_db'
    });
};
connection.connect();

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
