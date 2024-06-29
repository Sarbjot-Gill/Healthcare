import Navbarr from "./Navbarr";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react"
import { useState } from "react";
import axios from "axios";
export default function Checkout() {
  let loction = useLocation()
  let data = loction.state
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    address: "",
    house: "",
    city: "",
    state: "",
    zip:"",
    phone:"",
    pname:data.name,
    price:data.rs
  });
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  let navigate = useNavigate()


  
  return (
    <div>
      <Navbarr />
      <h6 style={{color:"gray" , marginLeft:"100px" , marginTop:"50px", marginBottom:"50px" }}>
        SHIPPING 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right px-1"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
       
        </svg>
        DELIVIRY
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right px-1"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
       
        </svg>
        BILLING
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right px-1"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
       
        </svg>
        CONFIRM
      
      </h6>
      <Row>
        <Col xs={8}>
          <Container style={{ marginLeft: "100px",width:"90%" }}>
            <h2>Shipping Address</h2>
            <hr />
            <form>
            <Row>
              <Col>
                <input
                  className="form-control my-3"
                  type="text"
                  placeholder="First Name"
                  name="first"
                  onChange={handleChange}
                  required
                ></input>
              </Col>
              <Col>
                <input
                  className="form-control my-3"
                  type="text"
                  placeholder="Last Name"
                  name="last"
                  onChange={handleChange}
                  required
                ></input>
              </Col>
            </Row>

            <input
              className="form-control my-3"
              type="text"
              placeholder="Street Address"
              name="address"
              onChange={handleChange}
            ></input>

            <input
              className="form-control my-3"
              type="text"
              placeholder="Apartment"
              name="house"
              onChange={handleChange}
              required
            ></input>

            <input
              className="form-control my-3"
              type="text"
              placeholder="City"
              name="city"
              onChange={handleChange}
              required
            ></input>

            <Row>
              <Col>
                <input
                  className="form-control my-3"
                  type="text"
                  placeholder="State"
                  name="state"
                  onChange={handleChange}
                  required
                ></input>
              </Col>
              <Col>
                <input
                  className="form-control my-3"
                  type="text"
                  placeholder="Zip-Code"
                  name="zip"
                  onChange={handleChange}
                  required
                ></input>
              </Col>
            </Row>

            <input
              className="form-control my-3"
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              required
            ></input>
            {/* <button className="btn btn-secondary" style={{width:"100%"}}>Proceed</button> */}
            <GooglePayButton
               environment="TEST"
               paymentRequest={{
                 apiVersion: 2,
                 apiVersionMinor: 0,
                 allowedPaymentMethods: [
                   {
                     type: 'CARD',
                     parameters: {
                       allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                       allowedCardNetworks: ['MASTERCARD', 'VISA'],
                     },
                     tokenizationSpecification: {
                       type: 'PAYMENT_GATEWAY',
                       parameters: {
                         gateway: 'example',
                         gatewayMerchantId: 'exampleGatewayMerchantId',
                       },
                     },
                   },
                 ],
                 merchantInfo: {
                   merchantId: '123456789',
                   merchantName: 'demo',
                 },
                 transactionInfo: {
                   totalPriceStatus: 'FINAL',
                   totalPriceLabel: 'Total',
                   totalPrice: '100.00',
                   currencyCode: 'USD',
                   countryCode: 'US',
                 },
               }}
               onLoadPaymentData={paymentRequest => {
                 console.log('load payment data', paymentRequest);
                 
                 axios.post("http://localhost:3000/payment" , formData).then((e) => {
                 
                  if(e.data === "success"){
                    navigate("/success")
                  }
                 })
               }}
            />
            </form>
          </Container>
        </Col>

        <Col>
         <div className="px-3" style={{backgroundColor:"lightgray" , width:"70%" , height:"350px" }}>
          <center>
          <h5 style={{paddingTop:"30px"}}>Order Summary</h5></center>
          <hr />
          <p>Item</p>
          <Row>
            <Col>
           <p>
            {data.name}
           </p>
            </Col>
            <Col style={{display:"flex" , justifyContent:"end"}}>
            <p>
              {data.rs}
            </p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
           <h5>
            Total
           </h5>
            </Col>
            <Col style={{display:"flex" , justifyContent:"end"}}>
            <h5>
              {data.rs}
            </h5>
            </Col>
          </Row>
         </div>
        </Col>
      </Row>
    </div>
  );
}
