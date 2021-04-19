import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../../../_actions/user_actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Icon, Input, Button, Checkbox, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import ParticlesBg from "particles-bg";
import axios from "axios";
import "./style.css";

const { Title } = Typography;

function LoginPage(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["logDate"]);
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);

  function handleCookie() {
    var today = new Date();

    var date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear() +
      "/" +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();

    setCookie("logDate", date, {
      path: "/",
    });
  }

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const initialEmail = localStorage.getItem("rememberMe")
    ? localStorage.getItem("rememberMe")
    : "";

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email invalido")
          .required("Email es requerido"),
        password: Yup.string()
          .min(6, "La contraseña debe contener al menos 6 caracteres")
          .required("Contraseña requerida"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
          };

          dispatch(loginUser(dataToSubmit))
            .then((response) => {
              if (response.payload.loginSuccess) {
                window.localStorage.setItem("userId", response.payload.userId);
                handleCookie();
                if (rememberMe === true) {
                  window.localStorage.setItem("rememberMe", values.id);
                } else {
                  localStorage.removeItem("rememberMe");
                }
                props.history.push("/");
              } else {
                setFormErrorMessage("Email o contraseña invalidos");
              }
            })
            .catch((err) => {
              setFormErrorMessage("Email o contraseña invalidos");
              setTimeout(() => {
                setFormErrorMessage("");
              }, 3000);
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
            <div className="d-flex justify-content-center">
              <Title level={2}>Log In</Title>
              <ParticlesBg type="square" bg={true} />
            </div>

            <div className="d-flex justify-content-center">
              <form onSubmit={handleSubmit} style={{ width: "400px" }}>
                <Form.Item required>
                  <Input
                    id="email"
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Email"
                    type="email"
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

                <Form.Item required>
                  <Input
                    id="password"
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Contraseña"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.password && touched.password && (
                    <div className="inputFeedback">{errors.password}</div>
                  )}
                </Form.Item>

                {formErrorMessage && (
                  <label>
                    <p
                      style={{
                        color: "#ff0000bf",
                        fontSize: "0.7rem",
                        border: "1px solid",
                        padding: "1rem",
                        borderRadius: "10px",
                      }}
                    >
                      {formErrorMessage}
                    </p>
                  </label>
                )}

                <Form.Item>
                  <Checkbox
                    id="rememberMe"
                    onChange={handleRememberMe}
                    checked={rememberMe}
                  >
                    Recordarme
                  </Checkbox>
                  <a
                    className="login-form-forgot"
                    href="/forgotPassword"
                    style={{ float: "right" }}
                  >
                    Olvide mi contraseña
                  </a>
                  <div>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      style={{ minWidth: "100%" }}
                      disabled={isSubmitting}
                      onSubmit={handleSubmit}
                    >
                      Entrar
                    </Button>
                  </div>
                  O <a href="/register">Registrarse ahora!</a>
                </Form.Item>
              </form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
export default withRouter(LoginPage);
