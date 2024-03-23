import React from "react";
import Navebar from './components/Neavbar'
import Footer from "./components/Footer";
function App() {
  return (
    <>
    {/* Navbar */}
      <Navebar/>
      {/* contener */}
      <h1>Hello, world!</h1>
      <p>Welcome to your new single-spa application.</p>
      {/* Footer */}
      <Footer/>
    </>
  );
}

export default App;
