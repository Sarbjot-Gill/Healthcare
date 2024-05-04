import { Button,  Container,  Nav, Navbar} from "react-bootstrap";
import Style from '../css/nav.module.css'
import { Link } from "react-router-dom";
export default function Navbarr() {
  return (
    <Navbar style={{zIndex:"4" }} >
      <Container  style={{marginLeft:"40px"}}>
        <Link to="/" style={{textDecoration:"none"}}>
        <Navbar.Brand className={Style.txtt}>Healthcare</Navbar.Brand>
        </Link>
        <Nav >
            <Nav.Link className={Style.txt}>Home</Nav.Link>
            <Nav.Link className={Style.txt}>Home</Nav.Link>
            <Nav.Link className={Style.txt}>Home</Nav.Link>
            <Nav.Link className={Style.txt}>Home</Nav.Link>
            <Link to="/sign" state="in">
            <Button className={Style.buttonnn}>Log In</Button>
            </Link>
            <Link to="/sign" state="up" >
            <Button className={` ${Style.buttonn} mx-2`}>Sign up</Button>
            </Link>
        </Nav>
        </Container>
    </Navbar>
  )
}
