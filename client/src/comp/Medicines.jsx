import { Col, Row } from "react-bootstrap";
import Style from "../css/medicine.module.css";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Navbarr from "./Navbarr";


export default function Medicines() {
  let navigate = useNavigate();
  let loction = useLocation()
  let data = loction.state
  let text = data['Side Effects'][0]
  let arr = text.split(",")
  console.log(data)
  return (
    <>
    <Navbarr />
    <div>
      <div style={{ marginTop: "50px" }}>
        <Row style={{ margin: "20px" }}>
          <Col xs="4">
            <center>
              <img
                style={{ width: "300px" }}
                src={data.img}
              ></img>
            </center>
          </Col>
          <Col xs="5">
            <h2 style={{ fontWeight: "bold" }}>{data.name}</h2>
            <br></br>
            <p className={Style.p1}>Composition</p>
            <p className={Style.p2}>FOLIC ACID-5MG </p>
            <p className={Style.p1}>Manufacturer/Marketer</p>
            <p className={Style.p2}>{data.Manufacturer}</p>
            <p className={Style.p1}>Consume Type</p>
            <p className={Style.p2}>{data.Type}</p>
            <p className={Style.p1}>Return Policy</p>
            <p className={Style.p2}>Returnable</p>
          </Col>

          <Col xs="3">
            <div className="card" style={{ marginTop: "50px" }}>
              <div className="card-body" style={{ height: "240px" }}>
                <p style={{ fontWeight: "bold" }}>MRP {data.rs}</p>
                <hr></hr>
                <Row>
                  <Col xs="1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-truck"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                    </svg>
                  </Col>
                  <Col>
                    <p style={{ fontSize: "13px", marginTop: "5px" }}>
                      DELIVERY BY
                    </p>
                  </Col>
                  <Col xs="6">
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        marginTop: "4px",
                      }}
                    >
                      Today 8:00 PM
                    </p>
                  </Col>
                </Row>
                <hr style={{ margin: "0%" }}></hr>
                {/* <div classna="btn-group">
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Large button
  </button>
  <ul class="dropdown-menu">
    <p>1</p>
  </ul>
  </div> */}
                <button
                  type="button"
                  className="btn btn-lg"
                  style={{
                    backgroundColor: "#00463e",
                    color: "white",
                    width: "240px",
                    marginTop: "30px",
                  }} 
                  onClick={() => {
                    navigate("/checkout" , {state:data})
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <hr style={{ color: "gray" }}></hr>
        <div style={{ marginLeft: "30px", display: "flex" }}>
          <p className={Style.p3} style={{ color: "#00463e" }}>
            PRODUCT DETAILS
          </p>
          <p className={Style.p3} style={{ color: "gray" }}>
            |
          </p>
          <p className={Style.p3} style={{ color: "#00463e" }}>
            SAFETY ADVICE
          </p>
          <p className={Style.p3} style={{ color: "gray" }}>
            |
          </p>
          <p className={Style.p3} style={{ color: "#00463e" }}>
            FAQS
          </p>
        </div>
        <hr style={{ color: "gray", margin: "0%" }}></hr>
      </div>

      <div className="mt-4" style={{ marginLeft: "20px" }}>
        <h3>Product Details</h3>
        <h5 style={{ marginTop: "30px" }}>About Folvite Tablet</h5>
        <p style={{ marginRight: "70px" }}>
        {data.desc}
        </p>
        <h5 style={{ marginTop: "30px" }}>Uses of Folvite Tablet</h5>
        <p>{data.uses}</p>
        <h5 style={{ marginTop: "30px" }}>Directions for Use</h5>
        <p>
          {data.directions}
        </p>
        <h5 style={{ marginTop: "30px" }}> Side Effects of Folvite Tablet</h5>
        <ul>
          {/* <li>Nausea</li>
          <li>Loss of appetite</li>
          <li>Bloating</li>
          <li>Flatulence (gas)</li>
          <li>Bitter or unpleasant taste in your mouth</li>
          <li>Feeling excited or irritable</li> */}
          {arr.map((x) => {
            return(
              <>
              <li>{x}</li>
              </>
            )
          })}
        </ul>
        <hr style={{ marginTop: "30px" }}></hr>
        <h3>In-depth Information</h3>
        <h5 style={{ marginTop: "30px" }}>Drug Warnings</h5>
        <p>If you are allergic to Folvite Tablet or any other medicines, please tell your doctor. Avoid taking Folvite Tablet if you have cancer. Folvite Tablet should be used with caution in children and only if recommended by a doctor. If you are breastfeeding, please consult a doctor before using Folvite Tablet . If you have pernicious anaemia (anaemia due to lack of vitamin B12), a tumour or if you are receiving a stent in the heart or undergoing haemodialysis due to kidney failure, inform your doctor before taking Folvite Tablet . You are recommended to maintain a time gap of a minimum of 2 hours between taking Folvite Tablet and indigestion remedies such as antacids containing magnesium or aluminium and edible clay. Inform your doctor if you are allergic to any sugars as Folvite Tablet contains lactose. </p>
        <h5 style={{ marginTop: "30px" }}>Drug-Drug Interactions Checker List</h5>
        <ul>
          <li>PHENOBARBITAL</li>
          <li>PRIMIDONE</li>
          <li>PHENYTOIN</li>
          <li>TRIMETHOPRIM</li>
          <li>CHOLESTYRAMINE</li>
          <li>SULFASALAZINE</li>
        </ul>
        <h5 style={{ marginTop: "30px" }}>Habit Forming</h5>
        <p>No</p>
        <h5 style={{ marginTop: "30px" }}>Diet & Lifestyle Advise</h5>
        <ul>
          <li>Eat a healthy diet, especially green leafy vegetables, and do regular physical exercise.</li>
          <li>Limit junk food items from outside and stick to freshly prepared home-cooked meals.</li>
          <li>Eat cabbage, spinach, broccoli, asparagus, kale, brussels sprouts, lentils, peas, and beans. Also include beef and yeast extracts, poultry, liver, shellfish, and pork.</li>
          <li>Drink plenty of fluids to stay hydrated.</li>
          <li>Avoid consumption of alcohol.</li>
        </ul>
        <h5 style={{ marginTop: "30px" }}>Special Advice</h5>
        <p style={{marginBottom:"50px"}}>You are recommended to maintain a time gap of a minimum of 2 hours between taking Folvite Tablet and indigestion remedies such as antacids containing magnesium or aluminum and edible clay.</p>

      </div>
      <Footer/>
      </div>
    </>
  );
}