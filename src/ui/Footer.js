import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Link from '../Link';
import Hidden from '@material-ui/core/Hidden';

const UserStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.UIBlue,
    width: '100%',
    position: 'relative',
  },
  adronment: {
    width: '25em',
    verticalAlign: 'bottom',
    zIndex: 1302,
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    width: '4em',
    height: '4em',
    [theme.breakpoints.down('md')]: {
      width: '2.5em',
      height: '2.5em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '2em',
      height: '2em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-5em',
    right: '1.5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '-3.5em',
      right: '1em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-2.8em',
      right: '0.6em',
    },
  },
}));

const Footer = (props) => {
  const classes = UserStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(0)}
                component={Link}
                href='/'
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                component={Link}
                href='/services'
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/customsoftware'
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Custom Software Developemnt
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/mobileapps'
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(1)}
                component={Link}
                href='/websites'
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/revolution'
                onClick={() => props.setValue(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link}
                href='/vision'
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href='/technology'
                onClick={() => props.setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link}
                href='/process'
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(3)}
                component={Link}
                href='/about'
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(3)}
                component={Link}
                href='/history'
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(3)}
                component={Link}
                href='/team'
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(4)}
                component={Link}
                href='/contact'
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src='/assets/FooterAdornment.svg'
        className={classes.adronment}
        alt='adornment slash'
      />
      <Grid
        container
        justify='flex-end'
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={'a'}
          href='http://www.facebook.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            src='/assets/facebook.svg'
            alt='facebook log'
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={'a'}
          href='http://www.twitter.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            src='/assets/twitter.svg'
            alt='twiiter log'
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={'a'}
          href='http://www.instagram.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            src='/assets/instagram.svg'
            alt='instagram log'
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
};
export default Footer;
