import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SideMenu from './sideMenu';
import Img from 'gatsby-image';

import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Container,
  Button,
  Box,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MenuIcon from '@material-ui/icons/Menu';

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
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar variant="dense">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Img fixed={data.logoImage.childImageSharp.fixed} />

              <Grid item>
                <Box display={{ xs: 'none', sm: 'inline' }}>
                  <Button
                    className={classes.button}
                    variant="outlined"
                    startIcon={<EmailIcon />}
                  >
                    napište nám
                  </Button>
                </Box>

                <Button
                  className={classes.button}
                  variant="outlined"
                  startIcon={<PhoneAndroidIcon />}
                >
                  603 262 359
                </Button>
              </Grid>
              <Grid item>
                <Grid container direction="row">
                  <Box display={{ xs: 'none', sm: 'inline' }}>
                    <IconButton color="inherit" aria-label="menu">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton color="inherit" aria-label="menu">
                      <InstagramIcon />
                    </IconButton>
                  </Box>
                  <SideMenu />
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
const useStyles = makeStyles(theme => ({
  button: {
    color: 'white',
    borderColor: 'white',
    marginLeft: '10px',
    [theme.breakpoints.down('md')]: { diplay: 'none' },
  },
  appBar: {
    background: theme.backgroundGradient,
  },
}));
export default Header;
