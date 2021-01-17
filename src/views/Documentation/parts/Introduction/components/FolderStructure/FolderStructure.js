import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, colors, List, ListItem, Typography, Box } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { IconText } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  fontWeightBold: {
    fontWeight: 'bold',
  },
  notification: {
    borderRadius: theme.spacing(1/2),
    border: '2px solid',
    marginBottom: theme.spacing(2),
    backgroundColor: colors.green[50],
    borderColor: colors.green[500],
    '& .MuiTypography-root': {
      color: colors.green[900],
    },
  },
}));

const FolderStructure = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Folder structure"
        align="left"
        titleProps={{
          className: classes.fontWeightBold,
          color: 'textPrimary',
        }}
        disableGutter
      />
      <List>
        <ListItem className={classes.notification}>
          <IconText
            fontIconClass="far fa-lightbulb"
            color={colors.green[500]}
            title="In each root folder there are README.md files, which will guide you to learn more about that specific folder and module."
            typographyProps={{
              noWrap: false,
            }}
          />
        </ListItem>
        <Box display="flex" flexDirection="column">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="pages"
          />
          <Typography variant="caption" color="textSecondary">
          The NextJS & GatsbyJS pre-rendered pages are located under this folder. If you are not using NextJS or GatsbyJS you may delete or ignore the pages folder
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="plugins"
          />
          <Typography variant="caption" color="textSecondary">
          The GatsbyJS custom plugins are located under this folder. If you are not using GatsbyJS you may delete or ignore the plugins folder
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="public"
          />
          <Typography variant="caption" color="textSecondary">
          Here are the public assets, images and index.html file. Note that you don't need index.html file if you are using NextJS or GatsbyJS versions. Also note, that when running GatsbyJS build scripts the index.html file will be overwritten. If you want to recover the file copy the content of _index.html and past into index.html
src Here is the main business logic of the theme.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="src"
          />
          <Typography variant="caption" color="textSecondary">
          Here are the public assets, images and index.html file. Note that you don't need index.html file if you are using NextJS or GatsbyJS versions. Also note, that when running GatsbyJS build scripts the index.html file will be overwritten. If you want to recover the file copy the content of _index.html and past into index.html
src Here is the main business logic of the theme.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" marginLeft="24px">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="assets"
          />
        </Box>
        <Box display="flex" flexDirection="column" marginLeft="24px">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="common"
          />
        </Box>
        <Box display="flex" flexDirection="column" marginLeft="24px">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="components"
          />
          <Typography variant="caption" color="textSecondary">
          The reusable and stand-alone components are stored here, by following Atomic Design Methodology
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" marginLeft="56px">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="atoms"
          />
          <Typography variant="caption" color="textSecondary">
          These are small functional components that are not using any other atomic components
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" marginLeft="56px">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="molecules"
          />
          <Typography variant="caption" color="textSecondary">
          These are those functional components which have dependencies from other atoms
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" marginLeft="56px">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="organisms"
          />
          <Typography variant="caption" color="textSecondary">
          These are the functional components that are using other molecules and atoms
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" marginLeft="24px">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="layouts"
          />
        </Box>
        <Box display="flex" flexDirection="column" marginLeft="56px">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="Main"
          />
          <Typography variant="caption" color="textSecondary">
          The main layout: header navigation, the main container and footer part
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" marginLeft="56px">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="Minimal"
          />
          <Typography variant="caption" color="textSecondary">
          The minimal layout
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" marginLeft="56px">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="DocsLayout"
          />
          <Typography variant="caption" color="textSecondary">
          Documentation layout
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" marginLeft="24px">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="theme"
          />
          <Typography variant="caption" color="textSecondary">
          In this folder there are overrides of the default color palette and typography coming from MUI
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" marginLeft="24px">
          <IconText
            fontIconClass="fas fa-folder"
            color={colors.blueGrey[900]}
            title="views"
          />
          <Typography variant="caption" color="textSecondary">
          All the views/pages that are available. Here are the combination and composition of re-usable components and pages representations.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" marginLeft="24px">
          <IconText
            fontIconClass="fas fa-file"
            color={colors.blueGrey[900]}
            title="App.js|ts"
          />
          <Typography variant="caption" color="textSecondary">
          This is the main starting point file, which instantiates React router and renders the application views. If you are not using react-scripts you may delete or ignore the App.js file
          </Typography>
        </Box>
      </List>
    </div>
  );
};

FolderStructure.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default FolderStructure;
