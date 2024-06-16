const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
var bodyparser = require("body-parser");
const bcrypt = require('bcrypt');
const {spawn} = require("child_process");
const app = express()
const port = process.env.PORT || 3000;
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require('dotenv').config();

app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
mongoose.connect('mongodb://localhost:27017/Healthcare')
.then(()=>{console.log("success")})
const user = new mongoose.Schema({
    user:String,
    pass:String,
    email:String,
})
const appointment = new mongoose.Schema({
  doctor: String,
  date: String,
  time: String,
  name: String,
  email: String,
  phone: String,
  user:String,
  status : String
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
const med = new mongoose.Schema({
    name: String,
    Manufacturer: String,
    Type: String,
    img: String,
    desc: String,
    uses: String,
    directions: String,
    "Side Effects": Array,
    rs: String
  
})
const order = new mongoose.Schema({
  first: String,
  last: String,
  address: String,
  house: String,
  city: String,
  state: String,
  zip:String,
  phone:String,
  user:String,
  pname:String,
  price:String
})

const doc = new mongoose.Schema({
  user:String,
  pass:String,
})

const userdata = mongoose.model("user" , user)
const appointmentdata = mongoose.model("appointment" , appointment)
const symData = mongoose.model("sym" , sym)
const decsdata = mongoose.model("desc" ,decs)
const prevdata = mongoose.model("prev" ,prev)
const medData = mongoose.model("med" , med)
const orderData = mongoose.model("order" , order)
const docData = mongoose.model("doc" , doc)
const saltRounds = 10;
let loginState = false;
let loginEmail = ""
let doctor = ""

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
                loginEmail = user;
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
  app.get("/getmail" , (req,res) => {
    res.json(loginEmail)
  })
  app.get("/logout" , (req,res) =>{
    loginState = false
    loginEmail = ""
    res.json("success")
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
    const decs = decsdata.find({Disease : arr})
    const prev = prevdata.find({Disease : arr})
    const sym = symData.find({Disease : arr})
    Promise.all([decs , prev , sym]).then((e) => {
      res.json(e)
    })
    });
   
  })
  app.post("/sym" , (req,res) => {
    const decs = decsdata.find({Disease : req.body.data})
    const prev = prevdata.find({Disease : req.body.data})
    const sym = symData.find({Disease : req.body.data})
    Promise.all([decs , prev , sym]).then((e) => {  
      console.log(e)
      
      res.json(e)}
     
    )
    
  })

  app.post("/book" , (req,res) => {
    let arr = req.body
    arr.user = loginEmail
    let dataa = new appointmentdata(arr)
    dataa.save().then((e) =>{
      res.json("success")
    })
  })
  app.post("/bookhis" , (req,res)=>{
    appointmentdata.find({user : loginEmail}).then((e)=>{
      if(e !== null){
      res.json(e)
    }else{
      res.json(false)
    }
    })
  })
  app.post("/orderhis" , (req,res)=>{
    orderData.find({user : loginEmail}).then((e)=>{
      if(e !== null){
      res.json(e)
    }else{
      res.json(false)
    }
    })
  })
  app.get("/meddata" , (req,res) => {
    medData.find().then((e) => {
      res.json(e)
    })
  })
  app.post("/payment" , (req,res) => {
    let data = req.body
    data.user = loginEmail
    let dataa = new orderData(data)
    dataa.save().then(() =>{
      res.json("success")
    })
  })

  app.post("/docsign" , (req,res) =>{
    let {user , pass} = req.body
    docData.findOne({user : user}).then((e) =>{
     
        if(e === null){
            res.json("fail")
        }else{
          if(e.pass === pass){
            res.json("success")
            doctor = user
          }else{
            res.json("pass not same")
        }
        }
    })
})

app.post("/dochis" , (req,res)=>{

  appointmentdata.find({doctor : doctor}).then((e)=>{
    if(e !== null){
    res.json(e)
  }else{
    res.json(false)
  }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




//new----------------------------------------------------------------------------------------------

app.use(bodyParser.json());
app.use(cors());

// Replace with your email and password (Use App Password for Gmail if 2FA enabled)
const EMAIL_USER = "farziid1009@gmail.com";
const EMAIL_PASS = "wsgs lfqd bure kjny"; // Use App Password here

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Error with transporter configuration: ", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// Example existing route
app.post("/appointdel", (req, res) => {
  appointmentdata.findOneAndUpdate(req.body ,{status : "Cancel"}).then((e) => {
    res.json("success")
    const mailOptions = {
      from: EMAIL_USER,
      to: e.email,
      subject: "Appointment Cancelled",
      text: `Dear ${e.user},\n\nYour appointment with ${e.doctor} on ${e.date} at ${e.time} has been Cancelled.\n\nThank you!`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
        return res.status(500).send(error.toString());
      }
      res.status(200).send("Email sent: " + info.response);
    });
  })
});

// Route to handle appointment booking
app.post("/book", (req, res) => {
  // Handle appointment booking logic here (e.g., save to database)
  res.status(200).send("Appointment booked successfully");
});

// Route to handle sending email
app.post("/send-email", (req, res) => {
  const { email, name, doctor, date, time } = req.body;

  const mailOptions = {
    from: EMAIL_USER,
    to: email,
    subject: "Appointment Confirmation",
    text: `Dear ${name},\n\nYour appointment with ${doctor} on ${date} at ${time} has been confirmed.\n\nThank you!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

/*app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
*/


/*app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/
//2H9xpZL1IJBJ7bmy
