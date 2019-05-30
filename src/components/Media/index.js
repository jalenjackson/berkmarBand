import React from 'react';
import { Modal } from 'antd';
import { connect } from "react-redux";
import { toggleModal } from "../../store/Media/actions";

const Media = props => {
  const { showModal } = props;

  return (
    <>
      <Modal
        visible={ showModal }
        onOk={props.toggleModal}
        onCancel={props.toggleModal}
        title="Media">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
};

const mapStateToProps = state => {
  return {
    showModal: state.media.modal.showModal
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Media);
