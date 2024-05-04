const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
var bodyparser = require("body-parser");
const bcrypt = require('bcrypt');
const app = express()
const port = 3000
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
mongoose.connect('mongodb://localhost:27017/Healthcare')
.then(()=>{console.log("success")})
const user = new mongoose.Schema({
    user:String,
    pass:String,
    email:String
})
const userdata = mongoose.model("user" , user)
const saltRounds = 10;
let loginState = false;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/signup" , (req,res) => {
    let {user , pass , email} = req.body
    userdata.findOne({user :req.body.user}).then((ress) =>{
        if(ress === null){
            bcrypt.hash(pass , saltRounds , function(err , hash){
                let data = new userdata({user:user , pass:hash , email:email})
                data.save().then((e)=>{
                    res.json("success")
                })
            })
          
        }else{
            res.json("exist")
        }
    })
})
app.post("/log" , (req,res) =>{
    let {user , pass} = req.body
    userdata.findOne({user : user}).then((e) =>{
        if(e === null){
            res.json("fail")
        }else{
            bcrypt.compare(pass , e.pass , function(err , result){
                if(result === true){
                res.json("success")
                loginState = true
                }
                else{
                    res.json("pass not same")
                }
            })
        }
    })
})
app.post("/checkuser", (req,res) =>{
    if(loginState){
      res.json(true)
    }else{
      res.json(false)
    }
   
  })
  app.get("/logout" , (req,res) =>{
    loginState = false
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})