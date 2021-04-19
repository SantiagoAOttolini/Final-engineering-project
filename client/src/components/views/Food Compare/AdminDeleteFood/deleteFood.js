import React, { Component } from "react";
import FoodList from "./foodList";
import { connect } from "react-redux";
import { getProducts } from "../../../../_actions/product";

class deleteFood extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <>
        <FoodList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, {
  getProducts,
})(deleteFood);
