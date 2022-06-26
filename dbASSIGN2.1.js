let dbparams=
{
    host: 'localhost',
    user: 'shinde',
    password: 'cdac',
    database: 'latur',
	port:3306
}; 
const mysql = require('mysql2');
const connection=mysql.createConnection(dbparams);
console.log("db started");


let id ='3';  
let name ='miik'; 
let price ='55'; 
let category ='food';

connection.query('insert into item(id,name,price,category) values (?,?,?,?)', [id,name,price,category], 
(err, res1) => {
    if (err) {
        console.log(err);  
    } else {
        console.log(res1.affectedRows)     
       
    }
}
);