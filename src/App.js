import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss";
import DemoLogin from "./demo/DemoLogin";
import DemoMain from "./demo/DemoMain";
import DemoButton from "./demo/DemoButton";
import DemoForm from "./demo/DemoForm";
import DemoProfile from "./demo/DemoProfile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/', '/DemoLogin']} exact component={DemoLogin} />

        <Route path="/DemoMain" exact component={DemoMain} />

        <Route path="/DemoButton" exact component={DemoButton} />

        <Route path="/DemoForm" exact component={DemoForm} />

        <Route path="/DemoProfile" exact component={DemoProfile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
