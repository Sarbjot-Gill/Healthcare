import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./comp/Index";
import Sign from "./comp/Sign";
import Home from "./comp/Home";
import PrivateRoutes from "./PrivateRoutes";

export default function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/sign" element={<Sign />} />
    
    <Route element={<PrivateRoutes />} >
        {/* Add new routes here so that user can only access them once he is logged in and nice nice */}
    <Route path="/home" element={<Home />} />
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

