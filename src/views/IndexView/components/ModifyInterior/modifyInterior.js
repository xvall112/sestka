import React, { useState } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Grid, Typography, FormControlLabel, Switch } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const query = graphql`
  {
    img1: contentfulAsset(file: { fileName: { eq: "interierCisty.jpg" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyContentfulFluid
      }
    }
    img2: contentfulAsset(file: { fileName: { eq: "interier.jpg" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyContentfulFluid
      }
    }
  }
`;

const ModifyInterior = props => {
  const data = useStaticQuery(query);
  const { className, ...rest } = props;
  const [state, setState] = useState(false);
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className={className} {...rest}>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <SectionHeader
            label="INTERIÉR"
            title={
              <span>
                Prostor podle{' '}
                <Typography color="primary" variant="inherit" component="span">
                  vašich představ!
                </Typography>
              </span>
            }
            subtitle="vnitřní dispozici a materiálové řešení interieru je možné upravit podle potřeb kupujícího"
            align="left"
            fadeUp
            disableGutter
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          data-aos="fade-up"
          container
          justify="center"
          alignItems="flex-start"
        >
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Rozměry"
          />
          <Img
            fluid={state.checkedB === true ? data.img2.fluid : data.img1.fluid}
            alt="obrazek Domu interier"
            style={{ height: '100%', width: '100%' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

ModifyInterior.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default ModifyInterior;
