let parameter=
{
    host: 'localhost',
    user: 'shinde',
    password: 'cdac',
    database: 'latur',
	port:3306
}; 
const mysql = require('mysql2');
const connection=mysql.createConnection(parameter);
console.log("working");


let id ='3';  
let name ='Biscuit'; 
let price ='12'; 
let category ='food';
connection.query('update item set name=?,category=?,price=? where id=?', [name,category,price,id], 
(err, res1) => {
    if (err) {
        console.log(err);  
    }  else {
        if(res1.affectedRows===0)
        {
            console.log("failed");
        } 
        else
           console.log("suceeded");    
       
    }
}
);