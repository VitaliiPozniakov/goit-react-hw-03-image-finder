import React from 'react';
import PropTypes from 'prop-types';


const BigImgInModal = ({ images, IdOfChooseImage }) => {

    const chooseImage = images.find(image => image.id === IdOfChooseImage)
// console.log(chooseImage)
const {largeImageUrl, description} = chooseImage
  return (
      <>
      
        <img src = {largeImageUrl} alt={description} />

      </>
  )
};

export default BigImgInModal;

BigImgInModal.prototype = {
    images : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            littleImageUrl: PropTypes.string.isRequired,
            largeImageUrl: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ),
};






