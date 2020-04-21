import React, {Suspense, lazy} from "react";
import {Switch, Route} from "react-router-dom";
import {routes} from "./router-path";
const Home = lazy(() => import('../home/Home'));
const PageNotFound = lazy(() => import('../pageNotFound/pageNotFound'));

const Routes = () => {
  const {root} = routes;
  return (
      <div className="component-container">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={root} component={Home}/>
            <Route component={PageNotFound}/>
          </Switch>
        </Suspense>
      </div>
  );
}

export default Routes;