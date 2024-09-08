import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Join from './pages/Join.jsx';
import Navbar from './Navbar.jsx';
import "./index.css";
import Agricultre from "./pages/Agricultre.jsx";
import SoilManagement from "./pages/SoilManagement.jsx";
import UpcomingProducts from "./pages/UpcomingProducts.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Contact from "./pages/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/agriculture" element={<Agricultre />} />
        <Route path="/soilmanagement" element={<SoilManagement />} />
        <Route path="/Upcoming" element={<UpcomingProducts />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
