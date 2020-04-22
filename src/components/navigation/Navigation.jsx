import React from "react";
import './navigation.scss'
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Navigation = props => {
  return (
    <div className="navigation-container">
      <h1>Navigation page</h1>
      <nav>
        <ul>
          <li>
            <Link to={'404'}>404</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

