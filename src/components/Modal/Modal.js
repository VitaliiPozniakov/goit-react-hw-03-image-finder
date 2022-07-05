import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Content, IconClose } from './Modal.styled';
import PropTypes from 'prop-types';
// import { AiFillCloseCircle } from "react-icons/ai";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener(`keydown`, this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener(`keydown`, this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      //   console.log('нажали єскейп');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      //   console.log('нажали backdrop');
      this.props.onClose();
    }
  };

  handleIconCloseClick = e => {
    this.props.onClose();
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <IconClose onClick={this.handleIconCloseClick} />
        <Content>{this.props.children}</Content>
      </Overlay>,
      modalRoot
    );
  }
}
