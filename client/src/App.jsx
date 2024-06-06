import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./comp/Index";
import Sign from "./comp/Sign";
import Home from "./comp/Home";
import PrivateRoutes from "./PrivateRoutes";
import Diseases from "./comp/Diseases";
import Medicine from "./comp/Medicine";

export default function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/sign" element={<Sign />} />
    <Route path="/di" element={<Diseases />} />
    <Route path="/sym" element={<Medicine />} />
    <Route element={<PrivateRoutes />} >
        {/* Add new routes here so that user can only access them once he is logged in and nice nice */}
    <Route path="/home" element={<Home />} />
    
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}
