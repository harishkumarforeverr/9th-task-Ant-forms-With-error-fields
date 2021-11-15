import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch,Route,Redirect } from "react-router-dom";
// import { Spin, Space } from 'antd';
import AppRoute from "./Route/AppRoute";
import routes from "./Route/Routes";
import Notfound from './Common/Notfound/Notfound';
// import CommonLoader from "./Common/Loaders/CommonLoader";
import CommonSpin from "./Common/Loaders/CommonSpin";
import "./App.scss"

function App() {
  return (
    <Suspense
      fallback={
      
      // <Spin size="large" />
      <CommonSpin size="large"/>
      }
    >
      <Router>
        <Switch>
          {routes.map((route) => (
            <AppRoute
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
              isPublic={route.isPublic}
              exact={route.exact}
            />
          ))}
          <Route exact path="/404" component={Notfound} />
          <Redirect from='*' to='/404' />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
