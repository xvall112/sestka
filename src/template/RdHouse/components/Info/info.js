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
    data: {
      data: { contentfulRdHouse },
    },
    className,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <DescriptionListIcon
            icon={
              <IconAlternate
                fontIconClass="fas fa-info"
                size="medium"
                color={colors.pink}
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
                title="Typ nabídky"
                subtitle={contentfulRdHouse.nabidka}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal
                title="Typ objektu"
                subtitle={contentfulRdHouse.objekt}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal
                title="Typ vlastnictví"
                subtitle={contentfulRdHouse.typVlastnictvi}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal
                title="Dispozice"
                subtitle={contentfulRdHouse.dispozice}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal
                title="Lokalita"
                subtitle={contentfulRdHouse.lokalita}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal
                title="Energetická třída"
                subtitle={contentfulRdHouse.energetickaTrida}
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
                color={colors.pink}
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
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal
                title="Lodžie"
                subtitle={contentfulRdHouse.lodzie}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal
                title="Terasa"
                subtitle={contentfulRdHouse.terasa}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal
                title="Sklep"
                subtitle={contentfulRdHouse.sklep}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal
                title="Zahrada"
                subtitle={contentfulRdHouse.zahrada}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <CardJobMinimal
                title="Garáž"
                subtitle={contentfulRdHouse.garaz}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.marginTop}>
          <DescriptionListIcon
            icon={
              <IconAlternate
                fontIconClass="fas fa-file-alt"
                size="medium"
                color={colors.pink}
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
        <Grid item xs={12} className={classes.marginTop}>
          <DescriptionListIcon
            icon={
              <IconAlternate
                fontIconClass="fas fa-cog"
                size="medium"
                color={colors.pink}
                shape="circle"
              />
            }
            title="Technické informace"
            align="left"
            className={classes.descriptionListIcon}
            data-aos="fade-up"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Stav nemovitosti"
                    subtitle={contentfulRdHouse.stavNemovitosti}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Rok výstavby"
                    subtitle={contentfulRdHouse.rokVystavby}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Celkem pater"
                    subtitle={contentfulRdHouse.celkemPater}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Konstrukce"
                    subtitle={contentfulRdHouse.konstrukce}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Zastavěná plocha"
                    subtitle={`${contentfulRdHouse.zastavenaPlocha} ㎡`}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Užitá plocha"
                    subtitle={`${contentfulRdHouse.uzitaPlocha}㎡`}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Plocha parcely"
                    subtitle={`${contentfulRdHouse.plochaParcely} ㎡`}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Plocha zahrady"
                    subtitle={`${contentfulRdHouse.plochaZahrady} ㎡`}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Zastavěná plocha garáže"
                    subtitle={`${contentfulRdHouse.zastavenaPlochaGaraz} ㎡`}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Užitá plocha garáže"
                    subtitle={`${contentfulRdHouse.uzitaPlochaGaraz} ㎡`}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Elektřina"
                    subtitle={contentfulRdHouse.elektrina}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Plyn"
                    subtitle={contentfulRdHouse.plyn}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Voda"
                    subtitle={contentfulRdHouse.voda}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Vytápění"
                    subtitle={contentfulRdHouse.vytapeni}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Telefonní přípojka"
                    subtitle={contentfulRdHouse.telefoniPripojka}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <CardJobMinimal
                    title="Zařízeno"
                    subtitle={contentfulRdHouse.zarizeno}
                  />
                </Grid>
              </Grid>
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
