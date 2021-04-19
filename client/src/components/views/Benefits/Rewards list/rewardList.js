import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRewards } from "../../../../_actions/rewards_actions";
import Reward from "../Rewards/reward";
import "./style.css";
class RewardList extends Component {
  componentDidMount() {
    this.props.fetchRewards();
  }
  render() {
    const RewardListConst = () => (
      <div className="mr-5 ml-5">
        <div className="container rowBenefit">
          {this.props.rewards &&
            this.props.rewards.map((reward) => (
              <Reward key={reward._id} Reward={reward} />
            ))}
        </div> 
      </div>
    );
    
    return <RewardListConst />;
  }
}

const mapStateToProps = (state) => ({
  rewards: state.Reward.filteredItems,
});

export default connect(mapStateToProps, {
  fetchRewards,
})(RewardList);
