import React from "react";
import { connect } from "react-redux";
// import { useTranslation } from 'react-i18next';
import './home.scss';

const HomeComponent = props => {

  // const { t, i18n } = useTranslation('home');

  const clickHandler = () => {
    alert('Hello Alex!')
  };
  // console.log('t', t, 'i18n', i18n);
  return (
    <div className="home-container">
      <h1 className="home-title">HOME</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <button onClick={clickHandler}>proto</button>
      {/*<h1>{t('title')}</h1>*/}
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
