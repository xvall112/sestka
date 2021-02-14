import React from 'react';
import Img from 'gatsby-image';
import { IconAlternate } from 'components/molecules';
import { DescriptionListIcon, CardJobMinimal } from 'components/organisms';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Grid } from '@material-ui/core';

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

const Pozemek = props => {
  const classes = useStyles();

  const {
    data: {
      data: { contentfulRdHouse },
    },
  } = props;

  return (
    <div>
      <DescriptionListIcon
        icon={
          <IconAlternate
            fontIconClass="fas fa-mountain"
            size="medium"
            color={colors.pink}
          />
        }
        title="Pozemek"
        align="left"
        className={classes.descriptionListIcon}
      />
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Img fluid={contentfulRdHouse.pozemek.fluid} alt="pozemek" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Pozemek;
