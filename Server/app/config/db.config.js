const mysql = require("mysql");

const con = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",
    database : "school_system"
});

con.connect();

module.exports =  con;