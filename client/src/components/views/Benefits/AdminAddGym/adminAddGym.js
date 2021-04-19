import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { addGym } from "../../../../_actions/gym_actions";
import { useDispatch } from "react-redux";
import "./style.css";

import { Form, Input, Button } from "antd";

function AddGym(props) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        photo: "",
        name: "",
        email: "",
        adress: "",
        phone: "",
        price: "",
      }}
      validationSchema={Yup.object().shape({
        photo: Yup.string().required("Una foto es requerida"),
        name: Yup.string().required("El nombre es requerido"),
        email: Yup.string().required("El email es requerido"),
        adress: Yup.string().required("La direccion es requerida"),
        phone: Yup.string().required("El numero telefonico es requerido"),
        price: Yup.string().required("El precio es requerido"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            photo: values.photo,
            name: values.name,
            email: values.email,
            adress: values.adress,
            phone: values.phone,
            price: values.price,
          };

          dispatch(addGym(dataToSubmit)).then((response) => {
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
        } = props;
        return (
          <div className="mt-5 d-flex justify-content-center flex-column">
            <div className="mb-4 d-flex justify-content-center">
              <h2 className="titleRewards text-center rounded mb-2">
                Agregar gimnasios
              </h2>
            </div>
            <div className="d-flex justify-content-center">
              <Form className="w-25" onSubmit={handleSubmit}>
                <Form.Item required label="Foto">
                  <Input
                    id="photo"
                    placeholder="Escribe la ruta del archivo"
                    type="text"
                    value={values.photo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.photo && touched.photo
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.photo && touched.photo && (
                    <div className="inputFeedback">{errors.photo}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Nombre">
                  <Input
                    id="name"
                    placeholder="Escribe el nombre del lugar"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.name && touched.name
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.name && touched.name && (
                    <div className="inputFeedback">{errors.name}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Email">
                  <Input
                    id="email"
                    placeholder="Escribe la descripcion de correo electronico"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="inputFeedback">{errors.email}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Direccion">
                  <Input
                    id="adress"
                    placeholder="Escribe la direccion del gimnasio"
                    type="text"
                    value={values.adress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.adress && touched.adress
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.adress && touched.adress && (
                    <div className="inputFeedback">{errors.adress}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Telefono">
                  <Input
                    id="phone"
                    placeholder="Escribe el numero telefonico"
                    type="text"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.phone && touched.phone
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.phone && touched.phone && (
                    <div className="inputFeedback">{errors.phone}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Precio">
                  <Input
                    id="price"
                    placeholder="Escribe el precio mensual"
                    type="text"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.price && touched.price
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.price && touched.price && (
                    <div className="inputFeedback">{errors.price}</div>
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

export default AddGym;
