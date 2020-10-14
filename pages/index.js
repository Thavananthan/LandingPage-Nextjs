import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import ButtonArrow from '../src/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Link from '../src/Link';

import CallToAction from '../src/ui/CallToAction';
import animationData from '../src/animations/landinganimation/data';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '60em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.UIOrnage,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
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
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroText: {
    minWidth: '21.5em',
    marginLeft: '1em',
  },
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
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url('/assets/repeatingBackground.svg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      poddingLeft: '5em',
      paddingRight: '5em',
      borderRadius: 0,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '6em',
      paddingBottom: '6em',
      poddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
    },
  },
  infoBackground: {
    backgroundImage: `url('/assets/infoBackground.svg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matcheSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matcheXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defalutOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>
        <Grid container justify='flex-end' alignItems='center' direction='row'>
          <Grid sm item className={classes.heroText}>
            <Typography variant='h2' align='center'>
              Bring West Coast Technology <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify='center'
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  href='/estimate'
                  className={classes.estimateButton}
                  variant='contained'
                  onClick={() => props.setValue(5)}
                >
                  {' '}
                  Free Estimate{' '}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href='/revolution'
                  className={classes.learnButtonHero}
                  variant='outlined'
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 2 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.UIBlue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defalutOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*-----Services Block-----*/}
        <Grid
          container
          direction='row'
          justify={matcheSM ? 'center' : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matcheSM ? 0 : '5em',
              textAlign: matcheSM ? 'center' : undefined,
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
              href='/customsoftware'
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
              href='/mobileapps'
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
        >
          <Grid
            item
            style={{
              marginLeft: matcheSM ? 0 : '5em',
              textAlign: matcheSM ? 'center' : undefined,
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
              href='/websites'
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
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          style={{ height: '100em', marginTop: '12em' }}
          justify='center'
          alignItems='center'
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction='column'
                alignItems='center'
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    component={Link}
                    href='/revolution'
                    className={classes.learnButtonHero}
                    variant='outlined'
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 2 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.UIBlue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*-----information block----*/}
        <Grid
          container
          style={{ height: '80em', width: '100%' }}
          alignItems='center'
          direction='row'
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{
              textAlign: matcheXS ? 'center' : 'inherit',
            }}
            direction={matcheXS ? 'column' : 'row'}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matcheXS ? 0 : matcheSM ? '2em' : '5em' }}
            >
              <Grid
                container
                style={{ marginBottom: matcheXS ? '10em' : 0 }}
                direction='column'
              >
                <Typography variant='h2' style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant='subtitle2'>Let's get personal.</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    href='/about'
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}
                    variant='outlined'
                    onClick={() => props.setValue(3)}
                  >
                    <span style={{ marginRight: 2 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matcheXS ? 0 : matcheSM ? '2em' : '5em',
                textAlign: matcheXS ? 'center' : 'right',
              }}
            >
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant='subtitle2'>Say hello!</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    href='/contact'
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}
                    variant='outlined'
                    onClick={() => props.setValue(4)}
                  >
                    <span style={{ marginRight: 2 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----call to action -----*/}
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
