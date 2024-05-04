import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbarr from "./Navbarr";
import Signup from "./Signup";
import bgimg from "../assets/pexels-pixabay-40568.jpg"
import Signin from "./Signin";
import { useLocation } from "react-router-dom";

export default function Sign() {
    const [sign , setSign] = useState()
    const loc = useLocation()
    const type = loc.state
   
    
    useEffect(() =>{
        if(type === "up"){
            setSign(true)
        }else if(type === "in"){
            setSign(false)
        }
    } ,[loc])
  return (
  <>
  <Navbarr />
  <div style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgimg})` ,height:"95vh",backgroundSize: "100% 100%" ,  display: "flex",
            justifyContent: "center",
            alignItems: "center",}}>
{ sign ? <Signup /> : <Signin />}
  </div>
  <Footer />
  </>
  )
}
