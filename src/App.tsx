import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Lead from "./sections/Lead";
import Products from "./sections/Products";
import Analytics from "./sections/Analytics";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Lead />
      <Products />
      <Analytics />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
