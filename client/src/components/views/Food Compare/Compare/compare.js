import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Compare = ({ products }) => (
  <div className="row compare">
    <div className="col-12 mt-5 text-center">
      <table className="table" id="tablaAlimentos">
        <thead className="thead-default">
          <tr>
            <th />
            {products.map((product) => (
              <th key={product.id}>{product.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="valor">
            <th scope="row">Valor energetico (g)</th>
            {products.map((product) => (
              <td key={product.id} className="text-center">
                {product.valor}
              </td>
            ))}
          </tr>
          <tr className="carbs">
            <th scope="row">Carbohidratos (g)</th>
            {products.map((product) => (
              <td key={product.id} className="text-center">
                {product.carbs}
              </td>
            ))}
          </tr>
          <tr className="protein">
            <th scope="row">Proteinas (g)</th>
            {products.map((product) => (
              <td key={product.id} className="text-center">
                {product.protein}
              </td>
            ))}
          </tr>
          <tr className="grease1">
            <th scope="row">Grasas insaturadas (g)</th>
            {products.map((product) => (
              <td key={product.id} className="text-center">
                {product.grease1}
              </td>
            ))}
          </tr>
          <tr className="grease2">
            <th scope="row">Grasas saturadas (g)</th>
            {products.map((product) => (
              <td key={product.id} className="text-center">
                {product.grease2}
              </td>
            ))}
          </tr>
          <tr className="grease3">
            <th scope="row">Grasas trans (g)</th>
            {products.map((product) => (
              <td key={product.id} className="text-center">
                {product.grease3}
              </td>
            ))}
          </tr>
          <tr className="fiber">
            <th scope="row">Fibra alimentaria (g)</th>
            {products.map((product) => (
              <td key={product.id} className="text-center">
                {product.fiber}
              </td>
            ))}
          </tr>
          <tr className="sodium">
            <th scope="row">Sodio (mg)</th>
            {products.map((product) => (
              <td key={product.id} className="text-center">
                {product.sodium}
              </td>
            ))}
          </tr>
          <tr className="information">
            <th scope="row">Informacion</th>
            {products.map((product) => (
              <td key={product.id} className="text-center">
                {product.information}{" "}
                <div className="btn btn-info">
                  <Link
                    className="informacionAlimento text-light"
                    to={`/information/${product._id}`}
                  >
                    {" "}
                    Ver informacion
                  </Link>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <ReactHTMLTableToExcel
          className="btn btn-success"
          table="tablaAlimentos"
          filename="Planilla"
          sheet="pagina 1"
          buttonText="Generar planilla"
        />
      </div>
    </div>
  </div>
);

export default Compare;
