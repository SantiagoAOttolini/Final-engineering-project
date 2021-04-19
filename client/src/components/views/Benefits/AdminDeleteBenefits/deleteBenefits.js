import React, { Component } from "react";
import BarList from "./barList";
import { connect } from "react-redux";
import { fetchRewards } from "../../../../_actions/rewards_actions";

class deleteFood extends Component {
  componentDidMount() {
    this.props.fetchRewards();
  }
  render() {
    return (
      <>
        <BarList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  rewards: state.Reward.items,
});

export default connect(mapStateToProps, {
  fetchRewards,
})(deleteFood);
