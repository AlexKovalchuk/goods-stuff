import React from "react";
import './footer.scss'
import {connect} from "react-redux";

const FooterComponent = props => {
  return (
      <footer className="footer-wrapper">
        <div>Footer</div>
      </footer>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);

