import React from "react";
import './services.scss'
import {connect} from "react-redux";

const Services = props => {
  return (
    <div className="services-container">
      <h1>Services page</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);

