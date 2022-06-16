var mysql = require('mysql');

var mc = mysql.createConnection({
    host: "192.168.0.100",
    user: "sa",
    password: "redhat0703",
    database: "home",
    insecureAuth : true
  });

mc.connect(function(error){
    if(!!error) console.log(error);
     else console.log('SQL Database Connected!');
});

module.exports = mc;