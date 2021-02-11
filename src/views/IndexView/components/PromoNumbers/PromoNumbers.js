import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardPromo } from 'components/organisms';

const PromoNumbers = props => {
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-up"
          >
            <CardPromo
              align={isMd ? 'left' : 'center'}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              fontIconClass={item.icon}
              color={item.color}
              titleColor="primary"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

PromoNumbers.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default PromoNumbers;
