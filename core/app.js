var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bacteriocin_info'
});

connection.connect();

var sql = 'SELECT * FROM structural_info';
var str = ""
connection.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR]:', err.message);
    }
    str = JSON.stringify(result)
    console.log(str);
});

app.get('/bacteriocin_info', function (req, res) {
    res.send(str);
});

var sql1 = 'SELECT * FROM physicochemical_info'
var str1 = ""
connection.query(sql1, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR]:', err.message);
    }
    str1 = JSON.stringify(result)
    console.log(result);
});

connection.end();
app.listen(3000, function () {
    console.log("Server running at 3000 port");
});