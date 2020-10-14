import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';

import CallToAction from '../src/ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  avatar: {
    height: '25em',
    width: '25em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

const About = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction='column'>
      <Grid item className={classes.rowContainer} style={{ margintop: '2em' }}>
        <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
          About us{' '}
        </Typography>
      </Grid>
      <Grid item container justify='center' className={classes.rowContainer}>
        <Typography
          variant='h4'
          align='center'
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, pr an ondividual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: '10em', marginBottom: '10em' }}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justify='space-around'
      >
        <Grid item>
          <Grid
            itemcontainer
            direction='column'
            lg
            style={{ maxWidth: '35em' }}
          >
            <Grid item>
              <Typography
                variant='h4'
                align={matchesMD ? 'center' : undefined}
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We're new kid on the block
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                Founded in 2019,we're ready to get our hands on the world's
                business problems.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                It all started with one question: Why aren't all businesses
                using available technology? There are many different answers to
                that question. economic barriers, social barriers, educational
                barriers and sometimes institutional barriers.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in softwere engineering and computing power,
                compounded by the proliferation of smart phones,has opend up
                infinite worlds of possibillity. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of inteeraction are created daily. Taking
                full advantage of these advancements is the same of the game.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and that's where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item lg>
            <img
              src='/assets/history.svg'
              alt=' quill pen sitting intop of book'
              style={{ maxHeight: matchesMD ? 200 : '22em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='column'
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginBottom: '15em' }}
      >
        <Grid item>
          <Typography align='center' variant='h4' gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph align='center'>
            Thavananthan S , Founder
          </Typography>
          <Typography variant='body1' paragraph align='center'>
            I started coding when I was 18 year old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            alt='founder'
            src='/assets/nanthu.jpg'
            className={classes.avatar}
          />
        </Grid>
        <Grid item container justify={matchesMD ? 'center' : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant='body1' align='center' paragraph>
                I taught myself basic coding form a library book in third grade,
                and ever since then my passion has solely been set on learning-
                learning about computers, learning mathematics and philosophy,
                studying design, always just learing
              </Typography>
              <Typography variant='body1' align='center' paragraph>
                Now I'm ready to apply everthing I've learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction='column'
            lg
            alignItems={matchesMD ? 'center' : undefined}
            style={{ marginBottom: matchesMD ? '2.5em' : 0 }}
          >
            <Grid item>
              <img
                src='/assets/yearbook.svg'
                alt='yearbook page'
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant='body1' align='center' paragraph>
                I taught myself basic coding form a library book in third grade,
                and ever since then my passion has solely been set on learning-
                learning about computers, learning mathematics and philosophy,
                studying design, always just learing
              </Typography>
              <Typography variant='body1' align='center' paragraph>
                Now I'm ready to apply everthing I've learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction='column'
            lg
            alignItems={matchesMD ? 'center' : 'flex-end'}
          >
            <Grid item>
              <img
                src='/assets/puppy.svg'
                alt='grey spotted puppy'
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                my miniature dapple dachshund , Sterling
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

export default About;
