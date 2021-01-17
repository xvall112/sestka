import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, List } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

import { CodeHighlighter } from '../../../../components';

const useStyles = makeStyles(theme => ({
  fontWeightBold: {
    fontWeight: 'bold',
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

const QuickStart = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Quick start with React Scripts"
        align="left"
        titleProps={{
          className: classes.fontWeightBold,
          color: 'textPrimary',
        }}
        disableGutter
      />
      <List className={classes.list}>
        <CodeHighlighter
          code={`
> $ npm install

// Everything installed!


> $ npm start

// LiveReload started. Opening localhost:3000


> $ npm run build

// Generated the production bundle
          `}
        />
      </List>
      <SectionHeader
        title="Quick start with NextJS"
        align="left"
        titleProps={{
          className: classes.fontWeightBold,
          color: 'textPrimary',
        }}
        disableGutter
      />
      <List className={classes.list}>
        <CodeHighlighter
          code={`
> $ npm install

// Everything installed!


> $ npm run nextjs:dev

// LiveReload started. Opening localhost:3000


> $ npm run nextjs:build

// Generated the production bundle


> $ npm run nextjs:start

// Production bundle is up & running on localhost:3000
          `}
        />
      </List>
      <SectionHeader
        title="Quick start with GatsbyJS"
        align="left"
        titleProps={{
          className: classes.fontWeightBold,
          color: 'textPrimary',
        }}
        disableGutter
      />
      <List>
        <CodeHighlighter
          code={`
> $ npm install

// Everything installed!


> $ npm run gatsbyjs:develop

// LiveReload started. Opening localhost:8080


> $ npm run gatsbyjs:build

// Generated the production bundle. The sources are in \`dist\` folder
          `}
        />
      </List>
    </div>
  );
};

QuickStart.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default QuickStart;
