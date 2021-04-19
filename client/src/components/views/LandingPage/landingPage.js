import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ParticlesBg from "particles-bg";
import "./style.css";

//Container / Branch / View Pattern
const LandingPage = () => (
  <div>
    <ParticlesBg type="cobweb" bg={true} />
    <ParticlesBg type="cobweb" bg={true} />
    <ParticlesBg type="cobweb" bg={true} />
    <CssBaseline />
    <div className="main">
      <span className="text1 container d-flex justify-content-center mt-5 display-1">Bienvenidos</span>
      <span className="text2 text-info">Arte Culinario</span>
    </div>
  </div>
);

class Menu extends Component {
  render() {
    return <LandingPage />;
  }
}

export default Menu;
