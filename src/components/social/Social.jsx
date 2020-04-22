import React from "react";
import './social.scss'
import {connect} from "react-redux";

const Social = props => {
  return (
    <div className="social-container">
      <h1>Social page</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Social);

