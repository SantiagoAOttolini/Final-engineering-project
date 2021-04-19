import React, { Component } from "react";
import Food from "./food";
import { connect } from "react-redux";
import { getProducts } from "../../../../_actions/product";
import "./style.css";

class foodList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <>
        <div className="mt-4 d-flex justify-content-center">
          <h3 className="titleDelete text-center rounded mb-2">
            Borrar alimentos
          </h3>
        </div>
        <div className="container py-5">
          <div className="rowFood">
            {this.props.products &&
              this.props.products.map((product) => (
                <Food key={product._id} product={product} />
              ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, {
  getProducts,
})(foodList);
