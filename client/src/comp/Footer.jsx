import { Col, Row } from "react-bootstrap";


export default function Footer() {
  return (
    <div className="card" style={{ backgroundColor: "#00463e" }}>
      <div className="card-body">
        <p style={{marginLeft:"10%" , color:"white"}}>Questions? Call 420696969</p>

        <Row style={{width:"80%" , marginLeft:"10%" }}> 
          <Col >
            <p style={{color:"white"}}>Health</p>
            <p style={{color:"white"}}>About Us</p>
            
          
          </Col>
          <Col>
            <p style={{color:"white"}}>Blog</p>
            <p style={{color:"white"}}>Contact Us</p>
            
          
          </Col>
          <Col>
            <p style={{color:"white"}}>FAQ</p>
            <p style={{color:"white"}}>Medicine</p>
            
          
          </Col>
          <Col>
            <p style={{color:"white"}}>Bing Chillin</p>
            
           
          
          </Col>
        </Row>
      </div>
    </div>
  );
}