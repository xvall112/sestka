import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  colors,
  Button,
  Typography,
} from '@material-ui/core';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Icon } from 'components/atoms';
import { CardPricingStandard } from 'components/organisms';
import { IconAlternate } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';

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
        <Grid item xs={12} md={5} data-aos="fade-up">
          <CardPricingStandard
            variant="outlined"
            withShadow={true}
            title={`Aktuální cena za ${contentfulRdHouse.name} včetně  pozemku `}
            liftUp
            subtitle={
              contentfulRdHouse.stav.stav === ('volné' || 'rezervováno') &&
              'se mění dle postupu prací, předpokládaná cena dokončeného domu 7 900 000 Kč - cena bude určena dle skutečně použitých materiálů a provedených prací.'
            }
            priceComponent={
              <div>
                <Typography component="span" variant="subtitle1">
                  Aktuální cena:
                </Typography>
                <br></br>
                <Typography variant="h3" component="span">
                  {contentfulRdHouse.stav.stav === 'prodáno'
                    ? 'PRODÁNO'
                    : contentfulRdHouse.stav.stav === 'rezervováno'
                    ? 'REZERVOVÁNO'
                    : contentfulRdHouse.cena}
                </Typography>
                <Typography component="span" variant="subtitle1">
                  {contentfulRdHouse.stav.stav === 'volné' ? ' Kč s DPH' : ' '}
                </Typography>
              </div>
            }
            /* features={
              contentfulRdHouse.stav.stav === ('volné' || 'rezervováno') && [
                'pozemek',
                'základová deska',
                'obvodové zdivo',
              ]
            } */
            featureCheckComponent={
              <Icon
                fontIconClass="far fa-check-circle"
                fontIconColor={theme.palette.primary.main}
              />
            }
            cta={
              <Button
                color="primary"
                variant="contained"
                fullWidth
                size="large"
                disabled={
                  contentfulRdHouse.stav.stav === 'prodáno'
                    ? true
                    : contentfulRdHouse.stav.stav === 'rezervováno'
                    ? true
                    : false
                }
                onClick={() => scrollTo('#contact')}
              >
                mám zájem
              </Button>
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
