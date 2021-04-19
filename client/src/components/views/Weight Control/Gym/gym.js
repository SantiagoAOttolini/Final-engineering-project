import React, { Component } from "react";
import { Link } from "react-router-dom";

//Container / Branch / View Pattern
export default class Gym extends Component {
  render() {
    const gym = this.props.Gym;
    const Gym = () => (
      <div className="d-flex justify-content-center">
        <div className="mt-5 mb-5  listOfBenefits">
          <img
            className="containerImgGym rounded"
            src={`http://localhost:5000/${gym.photo}`}
            alt="photo"
            width="250"
            height="200"
          />
          <div className="mt-4 d-flex justify-content-center">
            <Link to={`/gym/${gym._id}`}>
              <button className="ml-3 btn btn-info  text-white rounded h5">
                Ver informacion
              </button>
            </Link>
          </div>
        </div>
      </div>
    );

    return <Gym />;
  }
}
