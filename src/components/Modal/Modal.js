import React from 'react';
import {Overlay, Mod} from './Modal.styled'
// import PropTypes from 'prop-types';


const Modal = ({ images }) => {

  return (
      <>l
      {images.map(({largeImageUrl, description}) => (
   <Overlay>
   <Mod class="modal">
     <img src={largeImageUrl} alt={description} />
   </Mod>
 </Overlay>
      ))}
      </>
  )
};

export default Modal;

// Modal.prototype = {
//     images : PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             littleImageUrl: PropTypes.string.isRequired,
//             largeImageUrl: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired,
//         })
//     ),
// };
