import React from "react";
import './boutique.scss'
import {connect} from "react-redux";

const Boutique = props => {
  return (
    <div className="boutique-container">
      <h1>Boutique page</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Boutique);

