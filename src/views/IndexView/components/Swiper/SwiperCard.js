import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import CardHouse from '../Services/Card';

import Img from 'gatsby-image';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 'auto',
  },
  swiperSlide: {
    width: 'auto',
  },
  swiperNav: {
    '& .swiper-pagination-bullet-active': {
      background: theme.palette.primary.main,
    },
    '& .swiper-button-next': {
      color: theme.palette.primary.main,
      top: 'auto',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '& .swiper-button-prev': {
      color: theme.palette.primary.main,
      top: 'auto',
      bottom: theme.spacing(2),
      right: theme.spacing(9),
      left: 'auto',
    },
  },
  image: {
    objectFit: 'cover',
  },
}));

/**
 * Component to display the image swiper
 *
 * @param {Object} props
 */
const SwiperCard = props => {
  const {
    items,
    navigationButtonStyle,
    imageClassName,
    className,
    autoplay,
    pagination,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Swiper
      autoplay={autoplay ? true : false}
      pagination={pagination ? true : false}
      navigation
      spaceBetween={0}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      className={clsx(classes.root, classes.swiperNav, className)}
    >
      {items.map((item, index) => (
        <SwiperSlide className={clsx(classes.swiperSlide)} key={index}>
          <CardHouse item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCard;
