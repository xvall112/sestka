import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { makeStyles } from '@material-ui/core/styles';
import { IconAlternate } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';
import { colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  descriptionListIcon: {
    marginBottom: theme.spacing(2),
  },
  marginTop: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
    },
  },
}));

const PhotoGallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const {
    data: {
      data: { contentfulRdHouse },
    },
  } = props;

  const photos = contentfulRdHouse.obrazky.map((photo, index) => {
    return { src: photo.file.url, width: 4, height: 3 };
  });

  const classes = useStyles();
  return (
    <div>
      <DescriptionListIcon
        icon={
          <IconAlternate
            fontIconClass="fas fa-images"
            size="medium"
            color={colors.pink}
            shape="circle"
          />
        }
        title="Galerie"
        align="left"
        className={classes.descriptionListIcon}
      />
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default PhotoGallery;
