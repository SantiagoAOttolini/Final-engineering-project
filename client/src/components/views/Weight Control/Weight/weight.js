import React, { Component } from "react";
import "./style.css";
import Range from "../Range/range";
import Departure from "../Departure/departure";
import { Link } from "react-router-dom";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 175,
      weight: 73,
      bmi: 22.49,
      bmiClass: "Normal",
    };
  }

  heightChange = (height) => {
    this.setState({ height: height }, this.setBmi);
  };

  weightChange = (weight) => {
    this.setState({ weight: weight }, this.setBmi);
  };

  setBmi = () => {
    let bmi = (
      (this.state.weight / this.state.height / this.state.height) *
      10000
    ).toFixed(2);
    this.setState({ bmi: bmi, bmiClass: this.getBmiClass(bmi) });
  };

  getBmiClass = (bmi) => {
    if (bmi < 18.5) return "Bajo peso";
    if (bmi >= 18.5 && bmi <= 24.9) return "Normal";
    if (bmi >= 25 && bmi <= 29.9) return "Exceso de peso";
    if (bmi >= 30) return "Obeso";
  };

  render() {
    return (
      <div>
        <div className="containerWeight Index">
          <h1 className="text-center">Calculadora de BMI</h1>
          <form>
            <div>
              <label>Altura</label>
              <Range value={this.state.height} onChange={this.heightChange} />
            </div>
            <div>
              <label>Peso</label>
              <Range value={this.state.weight} onChange={this.weightChange} />
            </div>
          </form>
          <Departure data={this.state} />
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <Link to={"/gym"}>
            <button className="btn btn-info">Gimnasios asociados</button>
          </Link>
        </div>
        <br></br>
      </div>
    );
  }
}

export default Index;
