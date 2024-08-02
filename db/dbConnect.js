const mysql=require("mysql2");
var mysqlconnection=mysql.createConnection({
  host:"127.0.0.1",
  port:3306,
  user:"root",
  password:"Welcome@01",
  database:"testExpress"
})

mysqlconnection.connect((err)=>{
  if(!err){
    console.log("Connection done !!");
  }else{
    console.log(err);
  }
})

module.exports=mysqlconnection;