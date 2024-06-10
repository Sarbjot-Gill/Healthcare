import { Link } from "react-router-dom";
import Navbarr from "./Navbarr";

export default function Success() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height:"100vh"
        }}
      >
        <div className="card shadow" style={{height:"400px"}}>
          <div className="card-body" style={{paddingLeft:"70px" , paddingRight:"70px"}}>
            <center>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="green"
              className="bi bi-check-circle-fill mb-3"
              viewBox="0 0 16 16"
              style={{marginTop:"40px"}}
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg></center>
            <h1 style={{width:"400px" , textAlign:"center"}}>Your payment was Successfull</h1>
            <h5 style={{width:"400px" ,textAlign:"center"}}>Thank you for your payment. we will
            be in contact with more details shortly </h5>
            <h6 style={{textAlign:"center"}}>Go to <Link to="/store">Home</Link></h6>
          </div>
          <div className="shadow" style={{backgroundColor:"green" , width:"100%" , height:"7px"}}>

          </div>
        </div>
      </div>
    </>
  );
}
