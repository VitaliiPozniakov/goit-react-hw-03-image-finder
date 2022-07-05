import React from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  images,
  onImageClickChooseId,
  onImageClickOpenModal,
}) => {
  const handleImageClick = idOfChooseImg => {
    onImageClickChooseId(idOfChooseImg);
    onImageClickOpenModal();
  };

  return (
    <>
      {images.map(({ id, littleImageUrl, description }) => (
        <GalleryItem key={id}>
          <Image
            src={littleImageUrl}
            alt={description}
            onClick={() => handleImageClick(id)}
          />
        </GalleryItem>
      ))}
    </>
  );
};

export default ImageGalleryItem;
