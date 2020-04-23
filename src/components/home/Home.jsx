import React from "react";
import { connect } from "react-redux";
import { withNamespaces } from 'react-i18next';
import './home.scss';

const HomeComponent = props => {
  const { t: customText } = props;

  const clickHandler = () => {
    alert('Hello Alex!')
  };

  return (
    <div className="home-container">
      <h1 className="home-title">HOME Page</h1>
      <h1 className="home-title">{customText('title')}</h1>
      <button onClick={clickHandler}>proto</button>
      <h1>{customText('Welcome to React')}</h1>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {

};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
export default withNamespaces()(Home);