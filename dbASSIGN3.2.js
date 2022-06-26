let paramters=
{
    host :'localhost',
user :'shinde',
database : 'latur',
password :'cdac',
port : 3306
};

const mysql =require("mysql2");
const connection=mysql.createConnection(paramters);
console.log("working");

let resourceName ="sales"

connection.query('update resource set resourcename=?',[resourceName],
(error,res)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(res.affectedRows);
    }

}



);