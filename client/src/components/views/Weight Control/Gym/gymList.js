import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGyms } from "../../../../_actions/gym_actions";
import Gym from "../Gym/gym";
import "./style.css"

class GymList extends Component {
  componentDidMount() {
    this.props.fetchGyms();
  }

  render() {
    const GymListConst = () => (
      <div className="mr-5 ml-5">
        <div className="mt-4 d-flex justify-content-center">
          <h3 className="rounded text-white titleDeleteGym mt-2 text-center rounded mb-2">
            Gimnasios
          </h3>
        </div>
        <div className="rowBenefit">
          {this.props.gyms &&
            this.props.gyms.map((gym) => <Gym key={gym._id} Gym={gym} />)}
        </div>
      </div>
    );
    return <GymListConst />;
  }
}

const mapStateToProps = (state) => ({
  gyms: state.Gym.items,
});

export default connect(mapStateToProps, {
  fetchGyms,
})(GymList);
