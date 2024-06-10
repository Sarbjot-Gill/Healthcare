import { useState } from "react";
import Navbarr from "./Navbarr";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

export default function Diseases() {
  const [input, setInput] = useState();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const handleClick = async () => {
    await axios
      .post("http://localhost:3000/sym", { data: input })
      .then((res) => {
        console.log(res);
        if (res.data[0].length !== 0) {
          setData(res.data);
          setLoad(true);
          console.log(data);
        } else {
          alert("No record found");
        }
      });
  };
  return (
    <div>
      <Navbarr />

      <div className="card" style={{ height: "280px", background: "#00796B" }}>
        <div
          className="card-body"
          style={{ width: "100%", height: "30vh", marginLeft: "100px" }}
        >
          <h1 style={{ color: "white" }}>Disease</h1>
          <p style={{ color: "white" }}>
            Easy-to-understand answers about diseases
          </p>
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="enter the disease"
            color="light-black"
            style={{
              backgroundColor: "light-black",
              width: "855px",
              height: "50px",
            }}
          ></input>
          <button
            type="button"
            onClick={handleClick}
            className="btn ms-3"
            style={{
              height: "50px",
              width: "120px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            {" "}
            Search
          </button>
        </div>
        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item">Symptoms</li>
          <li className="list-group-item">Prevention </li>
          <li className="list-group-item">Medicine</li>
        </ul> */}
      </div>
      {load ? (
        <>
          {" "}
          <div
            className="card mt-2"
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div className="card-body" style={{ width: "60%" }}>
              <h1>{data[0][0].Disease}</h1>
              <p className="mt-4">{data[0][0].Description}</p>
              <h6>Symtoms:</h6>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h6 className="px-2 ms-3" style={{ border: "solid 1px gray" }}>
                  {data[2][0].Symptom_1}
                </h6>
                <h6 className="px-2 ms-3" style={{ border: "solid 1px gray" }}>
                  {data[2][0].Symptom_2}
                </h6>
                <h6 className="px-2 ms-3" style={{ border: "solid 1px gray" }}>
                  {data[2][0].Symptom_3}
                </h6>
                <h6 className="px-2 ms-3" style={{ border: "solid 1px gray" }}>
                  {data[2][0].Symptom_4}
                </h6>
                {data[2][0].Symptom_5 !== undefined && (
                  <h6
                    className="px-2 ms-3"
                    style={{ border: "solid 1px gray" }}
                  >
                    {data[2][0].Symptom_5}
                  </h6>
                )}
                {data[2][0].Symptom_6 !== undefined && (
                  <h6
                    className="px-2 ms-3"
                    style={{ border: "solid 1px gray" }}
                  >
                    {data[2][0].Symptom_6}
                  </h6>
                )}
                {data[2][0].Symptom_7 !== undefined && (
                  <h6
                    className="px-2 ms-3"
                    style={{ border: "solid 1px gray" }}
                  >
                    {data[2][0].Symptom_7}
                  </h6>
                )}
                {data[2][0].Symptom_8 !== undefined && (
                  <h6
                    className="px-2 ms-3"
                    style={{ border: "solid 1px gray" }}
                  >
                    {data[2][0].Symptom_8}
                  </h6>
                )}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {data[2][0].Symptom_9 !== undefined && (
                  <h6
                    className="px-2 ms-3"
                    style={{ border: "solid 1px gray" }}
                  >
                    {data[2][0].Symptom_9}
                  </h6>
                )}
                {data[2][0].Symptom_10 !== undefined && (
                  <h6
                    className="px-2 ms-3"
                    style={{ border: "solid 1px gray" }}
                  >
                    {data[2][0].Symptom_10}
                  </h6>
                )}
                {data[2][0].Symptom_11 !== undefined && (
                  <h6
                    className="px-2 ms-3"
                    style={{ border: "solid 1px gray" }}
                  >
                    {data[2][0].Symptom_11}
                  </h6>
                )}
                {data[2][0].Symptom_12 !== undefined && (
                  <h6
                    className="px-2 ms-3"
                    style={{ border: "solid 1px gray" }}
                  >
                    {data[2][0].Symptom_12}
                  </h6>
                )}
                {data[2][0].Symptom_13 !== undefined && (
                  <h6
                    className="px-2 ms-3"
                    style={{ border: "solid 1px gray" }}
                  >
                    {data[2][0].Symptom_13}
                  </h6>
                )}
                {data[2][0].Symptom_14 !== undefined && (
                  <h6
                    className="px-2 ms-3"
                    style={{ border: "solid 1px gray" }}
                  >
                    {data[2][0].Symptom_14}
                  </h6>
                )}
                {data[2][0].Symptom_15 !== undefined && (
                  <h6
                    className="px-2 ms-3"
                    style={{ border: "solid 1px gray" }}
                  >
                    {data[2][0].Symptom_15}
                  </h6>
                )}
                {data[2][0].Symptom_16 !== undefined && (
                  <h6
                    className="px-2 ms-3"
                    style={{ border: "solid 1px gray" }}
                  >
                    {data[2][0].Symptom_16}
                  </h6>
                )}
                {data[2][0].Symptom_17 !== undefined && (
                  <h6
                    className="px-2 ms-3"
                    style={{ border: "solid 1px gray" }}
                  >
                    {data[2][0].Symptom_17}
                  </h6>
                )}
              </div>

              <div style={{ textAlign: "left", marginTop: "30px" }}>
                <h6>Prevention:</h6>

                <ul style={{ marginLeft: "100px" }}>
                  <li>{data[1][0].Precaution_1}</li>
                  <li> {data[1][0].Precaution_2}</li>
                  <li> {data[1][0].Precaution_3}</li>
                  <li> {data[1][0].Precaution_4}</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Row>
            <Col>
              <div
                className="card"
                style={{
                  marginTop: "30px",
                  marginLeft: "30px",
                  width: "650px",
                  height: "300px",
                  backgroundImage:
                    "url(https://assets.mayoclinic.org/content/dam/media/global/images/2023/06/26/symptom-checker-ss-1121602298-416x304.jpg)",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="card-body">
                  <div style={{ marginLeft: "10px" }}>
                    <svg
                      className="mc-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      style={{ height: "30px", marginTop: "20px" }}
                    >
                      <path d="M6,17a3,3,0,1,1,3-3A3,3,0,0,1,6,17Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,6,13Z"></path>
                      <path d="M19,18v4A6,6,0,0,1,7,22V19.05H5V22a8,8,0,0,0,16,0V18Z"></path>
                      <path d="M25,2V4h2v7a7,7,0,0,1-14,0V4h2V2H11v9h0a9,9,0,0,0,18,0V2Z"></path>
                    </svg>

                    <h3 style={{ marginTop: "15px" }}>Symptom Checker</h3>
                    <p
                      style={{
                        fontSize: "15px",
                        marginRight: "300px",
                        marginTop: "20px",
                      }}
                    >
                      Find out what could be causing your symptoms and when to
                      seek care.
                    </p>
                    <p style={{ marginTop: "60px", fontSize: "16px" }}>
                      Check symptoms{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>{" "}
                    </p>
                  </div>
                  {/* <img src="https://assets.mayoclinic.org/content/dam/media/global/images/2023/06/26/symptom-checker-ss-1121602298-416x304.jpg" style={{marginLeft:"200px",height:"300px" , width:"500px" }}></img> */}
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="card"
                style={{ marginTop: "30px", width: "270px", height: "60px" }}
              >
                <div className="card-body">
                  <Row>
                    <Col xs="2"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    // style={{marginLeft:"20px",marginTop:"20px"}}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14.84 16.26C17.86 16.83 20 18.29 20 20v2H4v-2c0-1.71 2.14-3.17 5.16-3.74L12 21zM8 8h8v2a4 4 0 0 1-4 4a4 4 0 0 1-4-4zm0-1l.41-4.1a1 1 0 0 1 1-.9h5.19c.51 0 .94.39.99.9L16 7zm4-4h-1v1h-1v1h1v1h1V5h1V4h-1z"
                    />
                  </svg></Col>
                  <Col xs="8"><p >Find a Doctor</p></Col>
                  <Col><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg></Col>
                  </Row>
                  
                  
                </div>
              </div>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}