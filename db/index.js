var mysql = require('mysql');


var connection = mysql.createConnection({
  host:'localhost',	
  user: 'root',
  password: '12345678',
  database:'expensesTracker'
  

});

connection.connect();
console.log('connected')

module.exports = connection;