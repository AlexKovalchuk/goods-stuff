import React from "react";
import './contacts.scss'
import {connect} from "react-redux";

const Contacts = props => {
  return (
    <div className="contacts-container">
      <h1>Contacts page</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

