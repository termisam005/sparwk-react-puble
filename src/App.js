import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss";
import DemoLogin from "./ui-kit/DemoLogin";
import DemoMain from "./ui-kit/DemoMain";
import KitButton from "./ui-kit/KitButton";
import KitForm from "./ui-kit/KitForm";
import KitProfile from "./ui-kit/KitProfile";
import KitPopup from "./ui-kit/KitPopup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/', '/DemoLogin']} exact component={DemoLogin} />

        <Route path="/DemoMain" exact component={DemoMain} />

        <Route path="/KitButton" exact component={KitButton} />

        <Route path="/KitForm" exact component={KitForm} />

        <Route path="/KitProfile" exact component={KitProfile} />

        <Route path="/KitPopup" exact component={KitPopup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
