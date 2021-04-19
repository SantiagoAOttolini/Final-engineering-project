import React, { Component } from "react";
import Chart from "../Chart/chart";
import Highcharts from "highcharts";
import MiniChart from "../MiniChart/mini_chart";
import * as analyzerActions from "../../../../_actions/analyzer_actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useLocation } from "react-router-dom";

class Bulking extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.actions.getProducts();
  }

  render() {
    const { products } = this.props;
    const bmrCalories = this.props.location.aboutProps;
    console.log(bmrCalories);
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

    const options = {
      title: {
        text: "Calorias diarias ",
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
            format:
              "<b>{point.name}</b><br/><div><center>{point.percentage:.1f} %</center></div>",
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
              y: 40,
            },
            {
              name: "Proteinas",
              y: 40,
              sliced: true,
              selected: true,
            },
            {
              name: "Grasas",
              y: 16,
            },
            {
              name: "Vitaminas y minerales",
              y: 4,
            },
          ],
        },
      ],
    };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-4 col-lg-6">
            <h3>Ingesta diaria (Ganar masa muscular)</h3>

            <p>
              Para ganar músculo, necesita consumir más calorías de las que usa.
              Y esto resultará en un aumento de grasa. Ahora bien, la cantidad
              de grasa que se gana depende de varios factores:
            </p>
            <p>
              si come a ciegas, sin saber un poco lo que está comiendo, entonces
              no consumirá suficiente comida o consumirá demasiado. Lo primero
              que debe hacer al planificar su dieta de volumen es encontrar su
              gasto calórico diario.
            </p>
            <br />
            <p>
              Tu <b>cantidad de calorias</b> es <b> {bmrCalories}</b> y son las
              calorías que se debe proponer ingerir cada día en términos de
              ingesta calórica total.
            </p>
            <p>
              {" "}
              Tenemos nuestra ingesta total de calorías, de las cuales -{" "}
              <b>{Math.ceil(0.17 * bmrCalories)}</b> - se utilizan para
              funciones normales y vitales, mientras que el resto -{" "}
              <b>{Math.floor(0.83 * bmrCalories)} </b> - de las calorías se
              excretan o almacenan como grasa.
            </p>
            <br />
            <div style={{ fontSize: "1.2em", fontWeight: "bold" }}>
              CALORIAS POR COMIDA
            </div>
            <p>
              Uno de los diez mandamientos de un cuerpo sano es{" "}
              <em>" Comerás más de 3 comidas al día."</em>
              Así que supongamos que hacemos 7 comidas al día, recuerde que esto
              incluye batidos post entrenamiento.
              <b>
                {bmrCalories}
                (calorías totales) / 7 (comidas al día) ={" "}
                {Math.round(bmrCalories / 7)}
              </b>{" "}
              - Calorías por comida (aprox.).
            </p>
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
    BRM: state.analyzer.bmr,
  }),
  (dispatch) => ({
    actions: bindActionCreators(analyzerActions, dispatch),
  })
)(Bulking);
