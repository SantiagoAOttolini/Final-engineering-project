import React from "react";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import "./style.css";

const PricingHome = (props) => {
  toast.configure();
  const user = useSelector((state) => state.user);
  const [product] = React.useState({
    name: "|Arte Culinario Premium|",
    price: 3,
    description: "LLeva la pasion por la cocina, a otro nivel.",
  });
  const body = {
    user,
  };

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:5000/api/checkout/cardPay",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("El pago fue realizado exitosamente", { type: "success" });
      axios
        .post("http://localhost:5000/api/checkout/changeAccount", body)
        .then(() => {
          props.history.push("/");
        });
    } else {
      toast("Ocurrio un error durante la transaccion", { type: "error" });
    }
  }

  return (
    <div className="">
      <div className="d-flex justify-content-center container mt-4 mb-4  rounded titlePrice">
        <h2>{product.name}</h2>
      </div>
      <div className="textPrice container rounded mb-5 d-flex justify-content-center">
        <h3>Oferta exclusiva: {product.price} USD</h3>
      </div>
      <div className="mt-3 container imgPrice"></div>
      {user.userData && !user.userData.accountType !== "Cuenta Premium" ? (
        <div>
          <div className="btnPagar d-flex justify-content-center">
            <StripeCheckout
              className="mt-4 w-25"
              label="Tarjeta de credito"
              stripeKey="pk_test_51IB2toIHFmBhTQLtHrSppZKrAtzBBx2H5DMU1oPetaXulzyi5BJQrVq3YzANFrYOfp2FocnbP4LwA2uL1E3dHPvV00ERf1p4tQ"
              token={handleToken}
              amount={product.price * 100}
              name="|Arte Culinario Premium|"
              billingAddress
            />
          </div>

          <div className="d-flex justify-content-center">
            <a className="mt-4 w-25 text-info" href="https://mpago.la/174uCAQ">
              <button className="btnMercadoPago rounded">Mercado pago</button>
            </a>
          </div>
        </div>
      ) : (
        ""
      )}

      <br></br>
      <div className="contactText container">
        <div className="d-flex justify-content-center">
          <p className="font-weight-bold h4">Importante</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="h6">
            Con el metodo de pago a través de "Mercado Pago" , una vez
            acreditada la compra se deberá enviar un email a:
          </p>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <h5>|soporte.ArteCulinario@gmail.com|</h5>
        </div>
      </div>
      <br></br>
      <div className="contactText2 container mb-5">
        <div className="d-flex justify-content-center">
          <p className="h4 mt-5 font-weight-bold">El mail debe contener</p>
        </div>

        <div className="d-flex justify-content-center">
          <p className="h6">
            Email de la cuenta de |Arte-Culinario| -- Nombre y apellido de la
            cuenta -- Foto adjunta del comprobante de pago{" "}
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <p className="h6 font-weight-bold mt-4">
            {" "}
            En el lapso de 24 hs , una vez verificada la solicitud , se
            notificara y brindara el servicio de cuenta premium.
          </p>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default PricingHome;
