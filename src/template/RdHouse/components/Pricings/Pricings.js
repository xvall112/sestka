import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardPricingStandard } from 'components/organisms';
import { IconAlternate } from 'components/molecules';
import { DescriptionListIcon, CardJobMinimal } from 'components/organisms';
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

const Pricings = props => {
  const {
    data: {
      data: { contentfulRdHouse },
    },
    className,
    ...rest
  } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const classes = useStyles();
  return (
    <div className={className} {...rest}>
      <DescriptionListIcon
        icon={
          <IconAlternate
            fontIconClass="fas fa-dollar-sign"
            size="medium"
            color={colors.pink}
            shape="circle"
          />
        }
        title="Cena"
        align="left"
        className={classes.descriptionListIcon}
      />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={isMd ? 4 : 2}
      >
        <Grid item xs={12} md={4} data-aos="fade-up">
          <CardPricingStandard
            variant="outlined"
            withShadow={true}
            title={`Cena za ${contentfulRdHouse.name}`}
            liftUp
            subtitle="Rozestavenost"
            priceComponent={
              <div>
                <Typography variant="h3" component="span">
                  {contentfulRdHouse.stav.stav === 'prodáno'
                    ? 'PRODÁNO'
                    : contentfulRdHouse.cena}
                </Typography>
                <Typography component="span" variant="subtitle1">
                  {contentfulRdHouse.stav.stav === 'prodáno' ? '' : 'Kč'}
                </Typography>
              </div>
            }
            features={['features', 'dalsi']}
            featureCheckComponent={
              <Icon
                fontIconClass="far fa-check-circle"
                fontIconColor={theme.palette.primary.main}
              />
            }
            cta={
              <Link to="#contact">
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  size="large"
                  disabled={
                    contentfulRdHouse.stav.stav === 'prodáno' ? true : false
                  }
                >
                  mám zájem
                </Button>
              </Link>
            }
            disclaimer=""
          />
        </Grid>
      </Grid>
    </div>
  );
};

Pricings.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Pricings;
