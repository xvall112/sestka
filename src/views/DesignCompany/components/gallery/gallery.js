import React from 'react';
import Gallery from 'react-photo-gallery';

const PhotoGallery = ({ photos }) => {
  return (
    <div>
      <Gallery photos={photos.file.url} />;
    </div>
  );
};

export default PhotoGallery;
