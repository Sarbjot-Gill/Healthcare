import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbarr from "./Navbarr"
export default function Store() {
  const [data , setData] = useState()
  const [load , setload] = useState(true)

  let navigate = useNavigate()
  useEffect(() => {
   axios.get("http://localhost:3000/meddata").then((e) => {
      console.log(e.data)
      setData(e.data)
      setload(false)
    })
  } ,[])
  return (
    <>
    <Navbarr />
    <div
        className="card"
        style={{ backgroundColor: "#00463e", height: "100px" }}
      >
        <div className="card-body">
          <center>
            <h1 style={{ color: "white" }}>Buy Medicines</h1>
{/* 
            <input
              className="form-control mr-sm-2 mt-4"
              style={{ width: "800px", height: "50px" }}
              type="search"
              placeholder="Search Medicines"
              aria-label="Search"
            /> */}
          </center>
        </div>
      </div>

      <div className="card mt-3 mx-3">
        <div className="card-body">
          <Row>
            {load ? <></> : <>
              {data.map((e) => {
              return(
                <>
                  <Col 
                  className="mt-5"
              style={{
                justifyContent: "center",
                height: "250px",
              }}
            >
              <center>
              <img
                style={{ height: "100px", width: "100px" }}
                src={e.img}
              ></img>
              </center>
              
              <p style={{height:"40px" , lineHeight:"20px"}} >{e.name}</p>
            
              <p >{e.rs}</p>
              <button type="button" className="btn btn-lg" style={{backgroundColor:"#00463e",color:"white",width:"200px"}} onClick={() => {
                navigate("/med" , {state : e})
              }}>Buy</button>
            </Col>
                </>
              )
            })}
            </>}
      
            {/* <Col
              style={{
                justifyContent: "center",
                height: "250px",
              }}
            >
              <center>
              <img
                style={{ height: "100px", width: "100px" }}
                src="https://images.apollo247.in/pub/media/catalog/product/o/r/ors0011_1-1-1.jpg?tr=w-350,q-80,f-webp,dpr-1.5,c-at_max"
              ></img>
              </center>
              <p>ORSL Electrolyte Orange Drink, 200 ml</p>
              <p>₹40</p>
              <button type="button" className="btn btn-lg" style={{backgroundColor:"#00463e",color:"white",width:"200px"}}>Buy</button>
            </Col> */}
          </Row>
        </div>
      </div>
    </>
  )
}