import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  deleteRewards,
  fetchRewards,
} from "../../../../_actions/rewards_actions";
import "./style.css";

class bar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const reward = this.props.reward;
    const Bar = () => (
      <div className="col-md-4" key={reward._id}>
        <div className="mb-5 thumbnail listOfBenefits">
          <img
            className="containerImg rounded mr-2"
            width="248"
            height="180"
            src={`http://localhost:5000/${reward.photo}`}
          ></img>
          <div className="mt-3">
            <button
              className="btnDelete mt-2 btn btn-danger btn-xs"
              onClick={() => this.props.deleteRewards(reward._id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    );
    return (
      <div className="listOfRewards">
        <Bar />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rewards: state.Reward.items,
});

export default connect(mapStateToProps, {
  deleteRewards,
  fetchRewards,
})(bar);
