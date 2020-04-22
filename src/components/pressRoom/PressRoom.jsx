import React from "react";
import './pressRoom.scss'
import {connect} from "react-redux";

const PressRoom = props => {
  return (
    <div className="pressRoom-container">
      <h1>Press Room page</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PressRoom);

