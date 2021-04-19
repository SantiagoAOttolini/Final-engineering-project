import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { Paper, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import RadioButtonField from "./radiobuttonfield";
import WeightEntry from "./weightentry";
import { CONSTANTS } from "../../Constants/constants";
import { connect } from "react-redux";
import { get_bmr } from "../../../../../_actions/analyzer_actions";

class HomePage extends React.Component {
  /*
  this can be defaulted to have the radio button 'lit'
  */
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      level: "",
      bodyWeight: "",
      height: "",
      units: "",
      totalCalories: "0",
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    console.log(name, value);
    console.log(typeof value);
  };

  validationCalories = () => {
    if (this.state.totalCalories === 0) {
      alert("Las calorias no pueden ser 0");
    }
  };

  calculateScore = () => {
    if (this.state.weight === "") return;

    var weight = Number(this.state.bodyWeight);
    var height = Number(this.state.height);
    var age = Number(this.state.age);

    /* Check inputs to make sure they are valid */
    if (isNaN(weight)) return;

    /* Both calculations need to be done in kg, so we convert*/
    if (this.state.units === "pounds") {
      weight = this.state.bodyWeight * 0.453592;
    }

    /**
     * BMR Calories
     */
    var constants = CONSTANTS[this.state.gender][this.state.level];
    var bmr =
      constants[0] +
      constants[1] * weight +
      constants[2] * height -
      constants[3] * age;

    bmr = Math.round(bmr * 100) / 100;
    let stringScore;
    if (bmr > 3900) {
      stringScore = "u sure?";
    } else if (isNaN(bmr) || bmr < 0) {
      stringScore = "0.05";
    } else {
      stringScore = bmr.toString();
    }

    this.setState({
      totalCalories: stringScore,
    });
    this.props.get_bmr(stringScore);
  };

  render() {
    const { classes } = this.props;

    return (
      //here we control the displaying of our calculations
      <div>
        <div className="mt-4"></div>
        <div className=" ml-4 mr-4 mb-5">
          <Paper className="asd">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography align="center" variant="h6" color="inithial">
                  {"Calorias totales:"}
                </Typography>
                <Typography
                  align="center"
                  variant="h4"
                  color="primary"
                  onChange={() => {
                    get_bmr();
                  }}
                >
                  {this.state.totalCalories}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <RadioButtonField
          handleChange={this.handleChange}
          gender={this.state.gender}
          level={this.state.level}
          units={this.state.units}
        />

        <WeightEntry
          handleChange={this.handleChange}
          bodyWeight={this.state.bodyWeight}
          height={this.state.height}
          age={this.state.age}
        />
        <div className="d-flex justify-content-center mt-4">
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => {
              this.calculateScore();
            }}
          >
            Calcular
          </Button>
        </div>

        <div className="d-flex justify-content-center btnLost mt-4">
          <button
            onClick={() => {
              this.validationCalories();
            }}
            className="w-50 mb-2 btn btn-info"
          >
            <Link
              className="text-light"
              to={{
                pathname: "/Bulking",
                aboutProps: this.props.Bmr,
              }}
            >
              Aumentar masa muscular
            </Link>
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button className="w-50 btn btn-info">
            <Link
              className="text-light"
              to={{
                pathname: "/cutting",
                aboutProps: this.props.Bmr,
              }}
            >
              Reducir grasa
            </Link>
          </button>
        </div>
        <br></br>
      </div>
    );
  }
}

HomePage.propTypes = {
  handleChange: PropTypes.func,
  calculateScore: PropTypes.func,
};

const mapStateToProps = (state) => ({
  Bmr: state.analyzer.bmr,
});

export default connect(mapStateToProps, { get_bmr })(HomePage);
