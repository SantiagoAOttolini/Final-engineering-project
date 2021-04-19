/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../Security Model/Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Cookies } from "react-cookie";
import "../style.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function RightMenu(props) {
  //acceder a los datos del estado (mapStateToProps)
  const user = useSelector((state) => state.user);

  const userAuditory = () => {
    var dt = new Date();
    var time =
      dt.getDate() +
      "/" +
      (dt.getMonth() + 1) +
      "/" +
      dt.getFullYear() +
      "/" +
      dt.getHours() +
      ":" +
      dt.getMinutes() +
      ":" +
      dt.getSeconds();

    const user_id = user.userData._id;
    const username = user.userData.name;
    const cookies = new Cookies();
    const loginDate = cookies.get("logDate");
    const logoutDate = time;

    const body = {
      user_id,
      username,
      loginDate,
      logoutDate,
    };
    console.log(body);
    axios
    //CONTACT ME FOR THIS DATA
      .post("http://localhost:5000/api/admin/addAuditoryUser", body)
      .then((res) => {
        if (res.success !== false) {
          console.log("Auditoria de login guardada");
          cookies.remove("logDate");
        } else {
          console.log("error, no se pudo guardar nada, pedazo de virgo");
        }
      });
  };

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        userAuditory();
        props.history.push("/login");
      } else {
        alert("Fallo el login");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">Entrar</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Registrarse</a>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <div>
        <Menu mode={props.mode}>
          <SubMenu
            title={
              <span>
                <img
                  className="imgAvatar"
                  id="userAvatar"
                  src={user.userData && user.userData.image}
                ></img>
              </span>
            }
          >
            <MenuItemGroup className="mr-5" title="">
              <Menu.Item key="setting:2">
                <a href="/changePassword">Cambiar contraseña</a>
              </Menu.Item>

              {user.userData &&
              user.userData.email === "//CONTACT ME FOR THIS DATA" ? (
                <Menu.Item key="addFood">
                  <a className="containerLogout" href="/addFood">
                    Agregar alimento
                  </a>
                </Menu.Item>
              ) : (
                ""
              )}
              {user.userData &&
              user.userData.email === "//CONTACT ME FOR THIS DATA" ? (
                <Menu.Item key="deleteFood">
                  <a className="containerLogout" href="/deleteFood">
                    Borrar alimento
                  </a>
                </Menu.Item>
              ) : (
                ""
              )}
              {user.userData &&
              user.userData.email === "//CONTACT ME FOR THIS DATA" ? (
                <Menu.Item key="addReward">
                  <a className="containerLogout" href="/addReward">
                    Agregar local
                  </a>
                </Menu.Item>
              ) : (
                ""
              )}
              {user.userData &&
              user.userData.email === "//CONTACT ME FOR THIS DATA" ? (
                <Menu.Item key="deleteReward">
                  <a className="containerLogout" href="/deleteReward">
                    Borrar local
                  </a>
                </Menu.Item>
              ) : (
                ""
              )}
              {user.userData &&
              user.userData.email === "//CONTACT ME FOR THIS DATA" ? (
                <Menu.Item key="addCashPay">
                  <a className="containerLogout" href="/addCashPay">
                    Agregar Pagos en Efectivo
                  </a>
                </Menu.Item>
              ) : (
                ""
              )}
              {user.userData &&
              user.userData.email === "//CONTACT ME FOR THIS DATA" ? (
                <Menu.Item key="addCashPay">
                  <a className="containerLogout" href="/addGym">
                    Agregar gimnasios
                  </a>
                </Menu.Item>
              ) : (
                ""
              )}

              {user.userData &&
              user.userData.email === "//CONTACT ME FOR THIS DATA" ? (
                <Menu.Item key="Audits">
                  <a className="containerLogout" href="/Audits">
                    Auditoria
                  </a>
                </Menu.Item>
              ) : (
                ""
              )}

              <Menu.Item key="logout">
                <a className="containerLogout" onClick={logoutHandler}>
                  Logout
                </a>
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item>
            <div className="containerLogin">
              <div className="loginName btn btn-info  text-white rounded h4 text-left">
                <p>{user.userData && user.userData.name}</p>
              </div>
              <div className="loginName btn btn-info  text-white rounded h4 text-left ml-2">
                <p>{user.userData && user.userData.accountType}</p>
              </div>
            </div>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default withRouter(RightMenu);
