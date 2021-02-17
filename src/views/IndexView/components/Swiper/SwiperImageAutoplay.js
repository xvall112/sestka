import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';

import Img from 'gatsby-image';

import 'assets/scss/swiper/swiperNavigation.scss';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto !important',
    height: '100% !important',
    zIndex: 'auto !important',
  },
  swiperSlide: {
    width: 'auto',
    height: '100% !important',
  },
  swiperNav: {
    '& .swiper-slide': { margin: '0px !important' },
    '& .swiper-pagination-bullet-active': {
      background: theme.palette.primary.main,
    },
    '& .swiper-button-next': {
      color: theme.palette.primary.main,
      top: 'auto !important',
      bottom: '10px !important',
      right: '10px !important',
    },
    '& .swiper-button-prev': {
      color: theme.palette.primary.main,
      top: 'auto !important',
      bottom: '10px !important',
      right: '60px !important',
      left: 'auto !important',
    },
  },
}));

/**
 * Component to display the image swiper
 *
 * @param {Object} props
 */
const SwiperImage = props => {
  const {
    items,
    navigationButtonStyle,
    imageClassName,
    className,
    autoplay,
    pagination,
    navigation,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Swiper
      speed={1500}
      autoplay
      pagination
      navigation
      spaceBetween={0}
      slidesPerView={1}
      className={clsx(classes.root, classes.swiperNav, className)}
    >
      {items.map((item, index) => (
        <SwiperSlide className={clsx(classes.swiperSlide)} key={index}>
          <Img
            fluid={item.fluid}
            alt="obrazekDomu"
            style={{ height: '100%' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImage;
