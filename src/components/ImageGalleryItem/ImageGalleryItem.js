import React from 'react';
import {GalleryItem, Image} from './ImageGalleryItem.styled'
// import PropTypes from 'prop-types';




const ImageGalleryItem = ({ images, onImageClickChooseId, onImageClickOpenModal }) => {

    const handleImageClick = (idOfChooseImg) => {
        onImageClickChooseId(idOfChooseImg)
        onImageClickOpenModal()

    }

  return (
      <>
      {images.map(({id, littleImageUrl, description}) => (
        <GalleryItem key={id}>
        <Image src = {littleImageUrl} alt={description} onClick={() => handleImageClick(id)}/>
      </GalleryItem>
      ))}
      </>
  )
};

export default ImageGalleryItem;

// ImageGalleryItem.prototype = {
//     images : PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             littleImageUrl: PropTypes.string.isRequired,
//             largeImageUrl: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired,
//         })
//     ),
// };
