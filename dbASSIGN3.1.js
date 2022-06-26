let parameter={

    host : 'localhost',
    user :'shinde',
    password :'cdac',
    database :'latur',
    port : 3306
};

const mysql = require("mysql2");
const connection=mysql.createConnection(parameter);
console.log("working");

let resourceNo =1;
let resourceName  ='production';
let status   =true;

connection.query('insert into resource (id,resourcename,status) values(?,?,?)',
[resourceNo,resourceName,status] ,
(err,res1)=>{
    if (err) {
        console.log(err);  
    } else {
        console.log(res1.affectedRows)     
       
    }
}


);