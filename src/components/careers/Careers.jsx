import React from "react";
import './careers.scss'
import {connect} from "react-redux";

const Careers = props => {
  return (
    <div className="careers-container">
      <h1>Careers page</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Careers);

