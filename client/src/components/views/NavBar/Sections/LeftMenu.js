import React from "react";
import { Menu } from "antd";
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const user = useSelector((state) => state.user);
  let body;
  if (
    (user.userData && user.userData.accountType === "Cuenta gratuita") ||
    (user.userData && user.userData.isAuth === false)
  ) {
    body = (
      <Menu mode={props.mode}>
        <Menu.Item key="Start">
          <a href="/">Inicio</a>
        </Menu.Item>
        <Menu.Item key="food">
          <a href="/foodCompare">Comparador de alimento</a>
        </Menu.Item>
        <Menu.Item key="controler">
          <a href="/premium">Premium</a>
        </Menu.Item>
      </Menu>
    );
  } else {
    body = (
      <Menu mode={props.mode}>
        <Menu.Item key="Start">
          <a href="/">Inicio</a>
        </Menu.Item>
        <Menu.Item key="food">
          <a href="/foodCompare">Comparador de alimento</a>
        </Menu.Item>
        <Menu.Item key="controler">
          <a href="/premium">Premium</a>
        </Menu.Item>
        <SubMenu title={<span>Salud y bienestar</span>}>
          <MenuItemGroup title="">
            <Menu.Item key="metabolic">
              <a href="/bmrCalculator">Analizador metabolico</a>
            </Menu.Item>
            <Menu.Item key="controler">
              <a href="/weightControl">Controlador de peso</a>
            </Menu.Item>
            <Menu.Item key="controler">
              <a href="/Rewards">Beneficios exclusivos</a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
  return body;
}

export default LeftMenu;
