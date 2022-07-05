import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Content } from './Modal.styled';
// import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
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

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Content>{this.props.children}</Content>
      </Overlay>,
      modalRoot
    );
  }
}
