import { Button, Col, Row } from "react-bootstrap";
import Navbarr from "./Navbarr";
import immg from "../assets/pexels-rethaferguson-3825527.jpg";
import immgg from "../assets/pexels-suzyhazelwood-3652097.jpg";
import Style from "../css/index.module.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
    <div style={{position:"absolute" ,width:"100%" }}>
      <Navbarr />
      </div>
      <Row className="w-100">
        <Col
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ color: "#00796B", width: "500px" }}>
            <p
              style={{ fontSize: "50px", fontWeight: "700", color: "#00463e" }}
            >
              No Ordinary Healthcare Website
            </p>
            <p>
              Get all kind of medicines , information about medicines. Check
              information about disease. You can also check doctors in your area
              and book a appoinment.
            </p>
            <Link to="/sign" state="up" >
            <Button className={` ${Style.buttonn} mx-2`}>Sign up Today</Button>
            </Link>
            <p className="mt-4">
              Already have an account ? <Link to="/sign" state="in"> Log In </Link>
            </p>

            {/* <Row>
            <Col></Col>
            <Col></Col>
          </Row> */}
          </div>
        </Col>
        <Col
          style={{
            backgroundColor: "#ebf9e9",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{ height: "500px", width: "400px" }} src={immg}></img>
          <img
            src="https://images.pexels.com/photos/47073/nutrient-additives-medicine-pills-bless-you-47073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{
              position: "absolute",
              height: "250px",
              width: "400px",
              bottom: "-10vh",
              right: "500px",
            }}
          ></img>
        </Col>
      </Row>
      <div
        style={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontSize: "70px",
            fontWeight: "700",
            color: "#00463e",
            padding: "0px",
            margin: "0",
          }}
        >
          Get Information About
        </p>
        <div>
          <marquee
            style={{
              fontSize: "70px",
              fontWeight: "700",
              color: "#00796B",
              textAlign: "center",
            }}
            height="60"
            scrollamount="5"
            behavior="scroll"
            direction="up"
          >
            Medicine <br></br>
            Disease <br></br> Appointments <br></br> Hospitals
          </marquee>
        </div>
      </div>
      <div
        style={{
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontSize: "65px",
            fontWeight: "600",
            color: "#00463e",
            padding: "0px",
            margin: "0",
            textAlign: "center",
            width: "800px",
          }}
        >
          Stay in touch with Latest Healthcare News
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#00463e",
            width: "700px",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          we provide you latest news Health news .All the information about what
          is going in Healthcare industry. we also have information about
          medicines , disease ,etc
        </p>
      </div>
      <Row style={{width:"100%"}}>
        <Col style={{    display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",height:"40vh"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-hospital"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z" />
            <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z" />
          </svg>
          <p
          style={{
            fontSize: "20px",
            color: "#00463e",
            width: "300px",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
         Book Doctor Appoinment in our website
        </p>
        </Col>
        <Col style={{    display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",height:"40vh"}}>
         <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-capsule" viewBox="0 0 16 16">
  <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z"/>
</svg>
          <p
          style={{
            fontSize: "20px",
            color: "#00463e",
            width: "300px",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
         View Information about various medicines
        </p>
        </Col>
        <Col style={{    display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",height:"40vh"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-virus" viewBox="0 0 16 16">
  <path d="M8 0a1 1 0 0 1 1 1v1.402c0 .511.677.693.933.25l.7-1.214a1 1 0 0 1 1.733 1l-.701 1.214c-.256.443.24.939.683.683l1.214-.701a1 1 0 0 1 1 1.732l-1.214.701c-.443.256-.262.933.25.933H15a1 1 0 1 1 0 2h-1.402c-.512 0-.693.677-.25.933l1.214.701a1 1 0 1 1-1 1.732l-1.214-.7c-.443-.257-.939.24-.683.682l.701 1.214a1 1 0 1 1-1.732 1l-.701-1.214c-.256-.443-.933-.262-.933.25V15a1 1 0 1 1-2 0v-1.402c0-.512-.677-.693-.933-.25l-.701 1.214a1 1 0 0 1-1.732-1l.7-1.214c.257-.443-.24-.939-.682-.683l-1.214.701a1 1 0 1 1-1-1.732l1.214-.701c.443-.256.261-.933-.25-.933H1a1 1 0 1 1 0-2h1.402c.511 0 .693-.677.25-.933l-1.214-.701a1 1 0 1 1 1-1.732l1.214.701c.443.256.939-.24.683-.683l-.701-1.214a1 1 0 0 1 1.732-1l.701 1.214c.256.443.933.261.933-.25V1a1 1 0 0 1 1-1m2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M6 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0m1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-3a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
</svg>
          <p
          style={{
            fontSize: "20px",
            color: "#00463e",
            width: "300px",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
        Check diease information based on symptoms
        </p>
        </Col>
      </Row>
      <Row style={{width:"100%"}}>
        <Col style={{    display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",height:"40vh"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-prescription2" viewBox="0 0 16 16">
  <path d="M7 6h2v2h2v2H9v2H7v-2H5V8h2z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4zM3 3h10V1H3z"/>
</svg>
          <p
          style={{
            fontSize: "20px",
            color: "#00463e",
            width: "300px",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
         Buy various kind of medicines from our website
        </p>
        </Col>
        <Col style={{    display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",height:"40vh"}}>
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-newspaper" viewBox="0 0 16 16">
  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"/>
  <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"/>
</svg>
          <p
          style={{
            fontSize: "20px",
            color: "#00463e",
            width: "300px",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
        Check news about medical field on our website
        </p>
        </Col>
        <Col style={{    display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",height:"40vh"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-globe-central-south-asia" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.882 1.731a.48.48 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.7.7 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.462-.04 7 7 0 0 1 2.45-2.027m-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.8.8 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282l.04-.001a7.003 7.003 0 0 1-12.658.905Z"/>
</svg>
          <p
          style={{
            fontSize: "20px",
            color: "#00463e",
            width: "300px",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
        Our services are available all around the globe
        </p>
        </Col>
      </Row>
      <Footer />
    </>
  );
}
