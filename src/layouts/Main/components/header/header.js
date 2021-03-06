import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import SideMenu from './sideMenu';
import Img from 'gatsby-image';

import {
  makeStyles,
  AppBar,
  IconButton,
  Grid,
  Container,
  Button,
  Box,
} from '@material-ui/core';
/* import InstagramIcon from '@material-ui/icons/Instagram'; */
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
/* import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'; */

import { contact } from '../../../../views/IndexView/data/index';
const query = graphql`
  query {
    logoImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Header = () => {
  const classes = useStyles();

  const data = useStaticQuery(query);
  return (
    <div id="header">
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Link to="/" className={classes.link}>
              <Img fixed={data.logoImage.childImageSharp.fixed} />
            </Link>
            <Grid item>
              <Box>
                <Button
                  type="button"
                  href={`mailto:${contact.email}`}
                  className={classes.button}
                  variant="outlined"
                  startIcon={<EmailIcon />}
                >
                  napište nám
                </Button>
              </Box>

              {/*   <Button
                type="button"
                className={classes.button}
                variant="outlined"
                startIcon={<PhoneAndroidIcon />}
                href={`tel:${contact.mobile}`}
              >
                {contact.mobile}
              </Button> */}
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Box display={{ xs: 'none', sm: 'inline' }}>
                    <IconButton
                      type="button"
                      href={contact.facebook}
                      color="inherit"
                      aria-label="Facebook"
                    >
                      <FacebookIcon />
                    </IconButton>
                    {/*  <IconButton
                      type="button"
                      color="inherit"
                      aria-label="Instagram"
                      href={contact.instagram}
                    >
                      <InstagramIcon />
                    </IconButton> */}
                  </Box>
                </Grid>
                <Grid item>
                  <SideMenu />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};
const useStyles = makeStyles(theme => ({
  link: {
    padding: 0,
    marginBottom: -5,
    height: '100%',
  },
  button: {
    color: 'white',
    borderColor: 'white',
    marginLeft: '10px',
    [theme.breakpoints.down('md')]: { diplay: 'none', marginLeft: 0 },
  },
  appBar: {
    zIndex: '10000',
    background: theme.backgroundGradient,
  },
}));
export default Header;
