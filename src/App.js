import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss";
import DemoLogin from "./ui-kit/DemoLogin";
import DemoMain from "./ui-kit/DemoMain";
import KitButton from "./ui-kit/KitButton";
import KitForm from "./ui-kit/KitForm";
import KitProfile from "./ui-kit/KitProfile";
import KitPopup from "./ui-kit/KitPopup";
import KitEx from "./ui-kit/KitEx";
import Login1 from "./pages/login/Login1";
import Login2 from "./pages/login/Login2";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/', '/Login1']} exact component={Login1} />
        <Route path="/Login2" exact component={Login2} />

        {/* 여기부터 데모페이지 */}
        <Route path="/DemoLogin" exact component={DemoLogin} />
        <Route path="/DemoMain" exact component={DemoMain} />
        <Route path="/KitButton" exact component={KitButton} />
        <Route path="/KitForm" exact component={KitForm} />
        <Route path="/KitProfile" exact component={KitProfile} />
        <Route path="/KitPopup" exact component={KitPopup} />
        <Route path="/KitEx" exact component={KitEx} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
