import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { addCashPay } from "../../../_actions/cashPays_actions";
import { useDispatch } from "react-redux";

import { Form, Input, Button } from "antd";

function AddCashPays(props) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        userEmail: "",
        userName: "",
        UserLastName: "",
        mountOfPay: "",
        date: "",
      }}
      validationSchema={Yup.object().shape({
        userEmail: Yup.string().required("Una email es requerida"),
        userName: Yup.string().required("El nombre es requerido"),
        UserLastName: Yup.string().required("El apellido es requerido"),
        mountOfPay: Yup.number().required("El monto a pagar es requerido").typeError("Solo se permiten numeros"),
        date: Yup.string().required("La fecha del pago es requerida"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            userEmail: values.userEmail,
            userName: values.userName,
            UserLastName: values.UserLastName,
            mountOfPay: values.mountOfPay,
            date: values.date,
          };

          dispatch(addCashPay(dataToSubmit)).then((response) => {
            if (response.payload.success) {
              props.history.push("/");
            } else {
              alert(response.payload.err.errmsg);
            }
          });

          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="mt-5 d-flex justify-content-center flex-column">
            <div className="container rounded titlePrice mb-4 d-flex justify-content-center">
              <h2 className="text-white text-center">Agregar un pago</h2>
            </div>
            <div className="d-flex justify-content-center">
              <Form className="w-25" onSubmit={handleSubmit}>
                <Form.Item required label="Mail">
                  <Input
                    id="userEmail"
                    placeholder="Escribe la direccion de correo electronico"
                    type="text"
                    value={values.userEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.userEmail && touched.userEmail
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.userEmail && touched.userEmail && (
                    <div className="inputFeedback">{errors.userEmail}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Nombre">
                  <Input
                    id="userName"
                    placeholder="Escribe el nombre de usuario"
                    type="text"
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.userName && touched.userName
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.userName && touched.userName && (
                    <div className="inputFeedback">{errors.userName}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Apellido">
                  <Input
                    id="UserLastName"
                    placeholder="Escribe el apellido del usuario"
                    type="text"
                    value={values.UserLastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.UserLastName && touched.UserLastName
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.UserLastName && touched.UserLastName && (
                    <div className="inputFeedback">{errors.UserLastName}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Monto a pagar">
                  <Input
                    id="mountOfPay"
                    placeholder="Escribe el monto a pagar"
                    type="text"
                    value={values.mountOfPay}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.mountOfPay && touched.mountOfPay
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.mountOfPay && touched.mountOfPay && (
                    <div className="inputFeedback">{errors.mountOfPay}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Fecha">
                  <Input
                    id="date"
                    placeholder="Escribe la fecha"
                    type="text"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.date && touched.date
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.date && touched.date && (
                    <div className="inputFeedback">{errors.date}</div>
                  )}
                </Form.Item>

                <div className="d-flex justify-content-center">
                  <Form.Item>
                    <Button
                      onClick={handleSubmit}
                      type="primary"
                      disabled={isSubmitting}
                    >
                      Agregar
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default AddCashPays;
