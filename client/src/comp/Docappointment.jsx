import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
export default function Docappointment() {
    const [data , setData] = useState(false)
   function handleStart(){
    axios.post("http://localhost:3000/dochis").then((res) => {
        setData(res.data)
      })
   }
    useEffect(()=>{
      handleStart()
    },[])
    return (
      <div>
        {!data ? <><h1>none</h1></> :<>
        <center>
        <h1 style={{marginTop:"40px"}}>Appointment Data</h1></center>
        <div style={{display:"flex" , justifyContent:"center" ,alignItems:"center"}}>
          <div>
            <Table bordered hover striped="columns"  responsive="xl">
              <thead>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2" >Name</th>
                <th className="px-4 py-2" >Doctor</th>
                <th className="px-4 py-2" >Time</th>
                <th className="px-4 py-2" >Email</th>
                <th className="px-4 py-2" >Phone</th>
                <th className="px-4 py-2">Status</th>
              </thead>
              {data.map((e)=> {
                return(
                  <>
                  <tr>
                    <td className="px-4 py-2">{e.date}</td>
                    <td className="px-4 py-2">{e.name}</td>
                    <td className="px-4 py-2">{e.doctor}</td>
                    <td className="px-4 py-2">{e.time}</td>
                    <td className="px-4 py-2">{e.email}</td>
                    <td className="px-4 py-2">{e.phone}</td>
                    <td className="px-4 py-2">{e.status==="upcoming" ? <p style={{borderRadius:"10px" , backgroundColor:"green" , color:"white"}}>Upcoming</p> : 
                     <p style={{borderRadius:"10px" , backgroundColor:"red" , color:"white"}}>Cancelled</p>}</td>
                     {e.status==="upcoming" &&   <td className="px-4 py-2"><button onClick={() => {
                        console.log(e._id)
                        axios.post("http://localhost:3000/appointdel" , {_id :e._id}).then((z) => {
                            if(z.data === "success"){
                                handleStart()
                            }
                        })
                     }} className="btn" style={{backgroundColor:"red" , color:"white" , marginTop:"-15px"}}>Cancel</button></td>}
                   
                  </tr>
                  </>
                )
              })}
            </Table>
          </div>
        </div>
        </>}
      </div>
    )
  }
  