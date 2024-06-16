import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./comp/Index";
import Sign from "./comp/Sign";
import Home from "./comp/Home";
import PrivateRoutes from "./PrivateRoutes";
import Diseases from "./comp/Diseases";
import Medicine from "./comp/Medicine";
import BookAppointment from "./comp/BookAppointment";
import AppointmentHistory from "./comp/AppointmentHistory";
import Medicines from "./comp/Medicines";
import Store from "./comp/Store";
import Checkout from "./comp/Checkout";
import Success from "./comp/Success";
import OrderHistory from "./comp/OrderHistory";
import Doctorsignin from "./comp/Doctorsignin";
import Docappointment from "./comp/Docappointment";

export default function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/sign" element={<Sign />} />
    <Route path="/docsign" element={<Doctorsignin />} />
    <Route path="/docapp" element={<Docappointment />} />
    <Route element={<PrivateRoutes />} >
        {/* Add new routes here so that user can only access them once he is logged in and nice nice */}
    <Route path="/home" element={<Home />} />
    <Route path="/di" element={<Diseases />} />
    <Route path="/sym" element={<Medicine />} />
    <Route path="/book" element={<BookAppointment />} />
    <Route path="/med" element={<Medicines />} />
    <Route path="/store" element={<Store />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/bookhis" element={<AppointmentHistory />} />
    <Route path="/success" element={<Success />} />
    <Route path="/orderhis" element={<OrderHistory />} />
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

