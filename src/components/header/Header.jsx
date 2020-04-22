import React from "react";
import { Link } from "react-router-dom";
import {routes} from "../routes/router-path";
import './header.scss'
import Logo from "../../assets/images/logo.svg";
import {connect} from "react-redux";

const HeaderComponent = props => {
  const {root} = routes;
  return (
      <header className="header-wrapper">
        <Link to={root} className="react-link">
          <img className="logo" src={Logo} alt="React" />
          <h2>Home</h2>
        </Link>
        <nav>
          <ul className="site-navigation">
            <li className='cart-icon-navigation-container'>
              <Link to={'soc'}>soc net</Link>
            </li>
          </ul>
        </nav>
      </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

