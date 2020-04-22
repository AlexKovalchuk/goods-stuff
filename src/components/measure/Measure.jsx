import React from "react";
import './measure.scss'
import {connect} from "react-redux";

const Measure = props => {
  return (
    <div className="measure-container">
      <h1>Measure page</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Measure);

