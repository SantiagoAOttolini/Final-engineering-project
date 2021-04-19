import React, { Suspense, Component } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LandingPage from "../components/views/LandingPage/landingPage.js";
import RegisterPage from "../components/views/Security Model/Register page/registerPage";
import NavBar from "../components/views/NavBar/NavBar";
import LoginPage from "../components/views/Security Model/Login page/Login home/loginHome";
import forgotPassword from "../components/views/Security Model/Login page/Forgot password/forgotPassword";
import changePassword from "../components/views/Security Model/Login page/Reset password/resetPassword";
import weightControl from "../components/views/Weight Control/Weight/weight";
import foodCompare from "../components/views/Food Compare/Home/home";
import brm from "../components/views/Analyzer/pages/main/homepage";
import Bulking from "../components/views/Analyzer/Bulking/bulking";
import Cutting from "../components/views/Analyzer/Cutting/cutting";
import pays from "../components/views/Pays/PricingHome";
import Catalogrewards from "../components/views/Benefits/Catalog/catalog";
import SingleReward from "../components/views/Benefits/Single rewards/singleReward";
import Information from "../components/views/Food Compare/Information/information";
import AddFood from "../components/views/Food Compare/AdminAddFood/addFood";
import AddGym from "../components/views/Benefits/AdminAddGym/adminAddGym";
import AddReward from "../components/views/Benefits/AdminAddRewards/adminAddReward";
import Auditory from "../components/views/Auditory/index";
import Benefits from "../components/views/Benefits/Benefits/benefits";
import BenefitsGym from "../components/views/Weight Control/Gym/benefits";
import QRverify from "../components/views/Benefits/QR Verify/QRVerify";
import DeleteFood from "../components/views/Food Compare/AdminDeleteFood/deleteFood";
import DeleteReward from "../components/views/Benefits/AdminDeleteBenefits/deleteBenefits";
import addCashPay from "../components/views/Pays/addCashPay";
import GymList from "../components/views/Weight Control/Gym/gymList";
import SingleGym from "../components/views/Weight Control/Gym/singleGym";
//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside
class App extends Component {
  render() {
    return (
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <div style={{ paddingTop: "69px", minHeight: "calc(10vh - 5px)" }}>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
            <Route
              exact
              path="/foodCompare"
              component={Auth(foodCompare, null)}
            />
            <Route
              exact
              path="/information/:id"
              component={Auth(Information, null)}
            />
            <Route exact path="/qrverify" component={Auth(QRverify, null)} />
            <Route exact path="/addFood" component={Auth(AddFood, true)} />
            <Route exact path="/gym" component={Auth(GymList, true)} />
            <Route exact path="/gym/:id" component={Auth(SingleGym, true)} />
            <Route
              exact
              path="/deleteFood"
              component={Auth(DeleteFood, true)}
            />
            <Route exact path="/benefits" component={Auth(Benefits, true)} />
            <Route exact path="/benefitsGym" component={Auth(BenefitsGym, true)} />
            <Route
              exact
              path="/deleteReward"
              component={Auth(DeleteReward, true)}
            />
            <Route
              exact
              path="/forgotPassword"
              component={Auth(forgotPassword, false)}
            />
            <Route
              exact
              path="/changePassword"
              component={Auth(changePassword, true)}
            />
            <Route
              exact
              path="/weightControl"
              component={Auth(weightControl, true)}
            />
            <Route exact path="/bulking" component={Auth(Bulking, true)} />
            <Route exact path="/cutting" component={Auth(Cutting, true)} />
            <Route exact path="/bmrCalculator" component={Auth(brm, true)} />
            <Route exact path="/Premium" component={Auth(pays, true)} />
            <Route
              exact
              path="/Rewards"
              component={Auth(Catalogrewards, true)}
            />
            <Route
              exact
              path="/Reward/:id"
              component={Auth(SingleReward, true)}
            />
            <Route exact path="/Audits" component={Auth(Auditory, true)} />
            <Route exact path="/AddReward" component={Auth(AddReward, true)} />
            <Route exact path="/addGYM" component={Auth(AddGym, true)} />
            <Route
              exact
              path="/AddCashPay"
              component={Auth(addCashPay, true)}
            />
          </div>
        </Suspense>
      </Switch>
    );
  }
}

export default App;
