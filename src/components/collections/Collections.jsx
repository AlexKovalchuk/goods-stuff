import React from "react";
import './collections.scss'
import {connect} from "react-redux";

const Collections = props => {
  return (
    <div className="collections-container">
      <h1>Collections page</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);

