import React from 'react';
import {Overlay, Mod} from './Modal.styled'
import PropTypes from 'prop-types';


const Modal = ({ images }) => {

  return (
      <>
      {images.map(({id, littleImageUrl, description}) => (
        <GalleryItem key={id}>
        <Image src = {littleImageUrl} alt={description} />
      </GalleryItem>
      ))}
      </>
  )
};

export default ImageGalleryItem;

ImageGalleryItem.prototype = {
    images : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            littleImageUrl: PropTypes.string.isRequired,
            largeImageUrl: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ),
};
