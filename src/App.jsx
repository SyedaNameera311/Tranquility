import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/navbar";
import Service from "./Components/service";
import Home from "./Components/home";
import About from "./Components/about";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import Signup from "./Components/signup";

function App() {
return (
<>
<Router>
<Navbar />

<Routes>   
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />   
      <Route path="/about" element={<About />} />   
      <Route path="/contact" element={<Contact />} />   
      <Route path="/service" element={<Service />} />   
      <Route path="/signup" element={<Signup />} />   
    </Routes>   
    <Footer/>   
  </Router>    
</>

);
}

export default App;