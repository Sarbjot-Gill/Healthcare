const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
var bodyparser = require("body-parser");
const bcrypt = require('bcrypt');
const {spawn} = require("child_process");
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
const sym = new mongoose.Schema({
  Disease : String,
  Symptom_1 : String,
  Symptom_2 : String,
  Symptom_3 : String,
  Symptom_4 : String,
  Symptom_5 : String,
  Symptom_6 : String,
  Symptom_7 : String,
  Symptom_8 : String,
  Symptom_9 : String,
  Symptom_10 : String,
  Symptom_11 : String,
  Symptom_12 : String,
  Symptom_13 : String,
  Symptom_14 : String,
  Symptom_15 : String,
  Symptom_16 : String,
  Symptom_17 : String,
})
const decs = new mongoose.Schema({
  Disease : String,
  Description : String
})
const prev = new mongoose.Schema({
  Disease : String,
  Precaution_1 : String,
  Precaution_2 : String,
  Precaution_3 : String,
  Precaution_4 : String,
})
const userdata = mongoose.model("user" , user)
const symData = mongoose.model("sym" , sym)
const decsdata = mongoose.model("desc" ,decs)
const prevdata = mongoose.model("prev" ,prev)
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
  app.post("/ex" ,(req,res) => {
    var dataToSend;
    let data = req.body.sym
    const python = spawn('python', ['test3.py' , data]);
    python.stdout.on('data', function (data) {
     dataToSend = data.toString();
    });
    python.on('close', (code) => {
    // console.log(`child process close all stdio with code ${code}`);
    let sl = dataToSend.slice(1 , dataToSend.length-3 )
    let arr = []
    let str = ""
    for(let i = 0 ; i <sl.length ; i++){
      
      if(sl[i] === ","){
        arr.push(str)
        str = ""
      }else if(sl[i] === "'"){

      }else if(sl[i] === " " && sl[i+1] === "'"){

      }else{
        str = str + sl[i]
      }
    }
    // let data = Array.from(dataToSend)
    const decs = decsdata.find({Disease : arr})
    const prev = prevdata.find({Disease : arr})
    const sym = symData.find({Disease : arr})
    Promise.all([decs , prev , sym]).then((e) => {
      let dec = e[0]
      let pre = e[1]
      let sy = e[2]
      let mainArr = []
      // let mainArr = dec.map(function(e,i) {
      //   return e + pre[i] + sy[i]
      // })
      sy.map((z,i) => {
        mainArr.push(z)
      })
      // dec.map((x,i) => {
      //   Object.assign(mainArr[i] , {"decs" : x.Description})
      //   // mainArr[i].decs = x.Description
      // })
      // pre.map((y,i) => {
      //   mainArr[i].pre1 = y.Precaution_1
      //   mainArr[i].pre2 = y.Precaution_2
      //   mainArr[i].pre3 = y.Precaution_3
      //   mainArr[i].pre4 = y.Precaution_4
      // })
      // for(let i = 0;i < mainArr.length; i++){
      //   // Object.assign(mainArr[i] , {"decs" : dec[i].Description})
      //   mainArr[i]["pre1"] = pre[i].Precaution_1
      // }
     
      res.json(e)
    })
    });
   
  })
  app.post("/sym" , (req,res) => {
    const decs = decsdata.find({Disease : req.body.data})
    const prev = prevdata.find({Disease : req.body.data})
    const sym = symData.find({Disease : req.body.data})
    Promise.all([decs , prev , sym]).then((e) => {  
      res.json(e)
    })
    
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})