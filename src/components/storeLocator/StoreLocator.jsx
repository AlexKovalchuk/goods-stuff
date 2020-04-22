import React from "react";
import './storeLocator.scss'
import {connect} from "react-redux";

const StoreLocator = props => {
  return (
    <div className="store-locator-container">
      <h1>Store Locators page</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreLocator);

