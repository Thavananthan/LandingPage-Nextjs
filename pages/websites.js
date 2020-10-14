import React from 'react';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

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
  paragraphContainer: {
    maxWidth: '30em',
  },
}));

const Websites = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

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
              href='/mobileapps'
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src='/assets/backArrow.svg'
                alt='baxk to ios/andriod development page'
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Having a website is a necessity in today's business world. They
              give you one central, pulic location to let people know who you
              are, what you do, and why you're the best at it.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              href='/services'
              onClick={() => props.setSelectedIndex(0)}
            >
              <img
                src='/assets/forwardArrow.svg'
                alt='forward arrow to services page'
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginTop: '10em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography
                variant='h4'
                align={matchesSM ? 'center' : undefined}
                gutterBottom
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src='/assets/analytics.svg'
                alt='graph with magnifying glass'
                style={{ marginLeft: '-2em' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginTop: '5em' }}
          className={classes.paragraphContainer}
        >
          <Typography variant='body1' align={matchesSM ? 'center' : undefined}>
            Knowledge is power, and data is 21st Century gold. Analying this
            data can reveal hidden patterns and trends in your business.
            empowering you to make smrter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems='center'
        justify='flex-end'
        style={{ marginTop: '10em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' align='center' gutterBottom>
                E-commerece
              </Typography>
            </Grid>
            <Grid item>
              <img
                src='/assets/ecommerce.svg'
                alt='world outline made of dollar signs'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '1em',
            marginTop: matchesSM ? '3em' : 0,
          }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant='body1'
            align={matchesSM ? 'center' : undefined}
            paragraph
          >
            It's no secret that people like to shop online.
          </Typography>
          <Typography
            variant='body1'
            align={matchesSM ? 'center' : undefined}
            paragraph
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it's time
            for you slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginTop: '10em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography
                variant='h4'
                align={matchesSM ? 'center' : undefined}
                gutterBottom
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src='/assets/outreach.svg' alt='megaphone' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em', marginTop: '5em' }}
          className={classes.paragraphContainer}
        >
          <Typography variant='body1' align={matchesSM ? 'center' : undefined}>
            Draw people in which in with a dazzling website. Showing off your
            products online is a great way to help customers decide what's right
            for them before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems='center'
        justify='flex-end'
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' align='center' gutterBottom>
                Search Engine <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img
                src='/assets/seo.svg'
                alt="website standing on winner's podium"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '1em',
            marginTop: matchesSM ? '3em' : 0,
          }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant='body1'
            align={matchesSM ? 'center' : undefined}
            paragraph
          >
            How often have you ever been to the second page of Google results ?
          </Typography>
          <Typography
            variant='body1'
            align={matchesSM ? 'center' : undefined}
            paragraph
          >
            If you're like us, probably never.
          </Typography>
          <Typography
            variant='body1'
            align={matchesSM ? 'center' : undefined}
            paragraph
          >
            Customers don't go there either, so we make sure your website is
            designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default Websites;
