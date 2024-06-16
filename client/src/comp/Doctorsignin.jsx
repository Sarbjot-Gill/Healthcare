import bgimg from "../assets/pexels-pixabay-40568.jpg"
import { Link, useNavigate } from "react-router-dom";

export default function Doctorsignin() {
    const navigate = useNavigate()
    const handleLog = (e) =>{
      e.preventDefault()
      let user = e.target.user.value;
      let pass = e.target.pass.value;
      let data = {user : user , pass:pass}
      fetch('http://127.0.0.1:3000/docsign', 
      { method : "post" ,headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)})
       .then((response) =>response.json().then((dataa) => {
        console.log(dataa);
        if(dataa === "fail"){
          alert("user don't exist")
        }else if(dataa === "success"){
         navigate("/docapp")
        }else if(data === "pass not same"){
          alert("pass not same")
        }
      }))
    }
  return (
  <>
  <div style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgimg})` ,height:"100vh",backgroundSize: "100% 100%" ,  display: "flex",
            justifyContent: "center",
            alignItems: "center",}}>
                    <div style={{ color: "#00463e",backgroundColor:"white" , height:"350px" , width:"480px" ,  display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column", borderRadius:"10px"}}>
        <h2 className="mb-5">Log In</h2>
        <form onSubmit={handleLog} style={{width:"400px"}}>
            <input type="text" name="user" style={{border:"solid 2px #00463e"}} className="form-control my-2" placeholder="Enter Username" />
            <input type="password" name="pass"  style={{border:"solid 2px #00463e"}} className="form-control  my-2" placeholder="Enter Password" />
            <button type="submit" className="btn" style={{backgroundColor:"#00463e" , color:"white"}}>Submit</button>
        </form>
        <p>Don`t have a account <Link to="/sign" state="up"> Sign up </Link></p>
    </div>
  </div>
  </>
  )
}