import React from 'react';
import './modal.scss';
import ReactModal from 'react-modal';
import {customStyles} from '../../constants/modalConstants';
import {connect} from "react-redux";

const Modal = props => {
  const {children} = props;

  const openModal = () => {
    // setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    // setIsOpen(false);
  };

  return(
    <ReactModal
      isOpen={false}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Menu Modal Window"
    >
      {children}
    </ReactModal>
  )
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
