import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import Navbarr from "./Navbarr"
export default function OrderHistory() {
    const [data , setData] = useState(false)
    useEffect(()=>{
      axios.post("http://localhost:3000/orderhis").then((res) => {
        setData(res.data)
      })
    },[])
  return (
    <div>
    <Navbarr />
    {!data ? <><h1>none</h1></> :<>
    <center>
    <h1 style={{marginTop:"40px"}}>Order History</h1></center>
    <div style={{display:"flex" , justifyContent:"center" ,alignItems:"center"}}>
      <div>
        <Table bordered hover striped="columns"  responsive="xl">
          <thead>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2" >Product Name</th>
            <th className="px-4 py-2" >Name</th>
            <th className="px-4 py-2" >Address</th>
            <th className="px-4 py-2" >City</th>
            <th className="px-4 py-2" >House</th>
          </thead>
          {data.map((e)=> {
            return(
              <>
              <tr>
                <td className="px-4 py-2">{e.price}</td>
                <td className="px-4 py-2">{e.pname}</td>
                <td className="px-4 py-2">{e.first} {e.last}</td>
                <td className="px-4 py-2">{e.address}</td>
                <td className="px-4 py-2">{e.city}</td>
                <td className="px-4 py-2">{e.house}</td>
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
