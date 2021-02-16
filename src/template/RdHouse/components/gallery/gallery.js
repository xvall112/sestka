import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { IconAlternate } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';
import { colors } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';

const useStyles = makeStyles(theme => ({
  root: {
    '& .image-gallery-icon': {
      color: theme.palette.primary.main,
    },
    '& .image-gallery-thumbnail.active': {
      borderColor: theme.palette.primary.main,
    },
    '& .image-gallery-thumbnail:hover': {
      borderColor: theme.palette.primary.main,
    },
    '& .image-gallery-thumbnail:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
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
  const {
    data: {
      data: { contentfulRdHouse },
    },
  } = props;

  const images = contentfulRdHouse.galery.images.map((photo, index) => {
    return { original: photo.file.url, thumbnail: photo.file.url };
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DescriptionListIcon
        icon={
          <IconAlternate
            fontIconClass="fas fa-images"
            size="medium"
            color={colors.pink}
          />
        }
        title="Galerie"
        align="left"
        className={classes.descriptionListIcon}
      />
      <ImageGallery showPlayButton={false} items={images} />
    </div>
  );
};

export default PhotoGallery;
