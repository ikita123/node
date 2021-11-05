// const mysql =require("mysql");
// const con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Nikita@12345"
// })
// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected");
//     con.query("CREATE DATABASE merakilearn",function(err,result){
//         if(err) throw err;
//         console.log("databases created")
//     })
// })

// const mysql = require('mysql');
// local mysql db connection
const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Nikita@12345',
  database: 'node_mysql_crud_db'
});
// dbConn.connect(function (err) {
//   if (err) throw err;
//   console.log("Database Connected!");
//   var sql = `CREATE  TABLE  employees (id INT AUTO_INCREMENT PRIMARY KEY,first_name VARCHAR(255) NOT NULL,
//     last_name VARCHAR(255) NOT NULL,email VARCHAR(255) NOT NULL,phone VARCHAR(50) NOT NULL,
//     organization VARCHAR(255) NOT NULL,designation VARCHAR(100) NOT NULL,salary DECIMAL(11,2) UNSIGNED DEFAULT 0.00,
//     status TINYINT UNSIGNED DEFAULT 0,is_deleted TINYINT UNSIGNED DEFAULT 0,created_at DATETIME NOT NULL,
//     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`
//     dbConn.query(sql,function(err,result){
//       if (err) throw err;
//       console.log("table is created");

//     });
// })
dbConn.connect(function(err){
  if(err) throw err;
  console.log("database connection")
  var values=[['John', 'Doe', 'johndoe@gmail.com', '1234567890', 'BR Softech Pvt Ltd', 'Full Stack Developer', '500.00', '1', '0', '2019-11-19 03:30:30'],['John', 'Doe', 'johndoe@gmail.com', '1234567890', 'BR Softech Pvt Ltd', 'Full Stack Developer', '500.00', '1', '0', '2019-11-19 03:30:30']]
  var data=`INSERT INTO node_mysql_crud_db.employees
  (first_name,last_name,email,phone,organization,designation,salary,status,is_deleted,created_at)
  VALUES?`
  dbConn.query(data,[values],(err,result)=>{
    if(err) throw err;
    console.log("data is inserted");
  })
})


