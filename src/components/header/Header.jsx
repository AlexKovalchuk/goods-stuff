import React from "react";
import { Link } from "react-router-dom";
import {routes} from "../routes/router-path";
import './header.scss'
import {connect} from "react-redux";

const HeaderComponent = props => {
  const {navigation} = routes;
  return (
      <header className="header-wrapper">
        <nav className="react-link">
          <ul className="site-navigation">
            <li className='cart-icon-navigation-container'>
              <Link to={navigation} className="react-link">M</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

