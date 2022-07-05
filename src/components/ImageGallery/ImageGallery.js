import React from 'react';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({
  images,
  onImageClickChooseId,
  onImageClickOpenModal,
}) => {
  return (
    <List>
      <ImageGalleryItem
        images={images}
        onImageClickChooseId={onImageClickChooseId}
        onImageClickOpenModal={onImageClickOpenModal}
      />
    </List>
  );
};

export default ImageGallery;

ImageGallery.prototype = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      littleImageUrl: PropTypes.string.isRequired,
      largeImageUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  onImageClickChooseId: PropTypes.func,
  onImageClickOpenModal: PropTypes.func,
};
