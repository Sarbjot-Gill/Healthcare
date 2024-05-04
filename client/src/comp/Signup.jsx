import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";


export default function Signup() {
  const [success , setsuccess] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    let user = e.target.user.value;
    let pass = e.target.pass.value;
    let cpass = e.target.cpass.value;
    let mail = e.target.mail.value;
    let data = {user:user,pass:pass,email:mail}
    if(pass === cpass){
      console.log(user,pass,cpass,mail)
      fetch('http://127.0.0.1:3000/signup', 
    { method : "post" ,headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)})
     .then((response) =>response.json().then((dataa) => {
      console.log(dataa);
      if(dataa === "exist"){
        alert("user already exist")
      }else if(dataa === "success"){
        setsuccess(true)
      }
    }))
    }else{
      alert("password not same")
    }
  
  }
  return (
    <div style={{ color: "#00463e",backgroundColor:"white" , height:"450px" , width:"480px" ,  display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column", borderRadius:"10px"}}>
        <h2 className="mb-5">Sign up</h2>
        <form onSubmit={handleSubmit} style={{width:"400px"}}>
            <input type="text" style={{border:"solid 2px #00463e"}} name="user" className="form-control my-2" placeholder="Enter Username" required/>
            <input type="password"  style={{border:"solid 2px #00463e"}} name="pass" className="form-control  my-2" placeholder="Enter Password" required/>
            <input type="password"  style={{border:"solid 2px #00463e"}} name="cpass" className="form-control  my-2" placeholder="Confirm Password" required/>
            <input type="email"  style={{border:"solid 2px #00463e"}} name="mail" className="form-control  my-2" placeholder="Enter Email" required/>
            <button type="submit" className="btn" style={{backgroundColor:"#00463e" , color:"white"}}>Submit</button>
        </form>
        <p>Already have a account<Link to="/sign" state="in"> Log In </Link></p>
        {success ? <>  <Alert variant="success">Sign up Success Pls Log in</Alert></> : <></>}
      
    </div>
  )
}
