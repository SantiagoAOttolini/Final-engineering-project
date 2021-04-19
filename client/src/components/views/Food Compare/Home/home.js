import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Compare from "../Compare/compare";
import ProductList from "../ProductList/productList";
import * as productActions from "../../../../_actions/product";
import { connect } from "react-redux";
import "./style.css";

function serchingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
    this.serchHandler = this.serchHandler.bind(this);
  }

  serchHandler(event) {
    this.setState({ term: event.target.value });
  }

  componentWillMount() {
    this.props.actions.getProducts();
  }

  render() {
    const { products, actions } = this.props;
    const compareProducts = products.filter((product) => product.compare);

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <div className="titleCompare container d-flex justify-content-center rounded mb-4">
            <h2 className="text-white mb-3">Comparar Alimentos</h2>
            </div>
            
            <div className="mb-4 d-flex justify-content-center ">
              <form>
                <input
                  className="inputSerch form-control form-control-xs text-center"
                  type="text"
                  placeholder="Buscar alimento"
                  onChange={this.serchHandler}
                  value={this.state.term}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="ml-5 mr-5">
          <ProductList
            products={products.filter(serchingFor(this.state.term))}
            compare={actions.compare}
          />
          {compareProducts.length >= 2 && (
            <Compare products={compareProducts} />
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    products: state.product.products,
  }),
  (dispatch) => ({
    actions: bindActionCreators(productActions, dispatch),
  })
)(Home);
