import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';

import websitesIcon from '../../assets/websiteIcon.svg';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.UIOrnage,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}));

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matcheSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid contaner direction='column'>
      <Grid item style={{ marginLeft: matcheSM ? 0 : '5em' }}>
        <Typography
          align={matcheSM ? 'center' : undefined}
          variant='h2'
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {' '}
        {/*-----Services Block-----*/}
        <Grid
          container
          direction='row'
          justify={matcheSM ? 'center' : undefined}
          className={classes.serviceContainer}
          style={{ marginTop: matcheSM ? '2em' : '5em' }}
        >
          <Grid
            item
            style={{
              marginLeft: matcheSM ? 0 : '5em',
              textAlign: matcheSM ? 'center' : undefined,
              width: matcheSM ? undefined : '35em',
            }}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1' stlye={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              {' '}
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to='/customsoftware'
              className={classes.learnButton}
              variant='outlined'
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 2 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.UIBlue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt='custom software icon'
              src='/assets/CustomSoftwareIcon.svg'
              className={classes.icon}
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*-----Android/IOS Block-----*/}
        <Grid
          container
          direction='row'
          justify={matcheSM ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matcheSM ? 'center' : undefined,
              width: matcheSM ? undefined : '35em',
            }}
          >
            <Typography variant='h4'>IOS/Android Development</Typography>
            <Typography variant='subtitle1' stlye={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app{' '}
              {matcheSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to='/mobileapps'
              className={classes.learnButton}
              variant='outlined'
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 2 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.UIBlue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matcheSM ? 0 : '5em' }}>
            <img
              alt='ios/android development'
              src='/assets/mobileIcon.svg'
              className={classes.icon}
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*-----Website Block-----*/}
        <Grid
          container
          direction='row'
          justify={matcheSM ? 'center' : undefined}
          className={classes.serviceContainer}
          style={{ marginBottom: matcheSM ? '5em' : '10em' }}
        >
          <Grid
            item
            style={{
              marginLeft: matcheSM ? 0 : '5em',
              textAlign: matcheSM ? 'center' : undefined,
              width: matcheSM ? undefined : '35em',
            }}
          >
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' stlye={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to='/websites'
              className={classes.learnButton}
              variant='outlined'
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 2 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.UIBlue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt='website icon'
              src='/assets/websiteIcon.svg'
              className={classes.icon}
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
