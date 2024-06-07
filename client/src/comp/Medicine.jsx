import { useState } from "react";
import Navbarr from "./Navbarr";
import axios from "axios";
import { FaHandHoldingMedical } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Medicine() {
    const [input , setInput] = useState()
    const [data , setData] = useState() 
    const [load , setLoad] = useState(false)
    const [loading , setLoading] = useState(false)
    const [index , setIndex] = useState()
    const handleClick = async() => {
      setLoad(false)
      setLoading(true)
        let arr = {sym : input}
      await axios.post("http://localhost:3000/ex" , arr).then((res) => {
        console.log(res.data)
        if(res.data[0].length !== 0){
        setData(res.data)
        setIndex(res.data[0])
        setLoad(true)
        setLoading(false)
      }else{
        alert("no record found")
        setLoad(true)
      setLoading(false)
      }
      })
    }
  return (
    <div>
      <div>
        <Navbarr />
      </div>
      <center>
        <div className="card shadow">
          <div className="card-body" style={{ marginTop: "70px", marginBottom:"70px" }}>
            <input
              type="text"
              placeholder="enter the Symptoms"
              color="light-black"
              onChange={(e) =>{
                setInput(e.target.value)
              }}
              style={{
                marginRight: "10px",
                backgroundColor: "light-black",
                width: "855px",
                height: "50px",
                
                
              }}
            ></input>
            <button
              type="button"
              className="btn btn-outline-dark px-4"
              onClick={handleClick}
              style={{ height: "50px",
              
               }}
            >
              Search
            </button>
            </div>
            </div>
        
        </center>
      {load ? <>
      {index.map((e,i) => {
        return(
            <>

             <div className="card shadow" style={{ marginTop: "30px", backgroundColor:"#f0f0f0" }}>
        <div className="card-body" style={{ marginTop: "10px"}}>
          <h1>{e.Disease}</h1>
          <p>{e.Description}</p>
          <h6>Symtoms:</h6>
          <div style={{display:"flex"}}>
          <h6 className="px-2 " style={{border:"solid 1px gray"}}>{data[2][i].Symptom_1}</h6>
          <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_2}</h6>
          <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_3}</h6>
          <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_4}</h6>
          {data[2][i].Symptom_5 !== undefined &&  <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_5}</h6>}
          {data[2][i].Symptom_6 !== undefined &&  <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_6}</h6>}
          {data[2][i].Symptom_7 !== undefined &&  <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_7}</h6>}
          {data[2][i].Symptom_8 !== undefined &&  <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_8}</h6>}
          {data[2][i].Symptom_9 !== undefined &&  <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_9}</h6>}
          {data[2][i].Symptom_10 !== undefined &&  <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_10}</h6>}
          {data[2][i].Symptom_11 !== undefined &&  <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_11}</h6>}
          </div>
          <div style={{display:"flex"}}>
          {data[2][i].Symptom_12 !== undefined &&  <h6 className="px-2" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_12}</h6>}
          {data[2][i].Symptom_13 !== undefined &&  <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_13}</h6>}
          {data[2][i].Symptom_14 !== undefined &&  <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_14}</h6>}
          {data[2][i].Symptom_15 !== undefined &&  <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_15}</h6>}
          {data[2][i].Symptom_16 !== undefined &&  <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_16}</h6>}
          {data[2][i].Symptom_17 !== undefined &&  <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][i].Symptom_17}</h6>}
        </div>
        </div>
      </div>
            </>
        )
      })}
      </> : <>
      {loading ? <>
        <div className="card shadow" style={{ marginTop: "30px", backgroundColor:"#f0f0f0" }}>
        <div className="card-body" style={{ marginTop: "20px"}}>
          <h1 className="card-text placeholder-glow">
          <span className="placeholder col-3"></span>
          </h1>
          <p className="card-text placeholder-glow">
          <span className="placeholder col-12"></span>
          <span className="placeholder col-10"></span>
          <span className="placeholder col-8"></span>
          </p>
          <p className="card-text placeholder-glow">
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          </p>
        </div>
      </div>
      <div className="card shadow" style={{ marginTop: "30px", backgroundColor:"#f0f0f0" }}>
        <div className="card-body" style={{ marginTop: "20px"}}>
          <h1 className="card-text placeholder-glow">
          <span className="placeholder col-3"></span>
          </h1>
          <p className="card-text placeholder-glow">
          <span className="placeholder col-12"></span>
          <span className="placeholder col-10"></span>
          <span className="placeholder col-8"></span>
          </p>
          <p className="card-text placeholder-glow">
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          <span className="placeholder col-1 mx-1"></span>
          </p>
        </div>
      </div>
      </> : <>
      {/* <IconContext.Provider value={{style : {height:"200px" , width:"200px"}}}>
      <FaHandHoldingMedical />
      </IconContext.Provider> */}
      <center>
      <img src="https://media.licdn.com/dms/image/C5612AQFW9luBdJF6Gw/article-cover_image-shrink_600_2000/0/1648534888372?e=1723075200&v=beta&t=qhlum-HdzxqQTzfFVRK3Tjw0ytofp5uifJDZ3l5we5Y" style={{height:"60vh" , width:"100%" }}></img>
      </center>
       </>}
     
      </>}
      </div>
  );
}