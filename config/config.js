var mysql = require('mysql');

var connection = mysql.createConnection({
    host:  'localhost',
    user:   'root',
    password:  '',
    database:   'node_app'
});
connection.connect((err) =>{
    if(err) throw err;
});

module.exports = connection;