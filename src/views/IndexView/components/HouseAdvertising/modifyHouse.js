import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { SectionHeader, OverlapedImages } from 'components/molecules';

const query = graphql`
  {
    contentfulAsset(file: { fileName: { eq: "RD2.jpg" } }) {
      fluid(maxWidth: 600) {
        ...GatsbyContentfulFluid
      }
    }
  }
`;
const ModifyHouse = props => {
  const data = useStaticQuery(query);
  const { className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        /* direction={isMd ? 'row' : 'column-reverse'} */ spacing={4}
      >
        <Grid item xs={12} md={6}>
          <SectionHeader
            label="RODINNÝ DŮM"
            title={
              <span>
                Pokud už Vás nebaví hledat nekonečně dlouhou dobu parkovací
                místo, máte už dost svých sousedů a v chodbě zakopáváte o kola a
                lyže,{' '}
                <Typography color="primary" variant="inherit" component="span">
                  je tohle místo přesně pro Vás.
                </Typography>
              </span>
            }
            subtitle="Nové moderní domky Vám poskytnou naprosté soukromí, vlastní místo na parkování, zahradu kam nikdo nedohlédne, vlastní garáž, docházkovou vzdálenost do centra Příbrami a přitom louku a les za domem. 
            "
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
          <Img
            fluid={data.contentfulAsset.fluid}
            alt="obrazek"
            style={{ height: '100%', width: '100%', borderRadius: '10px' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

ModifyHouse.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default ModifyHouse;
