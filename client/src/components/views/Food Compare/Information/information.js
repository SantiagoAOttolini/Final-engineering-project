import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { getProducts } from "../../../../_actions/product";

class Informacion extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      product: {},
      id,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      await this.props.getProducts();
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate() {
    if (!this.state.product.name && this.props.Products) {
      const detailProduct = this.props.Products.find(
        (x) => x._id.toString() === this.state.id.toString()
      );

      if (detailProduct) {
        this.setState({
          product: detailProduct,
          loading: false,
        });
      }
    }
  }
  render() {
    const product = this.state.product;
    const id = this.state.product.id;
    const adventages = product.adventages && product.adventages.split("-");

    return (
      <div className="infoAlimentos">
        <div className="mt-5 d-flex justify-content-center">
          <h1 className="titleName text-center rounded">{product.name}</h1>
        </div>
        <div className="mb-5 mt-2 d-flex justify-content-center">
          <img src={`http://localhost:5000/${product.photo}`}></img>
        </div>
        <div className="textDescription container d-flex justify-content-center">
          <h5>{product.description}</h5>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <h4 className="titleAdventages text-center rounded">Ventajas</h4>
        </div>
        <div className="textAdventages container d-flex justify-content-center">
        <ul>
            {adventages &&
              adventages.map((item, index) => {
                return (
                  <li className='h5 text-dark' key={index}>
                    {item}
                  </li>
                )
              })}
          </ul>

         {/* <h5>{adventages}</h5> */}
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <h4 className="titleCategory text-center rounded">Categoria</h4>
        </div>
        <div className="d-flex justify-content-center">
          <h5>{product.Category}</h5>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  Products: state.product.products,
});

export default connect(mapStateToProps, {
  getProducts,
})(Informacion);
