import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Lead from "./sections/Lead";
import Products from "./sections/Products";
import Analytics from "./sections/Analytics";
function App() {
  return (
    <div className="App">
      <Lead />
      <Products />
      <Analytics />
    </div>
  );
}

export default App;
