import React, { Component } from "react";
import { Link } from "react-router-dom";

//Container / Branch / View Pattern
export default class Reward extends Component {
  render() {
    const reward = this.props.Reward;
    const RewardFucntion = () => (
      <div className="col-md-4" key={reward._id}>
        <div className="mt-5 mb-5 thumbnail listOfBenefits">
          <img
            className="photoReward rounded"
            src={`http://localhost:5000/${reward.photo}`}
            alt="photo"
            width="250"
            height="200"
          />
          <div className="mt-4">
            <Link to={`/Reward/${reward._id}`}>
              <button className="ml-3 btn btn-info  text-white rounded h5">
                Ver beneficios disponibles
              </button>
            </Link>
          </div>
        </div>
      </div>
    );

    return <RewardFucntion />;
  }
}
