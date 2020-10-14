import React from 'react';
import Lottie from 'react-lottie';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import integrationAnimation from '../src/animations/integrationAnimation/data.json';

import CallToAction from '../src/ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  itemContainer: {
    maxWidth: '37em',
  },
}));

const MobileApps = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        direction='row'
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              href='/customsoftware'
              onClick={() => props.setSelectedIndex(1)}
            >
              <img
                src='/assets/backArrow.svg'
                alt='bckto custome services page'
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
              IOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can bulid cross-platform native solutions for any
              part of your business process. This opens you upto a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notification and more.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Convenience, Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              href='/websites'
              onClick={() => props.setSelectedIndex(3)}
            >
              <img
                src='/assets/forwardArrow.svg'
                alt='forward arrow using to forward website page'
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        style={{ marginTop: '10em', marginBottom: '10em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction='column' md>
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Our technology enables an innate interconnection between web and
              mobile application, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              This allows you to extend your reach, reinvent interationsm and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: '20em' }} />
        </Grid>
        <Grid item container direction='column' md>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : 'right'}
              variant='h4'
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : 'right'}
              variant='body1'
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              ipohone, Andriodm and tablets - all at the same time.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : 'right'}
              variant='body1'
              paragraph
            >
              This significantly reduces costs and crates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        style={{ marginBottom: '10em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction='column' alignItems='center' md>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img
              src='/assets/swissKnife.svg'
              alt='swiss army knife'
              style={{ maxWidth: '20em' }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          md
          style={{
            marginTop: matchesMD ? '10em' : 0,
            marginBottom: matchesMD ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src='/assets/extendAccess.svg'
              alt='tear-one-off sign'
              style={{ maxWidth: matchesXS ? '20em' : '28em' }}
            />
          </Grid>
        </Grid>
        <Grid item container direction='column' alignItems='center' md>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img
              src='/assets/increaseEngagement.svg'
              alt='app with notification'
              style={{ maxWidth: '20em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
