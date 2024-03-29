const dbMySQL=require('mysql2/promise');

const mysql=dbMySQL.createPool({
  host:'localhost',
  user:"root",
  password:"root@9353",
  database:"employee_registration"
})

mysql.query('SELECT 1')
.then(()=>console.log("MYSQL Connection Sucessfull"))
.catch((error)=>console.log('DB Connection is Failed',error))

module.exports=mysql;