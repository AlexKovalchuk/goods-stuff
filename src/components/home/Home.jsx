import React from "react";
import { connect } from "react-redux";
import './home.scss';

const HomeComponent = props => {

  const clickHandler = () => {
    alert('Hello Alex!')
  };

  return (
    <div className="home-container common-wrapper">
      <h1 className="home-title">HOME</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <button onClick={clickHandler}>proto</button>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
