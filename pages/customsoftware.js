import React from 'react';
import Head from "next/head";
import Lottie from 'react-lottie';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import documentsAnimation from '../src/animations/documentsAnimation/data';
import scaleAnimation from '../src/animations/scaleAnimation/data';
import automationAnimation from '../src/animations/automationAnimation/data';
import uxAnimation from '../src/animations/uxAnimation/data';

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

const CustomSoftware = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Head>
          <title key="title">
             Custom Software Development and Design - Free Estimate
          </title>

          <meta
          name="description"
          key="description"
          content="Cutting-edge custom software development with gorgeous designs from scratch - let us optimize your business, solving problems instead of creating new ones."
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Custom Software Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com/customsoftware" />
        <link rel="canonical" key="canonical" href="arc.com/customsoftware" />
      </Head>
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
              href='/services'
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src='/assets/backArrow.svg' alt='bckto services page' />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h1' align={matchesMD ? 'center' : undefined}>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Whether we're replacing old software or inventing new solutions,
              Arc Development is here to Help your business tackle technology.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you do nedd, and
              ultimately controls the way you work. Without using any software
              at all you risk falling begind compettors and misiing out on hug
              savind from increased efficiency.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Our custon solutions are designed from the ground u with your
              needs, wants, and goals at core. this collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalixed
              options.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              href='/mobileapps'
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src='/assets/forwardArrow.svg'
                alt='forward arrow using to forward Ios/Android application page'
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direcction='row'
        justify='center'
        style={{ marginTop: '10em', marginBottom: '10em' }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction='column'
          md
          alignItems='center'
          style={{
            maxWidth: '40em',
            marginTop: matchesSM ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography variant='h4'>Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src='/assets/bulb.svg' alt='lightbulb' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          md
          alignItems='center'
          style={{
            maxWidth: '40em',
            marginTop: matchesSM ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography variant='h4'>Save Money</Typography>
          </Grid>
          <Grid item>
            <img src='/assets/cash.svg' alt='cash' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          md
          alignItems='center'
          style={{
            maxWidth: '40em',
            marginTop: matchesSM ? '10em' : 0,
            marginBottom: matchesSM ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography variant='h4'>Save Time</Typography>
          </Grid>
          <Grid item>
            <img src='/assets/stopwatch.svg' alt='stopwatch' />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? 'column' : 'row'}
        direction={matchesMD ? 'column' : 'row'}
        justify='space-around'
        style={{ marginBottom: '10em',
                  display: matchesMD ? "grid" : undefined 
              }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          md
        >
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                Reduce Errors. Reduce Waste. Reduce Costs.{' '}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                Billions are spent annually on the purchasingm printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              isStopped={true}
              style={{
                maxHeight: 310,
                maxWidth: 320,
                minHeight: 300,
              }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              isStopped={true}
              direction={matchesSM ? 'column' : 'row'}
              style={{ maxHeight: 260, minHeight: 240 }}
            />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : 'right'}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                Whether you're a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='row'
        style={{ marginTop: '15em', marginBottom: '15em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction='column' alignItems='center'>
          <Grid item>
            <img
              src='/assets/root.svg'
              alt='tree with roots extending out'
              height={matchesSM ? '300em' : '400em'}
              width={matchesSM ? '300em' : '400em'}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant='h4' align='center' gutterBottom>
              {' '}
              Root-Cause Analysis
            </Typography>
            <Typography variant='body1' align='center' paragraph>
              {' '}
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant='body1' align='center' paragraph>
              We can hlep you toroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? 'column' : 'row'}
        direction={matchesMD ? 'column' : 'row'}
        justify={matchesMD ? "center" : "space-between"}
        className={classes.rowContainer}
        style={{  marginBottom: '10em',
                  display: matchesMD ? "grid" : undefined
                 }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                Why waste time when you don't have to ?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                We can hlep you identify processs with time or event based
                actions which can easily be automated.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              isStopped={true}
              style={{
                maxHeight: 250,
                maxWidth: 260,
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              isStopped={true}
              style={{ maxHeight: 300, maxWidth: 150 }}
            />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : 'right'}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                A good design that isn't useable isn't a good design.
              </Typography>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                By prioriting users and the real ways they interact with
                technology we're able to develop unique, personable experience
                that solve problem reather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
