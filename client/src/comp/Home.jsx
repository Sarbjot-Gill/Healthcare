import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    function logout(){
        fetch('http://127.0.0.1:3000/logout', 
    { method : "get"})
    navigate("/")
    }
  return (
    <div>
        <button onClick={logout}>Logout</button>
    </div>

  )
}
