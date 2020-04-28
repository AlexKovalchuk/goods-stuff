import React, {Suspense, lazy} from "react";
import {Switch, Route} from "react-router-dom";
import {routes} from "./router-path";
import './routes.scss'
import Preloader from '../preloader/Preloader';
const Home = lazy(() => import('../home/Home'));
const Collections = lazy(() => import('../collections/Collections'));
const Boutique = lazy(() => import('../boutique/Boutique'));
const Measure = lazy(() => import('../measure/Measure'));
const Corporate = lazy(() => import('../corporate/Corporate'));
const Services = lazy(() => import('../services/Services'));
const StoreLocator = lazy(() => import('../storeLocator/StoreLocator'));
const PressRoom = lazy(() => import('../pressRoom/PressRoom'));
const Careers = lazy(() => import('../careers/Careers'));
const Social = lazy(() => import('../social/Social'));
const Contacts = lazy(() => import('../contacts/Contacts'));
const Navigation = lazy(() => import('../navigation/Navigation'));
const PageNotFound = lazy(() => import('../pageNotFound/pageNotFound'));

const Routes = () => {
  const {
    root,
    collections,
    boutique,
    measure,
    corporate,
    services,
    storeLocator,
    pressRoom,
    careers,
    social,
    contacts,
    navigation
  } = routes;
  return (
      <div className="component-container">
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path={root} component={Home}/>
            <Route path={collections} component={Collections}/>
            <Route path={boutique} component={Boutique}/>
            <Route path={measure} component={Measure}/>
            <Route path={corporate} component={Corporate}/>
            <Route path={services} component={Services}/>
            <Route path={storeLocator} component={StoreLocator}/>
            <Route path={pressRoom} component={PressRoom}/>
            <Route path={careers} component={Careers}/>
            <Route path={social} component={Social}/>
            <Route path={contacts} component={Contacts}/>
            <Route path={navigation} component={Navigation}/>
            <Route component={PageNotFound}/>
          </Switch>
        </Suspense>
      </div>
  );
};

export default Routes;