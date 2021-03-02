import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { IconButton, Grid, Box, Button, Chip, colors } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
/* import InstagramIcon from '@material-ui/icons/Instagram'; */
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
/* import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'; */
import { contact } from '../../../../views/IndexView/data/index';
import Badge from '@material-ui/core/Badge';

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

    menuIcon: contentfulAsset(file: { fileName: { eq: "menuIcon.png" } }) {
      fluid(maxWidth: 50) {
        ...GatsbyContentfulFluid
      }
    }

    logoImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const SideMenu = () => {
  const data = useStaticQuery(query);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerOpen}
        type="button"
      >
        <Badge badgeContent={6} color="secondary">
          <HomeIcon />
        </Badge>
      </IconButton>
      <Drawer open={open} anchor="right" onClick={handleDrawerClose}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Box my={3}>
            <Img fixed={data.logoImage.childImageSharp.fixed} />
          </Box>
          <Divider />

          <List className={classes.list}>
            <Link to="/">
              <ListItem alignItems="center" button>
                <ListItemText
                  primary="HLAVNÍ STRÁNKA"
                  className={classes.item_hlavniStranka}
                />
              </ListItem>
            </Link>
            {data.house.nodes.map((item, index) => (
              <Link to={`/dum/${item.slug}`} key={index}>
                <ListItem button>
                  <ListItemIcon>
                    <Img
                      fluid={data.menuIcon.fluid}
                      alt="menuIcon"
                      style={{
                        height: 'auto',
                        width: '40px',
                      }}
                    />
                  </ListItemIcon>

                  <ListItemText
                    primary={item.name}
                    className={
                      item.stav.stav === 'prodáno'
                        ? classes.listItemProdano
                        : item.stav.stav === 'rezervováno'
                        ? classes.listItemRezervovano
                        : classes.listItemVolne
                    }
                  />
                  <Chip
                    label={item.stav.stav}
                    className={
                      item.stav.stav === 'prodáno'
                        ? classes.prodano
                        : item.stav.stav === 'rezervováno'
                        ? classes.rezervovano
                        : classes.volne
                    }
                  />
                </ListItem>
              </Link>
            ))}
            <Link to="#contact">
              <ListItem alignItems="center" button>
                <ListItemText
                  primary="KONTAKT"
                  className={classes.item_hlavniStranka}
                />
              </ListItem>
            </Link>
            <Divider />
          </List>
          {/*   <Box my={2}>
            <Button
              href={`tel:${contact.mobile}`}
              color="primary"
              variant="outlined"
              startIcon={<PhoneAndroidIcon />}
              type="button"
            >
              {contact.mobile}
            </Button>
          </Box> */}
          <Button
            href={`mailto:${contact.email}`}
            color="primary"
            variant="outlined"
            startIcon={<EmailIcon />}
            type="button"
          >
            napište nám
          </Button>
          <Box mt={2}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              type="button"
            >
              {/*   <Button
                aria-label="instagram"
                color="primary"
                href={contact.instagram}
              >
                <InstagramIcon fontSize="large" />
              </Button> */}
              <Button
                aria-label="facebook"
                href={contact.facebook}
                color="primary"
              >
                <FacebookIcon fontSize="large" />
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Drawer>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {},
  item_hlavniStranka: {
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
  listItemProdano: {
    color: '#bf3045',
  },
  listItemRezervovano: {
    color: '#a85701',
  },
  listItemVolne: {
    color: '#1a6848',
  },
  drawer: { backgroundColor: theme.palette.primary.main },
  list: {
    width: 300,
  },
  volne: {
    backgroundColor: '#d9f2e4',
    color: '#1a6848',
    textTransform: 'uppercase',
  },
  prodano: {
    backgroundColor: colors.deepOrange[100],
    color: '#bf3045',
    textTransform: 'uppercase',
  },
  rezervovano: {
    backgroundColor: '#ffefd5',
    color: '#a85701',
    textTransform: 'uppercase',
  },
  fullList: {
    width: 'auto',
  },
}));

export default SideMenu;
