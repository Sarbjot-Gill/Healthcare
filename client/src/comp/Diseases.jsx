import { useState } from "react";
import Navbarr from "./Navbarr"
import axios from "axios";

export default function Diseases() {
  const [input , setInput] = useState()
  const [data , setData] = useState()
  const [load , setLoad] = useState(false)
  const handleClick = async() => {
    await axios.post("http://localhost:3000/sym" , {data: input}).then((res) => {
      console.log(res)
      if(res.data[0].length !== 0){
      setData(res.data)
      setLoad(true)
      console.log(data)
      }else{
        alert("No record found")
      }
    })
  }
  return (
    <div>
      <Navbarr/>
     
      <div className="card shadow">
        <div className="card-body" style={{display:"flex" ,justifyContent:"center" , alignItems:"center",width:"100%" , height:"30vh"}}>
          <input type="text" onChange={(e) =>{
            setInput(e.target.value)
          }} placeholder="enter the disease" color="light-black" style={{backgroundColor:"light-black" ,width:"855px" , height:"50px"}} ></input>
          <button type="button" onClick={handleClick} className="btn btn-outline-dark ms-3" style={{height:"50px" , width:"120px"}}> Search</button>
         </div>
        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item">Symptoms</li>
          <li className="list-group-item">Prevention </li>
          <li className="list-group-item">Medicine</li>
        </ul> */}
      </div>
      {load ? <>  <div className="card mt-2" style={{display:"flex" , alignItems:"center" , textAlign:"center"}}>
        <div className="card-body" style={{width:"60%"}} >
          <h1>{data[0][0].Disease}</h1>
          <p className="mt-4">{data[0][0].Description}</p>
          <h6>Symtoms:</h6>
          <div style={{display:"flex" , justifyContent:"center"}}>
          <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_1}</h6>
          <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_2}</h6>
          <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_3}</h6>
          <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_4}</h6>
          {data[2][0].Symptom_5 !== undefined && <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_5}</h6>}
          {data[2][0].Symptom_6 !== undefined && <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_6}</h6>}
          {data[2][0].Symptom_7 !== undefined && <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_7}</h6>}
          {data[2][0].Symptom_8 !== undefined && <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_8}</h6>}
          </div>
          <div style={{display:"flex" ,  justifyContent:"center"}}>
          {data[2][0].Symptom_9 !== undefined && <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_9}</h6>}
          {data[2][0].Symptom_10 !== undefined && <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_10}</h6>}
          {data[2][0].Symptom_11 !== undefined && <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_11}</h6>}
          {data[2][0].Symptom_12 !== undefined && <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_12}</h6>}
          {data[2][0].Symptom_13 !== undefined && <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_13}</h6>}
          {data[2][0].Symptom_14 !== undefined && <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_14}</h6>}
          {data[2][0].Symptom_15 !== undefined && <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_15}</h6>}
          {data[2][0].Symptom_16 !== undefined && <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_16}</h6>}
          {data[2][0].Symptom_17 !== undefined && <h6 className="px-2 ms-3" style={{border:"solid 1px gray"}}>{data[2][0].Symptom_17}</h6>}
        </div>
        
        <div style={{textAlign:"left" , marginTop:"30px"}}>
        <h6>Prevention:</h6>
        
        <ul style={{marginLeft:"100px"}}>
          <li>
          {data[1][0].Precaution_1}
          </li>
          <li> {data[1][0].Precaution_2}</li>
          <li> {data[1][0].Precaution_3}</li>
          <li> {data[1][0].Precaution_4}</li>
        </ul>
        </div>
        </div>
      </div></> : <>
      <center>
      <img src="https://media.licdn.com/dms/image/C5612AQFW9luBdJF6Gw/article-cover_image-shrink_600_2000/0/1648534888372?e=1723075200&v=beta&t=qhlum-HdzxqQTzfFVRK3Tjw0ytofp5uifJDZ3l5we5Y" style={{height:"60vh" , width:"100%" }}></img>
      </center>
      </>}
    </div>
  );
}