import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { addFood } from "../../../../_actions/product";
import { useDispatch } from "react-redux";
import "./style.css";
import { Form, Input, Button } from "antd";

function AddFood(props) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        photo: "",
        name: "",
        valor: "",
        carbs: "",
        protein: "",
        grease1: "",
        grease2: "",
        grease3: "",
        fiber: "",
        sodium: "",
        adventages: "",
        description: "",
        Category: "",
      }}
      validationSchema={Yup.object().shape({
        photo: Yup.string().required("Una foto es requerida"),
        name: Yup.string().required("El nombre es requerido"),
        valor: Yup.number()
          .required("El valor energetico es requerido")
          .typeError("Solo se permiten numeros"),
        carbs: Yup.number()
          .required("El valor del carboidrato es requerido")
          .typeError("Solo se permiten numeros"),
        protein: Yup.number()
          .required("El valor de la proteina es requerido")
          .typeError("Solo se permiten numeros"),
        grease1: Yup.number()
          .required("El valor de la grasa es requerido")
          .typeError("Solo se permiten numeros"),
        grease2: Yup.number()
          .required("El valor de la grasa es requerido")
          .typeError("Solo se permiten numeros"),
        grease3: Yup.number()
          .required("El valor de la grasa es requerido")
          .typeError("Solo se permiten numeros"),
        fiber: Yup.number()
          .required("El valor de la fibra es requerido")
          .typeError("Solo se permiten numeros"),
        sodium: Yup.number()
          .required("El valor del sodio es requerido")
          .typeError("Solo se permiten numeros"),
        adventages: Yup.string().required(
          "Debe escribir las ventajas del alimento"
        ),
        description: Yup.string().required(
          "Debe escribir la descripcion del alimento"
        ),
        Category: Yup.string().required("Debes seleccionar una categoria"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            photo: values.photo,
            name: values.name,
            valor: values.valor,
            carbs: values.carbs,
            protein: values.protein,
            grease1: values.grease1,
            grease2: values.grease2,
            grease3: values.grease3,
            fiber: values.fiber,
            sodium: values.sodium,
            adventages: values.adventages,
            description: values.description,
            Category: values.Category,
          };
        //React hooks in functional component
          dispatch(addFood(dataToSubmit)).then((response) => {
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
            <div className="mb-4 d-flex justify-content-center">
              <h2 className="text-white titleAddFood text-center rounded mb-2">
                Agregar alimento
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
                    placeholder="Escribe el nombre del alimento"
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

                <Form.Item required label="Valor energetico (Cal)">
                  <Input
                    id="valor"
                    placeholder="Escribe el valor de las calorias"
                    type="text"
                    value={values.valor}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.valor && touched.valor
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.valor && touched.valor && (
                    <div className="inputFeedback">{errors.valor}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Carbohidratos">
                  <Input
                    id="carbs"
                    placeholder="Escribe el valor de los carbohidratos"
                    type="text"
                    value={values.carbs}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.carbs && touched.carbs
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.carbs && touched.carbs && (
                    <div className="inputFeedback">{errors.carbs}</div>
                  )}
                </Form.Item>
                <Form.Item required label="Proteina">
                  <Input
                    id="protein"
                    placeholder="Escribe el valor de la proteina"
                    type="text"
                    value={values.protein}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.protein && touched.protein
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.protein && touched.protein && (
                    <div className="inputFeedback">{errors.protein}</div>
                  )}
                </Form.Item>
                <Form.Item required label="Grasa insaturadas">
                  <Input
                    id="grease1"
                    placeholder="Escribe el valor de la grasa"
                    type="text"
                    value={values.grease1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.grease1 && touched.grease1
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.grease1 && touched.grease1 && (
                    <div className="inputFeedback">{errors.grease1}</div>
                  )}
                </Form.Item>
                <Form.Item required label="Grasa saturadas">
                  <Input
                    id="grease2"
                    placeholder="Escribe el valor de la grasa"
                    type="text"
                    value={values.grease2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.grease2 && touched.grease2
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.grease2 && touched.grease2 && (
                    <div className="inputFeedback">{errors.grease2}</div>
                  )}
                </Form.Item>
                <Form.Item required label="Grasa trans">
                  <Input
                    id="grease3"
                    placeholder="Escribe el valor de la grasa"
                    type="text"
                    value={values.grease3}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.grease3 && touched.grease3
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.grease3 && touched.grease3 && (
                    <div className="inputFeedback">{errors.grease3}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Fibra">
                  <Input
                    id="fiber"
                    placeholder="Escribe el valor de la fibra"
                    type="text"
                    value={values.fiber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.fiber && touched.fiber
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.fiber && touched.fiber && (
                    <div className="inputFeedback">{errors.fiber}</div>
                  )}
                </Form.Item>
                <Form.Item required label="Sodio">
                  <Input
                    id="sodium"
                    placeholder="Escribe el valor del sodio"
                    type="text"
                    value={values.sodium}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.sodium && touched.sodium
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.sodium && touched.sodium && (
                    <div className="inputFeedback">{errors.sodium}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Ventajas">
                  <textarea
                    id="adventages"
                    placeholder="Escribe la ventaja del alimento"
                    type="text"
                    value={values.adventages}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.adventages && touched.adventages
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.adventages && touched.adventages && (
                    <div className="inputFeedback">{errors.adventages}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Descripcion">
                  <textarea
                    id="description"
                    placeholder="Escribe la descripcion del alimento"
                    type="text"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.description && touched.description
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.description && touched.description && (
                    <div className="inputFeedback">{errors.description}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Categoria">
                  <Input
                    id="Category"
                    placeholder="Escribe la categoria del alimento"
                    type="text"
                    value={values.Category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.Category && touched.Category
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.Category && touched.Category && (
                    <div className="inputFeedback">{errors.Category}</div>
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

export default AddFood;
