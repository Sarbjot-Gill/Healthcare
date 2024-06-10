import { Button,  Container,  Dropdown,  DropdownButton,  Nav, Navbar} from "react-bootstrap";
import Style from '../css/nav.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Navbarr() {
  const[mail , setMail] =useState("")
  const navigate = useNavigate()
    function logout(){
        fetch('http://127.0.0.1:3000/logout', 
    { method : "get"})
    navigate("/")
    }
  useEffect(()=> {
    axios.get("http://localhost:3000/getmail").then((res) => {
      setMail(res.data)
    })
  } ,[])
  return (
    <Navbar style={{zIndex:"4" }} >
      <Container  style={{marginLeft:"40px"}}>
        <Link to="/" style={{textDecoration:"none"}}>
        <Navbar.Brand className={Style.txtt}>Healthcare</Navbar.Brand>
        </Link>
        <Nav >
            <Nav.Link>  <Link to="/store" className={Style.txt}>Home</Link> </Nav.Link>
             <Nav.Link> <Link to="/di" className={Style.txt}>Disease </Link></Nav.Link>
            <Nav.Link><Link to="/sym" className={Style.txt}> Symptoms </Link></Nav.Link>
         <Nav.Link><Link to="/book" className={Style.txt}>Appointment </Link></Nav.Link>
            {mail === "" ? <>
              <Link to="/sign" state="in">
            <Button className={Style.buttonnn}>Log In</Button>
            </Link>
            <Link to="/sign" state="up" >
            <Button className={` ${Style.buttonn} mx-2`}>Sign up</Button>
            </Link>
            </> : <>
            <DropdownButton variant="light" title= {mail}>
              <Dropdown.Item>{mail}</Dropdown.Item>
              <Dropdown.Item> <Link to="/bookhis" style={{textDecoration:"none" , color:"black"}}>Appoinment History </Link></Dropdown.Item>
              <Dropdown.Item> <Link to="/orderhis" style={{textDecoration:"none" , color:"black"}}>Order History </Link></Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </DropdownButton>
            </>}
            {/* <Link to="/sign" state="in">
            <Button className={Style.buttonnn}>Log In</Button>
            </Link>
            <Link to="/sign" state="up" >
            <Button className={` ${Style.buttonn} mx-2`}>Sign up</Button>
            </Link> */}
        </Nav>
        </Container>
    </Navbar>
  )
}
