import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {routes} from "../routes/router-path";
import './Navigation.scss'
import Logo from "../../assets/images/logo.svg";
import {connect} from "react-redux";

const NavigationComponent = props => {
  const {root} = routes;
  return (
    <div className="header-wrapper">
      <header className="header-item">
        <Link to={root} className="react-link">
          <img className="logo" src={Logo} alt="React" />
          <h2>Home</h2>
        </Link>
        <nav>
          <ul className="site-navigation">
            <li className='cart-icon-navigation-container'>
              <Link to={root}>page one</Link>
              <Link to={root}>page two</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

const mapStateToProps = state => {
  const {cart} = state;
  return {
    cart,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);

