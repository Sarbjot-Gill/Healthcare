import { Col, Row } from "react-bootstrap";


export default function Footer() {
  return (
    <div className="card" style={{ backgroundColor: "#00463e", color: "white" }}>
      <div className="card-body">
        <p style={{marginLeft:"10%"}}>Questions? Call 420696969</p>

        <Row style={{width:"80%" , marginLeft:"10%"}}> 
          <Col>
            <p>Health</p>
            <p>About Us</p>
            
          
          </Col>
          <Col>
            <p>Blog</p>
            <p>Contact Us</p>
            
          
          </Col>
          <Col>
            <p>FAQ</p>
            <p>Medicine</p>
            
          
          </Col>
          <Col>
            <p>Bing Chillin</p>
            
           
          
          </Col>
        </Row>
      </div>
    </div>
  );
}