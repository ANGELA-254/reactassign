import React from "react";
import Navbar from "./components/navigationbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/mainsection";
import Footer from "./components/footer";
import"bootstrap/dist/css/bootstrap.min.css";


const App = ()=> {
  return (
    <div>
      <h2>Elles Schools</h2>
      <Navbar />

      <Main />
      <Footer />
    </div>
   
   
  );
}

export default App;
