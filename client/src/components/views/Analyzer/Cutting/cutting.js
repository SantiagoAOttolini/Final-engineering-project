import React, { Component } from "react";
import Chart from "../Chart/chart";
import Highcharts from "highcharts";
import MiniChart from "../MiniChart/mini_chart";
import * as analyzerActions from "../../../../_actions/analyzer_actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Cutting extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.actions.getProducts();
  }
  render() {
    const { products } = this.props;
    const bmrCalories = this.props.location.aboutProps;
    const options = {
      title: {
        text: "Calorias diarias",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            style: {
              color:
                (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                "black",
            },
          },
        },
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      series: [
        {
          name: "Nutrients",
          colorByPoint: true,
          data: [
            {
              name: "Carbs",
              y: 33,
            },
            {
              name: "Proteinas",
              y: 56,
              sliced: true,
              selected: true,
            },
            {
              name: "Grasas",
              y: 7,
            },
            {
              name: "Vitaminas y minerales",
              y: 4,
            },
          ],
        },
      ],
    };

    const foodItems = products.map((food, index) => {
      return (
        <div
          className="col-xs-12 col-sm-6 col-md-4 col-lg-3 go-eat-mini-chart thumbnail"
          key={index}
        >
          <MiniChart
            name={food.name}
            protein={parseInt(food.protein, 10)}
            carbohydrates={parseInt(food.carbs, 10)}
            fats={parseInt(food.grease1, 10)}
          />
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-4 col-lg-6">
            <h3>Ingesta diaria (Reduccion de grasas)</h3>
            <p>
              {" "}
              Cuando se trata de maximizar las ganancias de m??sculo magro
              mientras se reduce la grasa corporal muy r??pidamente, debe seguir
              una dieta estricta y un r??gimen de entrenamiento.{" "}
            </p>
            <p>
              {" "}
              Esto implica hacer un seguimiento de sus macros y el momento en
              que consume sus carbohidratos, prote??nas y grasas saludables.{" "}
            </p>
            <p>
              {" "}
              Este art??culo le proveera informacion con el objetivo de que usted
              mantenga toda su masa muscular magra mientras pierde grasa
              corporal lentamente. Alcanzar?? su punto m??ximo en aproximadamente
              8 semanas despues de un h??bito alimenticio.{" "}
            </p>
            <p>
              {" "}
              Si tiene alrededor del 12-14 % de grasa corporal, espere llegar a
              menos del 10 % de grasa corporal mientras mantiene toda su masa
              muscular magra despu??s de 8 semanas de este r??gimen. Para lograr
              saber la cantidad de masa corporal de manera exacta previamente
              deber?? someterse a una antropometria realizada por un profesional.{" "}
            </p>
            <p>
              {" "}
              Si tiene alrededor del 10 % de grasa corporal, se estima que
              despu??s de 8 semanas de seguir un r??gimen lograr?? un resultado
              satisfactorio.{" "}
            </p>
            <br />
            <p>
              {" "}
              Dado que ha calculado las <b> calor??as necesarias </b> en la
              p??gina de inicio, las <b> {bmrCalories}</b> calor??as es su
              objetivo cada d??a en t??rminos de ingesta cal??rica total.{" "}
            </p>
            <p>
              {" "}
              Esta informacion de reduccion de grasas corporales le dar??
              resultados tremendos sin sacrificar ninguna de sus ganancias de
              m??sculo magro para las que ha entrenado tan duro.{" "}
            </p>
            <br />
            <p> Resumen r??pido...??c??mo deber??a comer? </p>
            <ul>
              <li>
                {" "}
                <strong> Carbohidratos: </strong> 1 gramo por kg de peso
                corporal{" "}
              </li>
              <li>
                {" "}
                <strong> Prote??na: </strong> 1-1,25 gramos por kg de peso
                corporal{" "}
              </li>
              <li>
                {" "}
                <strong> Grasa: </strong> 0,25 gramos por kg de peso corporal{" "}
              </li>
            </ul>
            <br></br>
            <h3>Alimentos recomendados por |Arte Culinario|</h3>
          </div>
          <div className="col-xs-12 col-md-8 col-lg-6">
            <Chart options={options} />
          </div>
        </div>
        <div className="row well">{foodItems}</div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    products: state.product.products,
  }),
  (dispatch) => ({
    actions: bindActionCreators(analyzerActions, dispatch),
  })
)(Cutting);
