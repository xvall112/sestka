import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import clsx from 'clsx';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { contact } from '../../../../views/IndexView/data/index';

const query = graphql`
  query {
    house: allContentfulRdHouse(sort: { fields: name }) {
      nodes {
        name
        slug
        stav {
          stav
        }
      }
    }
    logoImage: file(relativePath: { eq: "logo2.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: theme.palette.primary.dark,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 120,
    height: 32,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgba(255,255,255,.6)',
  },
}));

const Footer = props => {
  const data = useStaticQuery(query);
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  const MenuGroup = props => {
    return (
      <List disablePadding className={classes.menuItem}>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography variant="body2" className={classes.menuGroupTitle}>
            RODINNÉ DOMY
          </Typography>
        </ListItem>
        {data.house.nodes.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Link to={`/dum/${page.slug}`}>
              <Typography
                variant="body2"
                className={clsx(classes.navLink, 'submenu-item')}
              >
                {page.name}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    );
  };

  const LandingPages = () => {
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup />
        </div>
      </div>
    );
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <Link to="/" className={classes.link}>
                    <Img
                      fixed={data.logoImage.childImageSharp.fixed}
                      className={classes.logoImage}
                    />
                  </Link>
                </div>
              </ListItem>
              <ListItem disableGutters>
                <IconButton
                  className={classes.socialIcon}
                  href={contact.facebook}
                >
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                {/*    <IconButton
                  className={classes.socialIcon}
                  href={contact.instagram}
                >
                  <InstagramIcon className={classes.icon} />
                </IconButton> */}
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={10} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              <Grid item>
                <LandingPages />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
