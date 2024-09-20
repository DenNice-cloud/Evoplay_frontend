import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutUs from "./components/About Us";
import Services from "./components/Services";
import ContactUs from "./components/Contact Us";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
