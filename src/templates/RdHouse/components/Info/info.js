import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
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

const Info = props => {
  const {
    data: { contentfulRdHouse },
    className,
    ...rest
  } = props;
  const classes = useStyles();
  console.log(contentfulRdHouse);
  return (
    <div className={className} {...rest}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <DescriptionListIcon
            icon={
              <IconAlternate
                fontIconClass="fas fa-info"
                size="medium"
                color={colors.pink[500]}
                shape="circle"
              />
            }
            title="Detailní informace"
            align="left"
            className={classes.descriptionListIcon}
            data-aos="fade-up"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal
                title="Dispozice"
                subtitle={contentfulRdHouse.dispozice}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <DescriptionListIcon
            icon={
              <IconAlternate
                fontIconClass="fas fa-home"
                size="medium"
                color={colors.pink[500]}
                shape="circle"
              />
            }
            title="Vybavení"
            align="left"
            className={classes.descriptionListIcon}
            data-aos="fade-up"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal
                title="Balkón"
                subtitle={contentfulRdHouse.balkon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.marginTop}>
          <DescriptionListIcon
            icon={
              <IconAlternate
                fontIconClass="fas fa-cog"
                size="medium"
                color={colors.pink[500]}
                shape="circle"
              />
            }
            title="Technické informace"
            align="left"
            className={classes.descriptionListIcon}
            data-aos="fade-up"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal title="Voda" subtitle={contentfulRdHouse.voda} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.marginTop}>
          <DescriptionListIcon
            icon={
              <IconAlternate
                fontIconClass="fas fa-file-alt"
                size="medium"
                color={colors.pink[500]}
                shape="circle"
              />
            }
            title="Stručný popis"
            align="left"
            className={classes.descriptionListIcon}
            data-aos="fade-up"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal
                title={contentfulRdHouse.strucnyPopis.strucnyPopis}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Info.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Info;
