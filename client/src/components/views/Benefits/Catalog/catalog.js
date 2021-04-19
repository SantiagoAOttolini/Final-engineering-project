import React, { Component } from "react";
import RewardList from "../Rewards list/rewardList";
import Filter from "../Filter/filter";
import { connect } from "react-redux";
import { filterRewardsByCategory } from "../../../../_actions/rewards_actions";
import "./style.css"

//Container / Branch / View Pattern
const TitleCatalog = () => (
  <div className="containerCatalog container mb-5 rounded d-flex justify-content-center mt-5">
    <h2 className="text-white">Catalogo de locales</h2>
  </div>
);
const ContainerFilter = () => (
  <div className="filter">
    <Filter />
  </div>
);
const ContainerReward = () => (
  <div>
    <RewardList />
  </div>
);

const CatalogView = () => {
  return (
    <div>
      <div>
        <TitleCatalog />
      </div>
      <div>
        <ContainerFilter />
      </div>
      <div>
        <ContainerReward />
      </div>
    </div>
  );
};

class Catalog extends Component {
  render() {
    return <CatalogView />;
  }
}

const mapStateToProps = (state) => ({
  rewards: state.Reward.items,
});

export default connect(mapStateToProps, {
  filterRewardsByCategory,
})(Catalog);
