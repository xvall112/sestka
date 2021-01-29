import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    position: 'relative',
  },
  header: {
    zIndex: 4,
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '50%',
      right: 0,
      maxWidth: '50%',
      transform: 'translateY(-50%)',
    },
  },
  image: {
    zIndex: 1,
    position: 'relative',
    bottom: theme.spacing(-1),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  textWhite: {
    color: 'white',
  },
}));

const AboutMiddle = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section className={classes.header}>
        <SectionHeader
          title={<span className={classes.textWhite}>Kontaktujte Nás</span>}
          subtitle={
            <span className={classes.textWhite}>
              {' '}
              Šestka se nachází v krásném prostředí městské části Sázky v
              Příbrami a ve vysokém standardu zajišťuje klidné a pohodlné
              bydlení pro všechny.
            </span>
          }
          ctaGroup={[
            <Link to="#contact">
              <Button variant="contained" size="large">
                kontakt
              </Button>
            </Link>,
          ]}
          align="left"
          data-aos="fade-up"
        />
      </Section>
      <Image
        src="https://assets.maccarianagency.com/the-front/illustrations/people-in-sofa.svg"
        className={classes.image}
        data-aos="fade-up"
      />
    </div>
  );
};

AboutMiddle.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default AboutMiddle;
