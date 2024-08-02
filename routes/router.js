const express=require("express");
const myrouter=express.Router();
const Connection=require("../db/dbConnect");

//login
myrouter.get("/loginForm",function(req,res){
  res.render("login");
})

myrouter.post("/login",function(req,res){
  Connection.query("select * from student",function(err,data,fields){
    if(err){
      res.status(500).send("data not found !!")
    }else{
      res.json(data);
    }
  })
})


//display
myrouter.get("/getdisplay",function(req,res){
  Connection.query("select * from student",function(err,data,fields){
    if(err){
      res.status(500).send("data not found !!")
    }else{
      res.json(data);
    }
  })
})

//add
myrouter.get("/add",function(req,res){
  res.render("Add");
})

myrouter.post("/insert",function(req,res){
  Connection.query("insert into student values(default,?,?,?)",
    [req.body.name,req.body.phone,req.body.branch],
  function(err,result){
    if(err){
      res.status(500).send("insertion failed !!")
    }else{
      res.status(200).send("inserted successful !!")
    }
  })
})

//delete
myrouter.get("/delete",function(req,res){
  res.render("Delete");
})

myrouter.post("/delete",function(req,res){
  Connection.query("delete from student where id=?",
    [req.body.id],
  function(err,data){
    if(err){
      res.status(500).send("deleted failed !!")
    }else{
      res.status(200).send("deleted successful !!")
    }
  })
})

//update
myrouter.get("/updates",function(req,res){
  res.render("update");
})

myrouter.post("/update",function(req,res){
  Connection.query("update student set name=? , phone=? , branch=? where id=?",
    [req.body.name,req.body.phone,req.body.branch,req.body.id],
  function(err,data){
    if(err){
      res.status(500).send("updated failed !!")
    }else{
      res.status(200).send("updated successful !!")
    }
  })
})

module.exports=myrouter;