import React from "react";
import './corporate.scss'
import {connect} from "react-redux";

const Corporate = props => {
  return (
    <div className="corporate-container">
      <h1>Corporate page</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Corporate);

