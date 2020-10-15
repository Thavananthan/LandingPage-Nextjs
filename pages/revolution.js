import React from 'react';
import Head from "next/head";
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import technologyAnimation from '../src/animations/technologyAnimation/data.json';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

const Revolution = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column' alignItems='center'>
       <Head>
        <title key="title">
          The Revolution - Cutting-Edge Software | Arc Development
        </title>

        <meta
          name="description"
          key="description"
          content="Visionary insights, coupled with cutting-edge technology, is a recipe for revolution. Get a free online estimate instantly!"
        />
   
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | The Revolution"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com/revolution" />
        <link rel="canonical" key="canonical" href="arc.com/revolution" />
       </Head> 
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography
          align={matchesMD ? 'center' : undefined}
          variant='h1'
          style={{ fontFamily: 'Pacifico' }}
        >
          {' '}
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginTop: '5em' }}
      >
        <Grid item lg>
          <img
            src='/assets/vision.svg'
            alt='mountain through binoculars'
            style={{
              maxWidth: matchesMD ? 200 : '40em',
              marginRight: matchesMD ? 0 : '5em',
              marginBottom: matchesMD ? '5em' : 0,
            }}
          />
        </Grid>
        <Grid item container direction='column' style={{ maxWidth: '40em' }} lg>
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : 'right'}
              gutterBottom
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : 'right'}
              paragraph
            >
              The rise of computers, and subsequently the internetm has
              completely altered very aspect of human life. This has increased
              our comfort, broadened our connectionsm and reshaped how we view
              the world.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : 'right'}
              paragraph
            >
              What once was confined to huge eooms and teams of engineers now
              resides in every signle one of our hands. Harnessing this
              unlimited potential by using it to solve probles and better lives
              is at the heart of everying we do.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : 'right'}
              paragraph
            >
              We want to help businesses capotalize on the latest and greatest
              techonlogy. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, explorationm and innovation.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : 'right'}
              paragraph
            >
              By holding ourselves to rigorous standard and pristine quality we
              can ensure you have to absolute best tools necessary to thrive in
              this new frontier.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : 'right'}
              paragraph
            >
              We see a future where every individual has personalized software
              custon tailored to their lifestyle, culture, and interests,
              helping them overcome life's obstacles. Each project is a step
              towards that gol.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* next one */}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        justify='center'
        className={classes.rowContainer}
        style={{
          marginTop: '10em',
          marginBottom: '10em',
        }}
      >
        <Grid item container direction='column' style={{ maxWidth: '40em' }} lg>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              In 2013, facebook invented a new way of building websites. This
              new system, React js, completely revolutionizes the process and
              parctice of website development.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Instead of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              of code called components. These components are faster, easier to
              maintain, and easily reused and customized, eachserving singular
              purpose.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Two yaers later they shocked the world by releasing a similar
              susyem, React Native, for producing IOS and Android apps. Instead
              of having to master two completely separate development platforms,
              you can leverage the knowledge you already possessed from building
              websites and reapply it directly! this was a huge leap forward.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              This technology is now being used by companies like AirBan
              ,Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
              Facebook purchased Instagram large portions of it ware even
              rebuilt using React.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Developers have since built on top of these systems by automating
              project setup nd deployment, allowing creators to focus as much as
              possible on their work itself.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              These technical advancements translate into saving by
              significantly reducing the workload and streamlining the workflow
              for developing new pieces of software m while also lowering the
              barrier to entry or mobile app development.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              This puts personalization in your pocket - faster, better, and
              more affordable than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify={matchesMD ? 'center' : 'flex-end'} lg>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: '40em', margin: 0 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='row'
        justify='center'
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant='h4' gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#B3B3B3', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              {' '}
              Consultations
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things upm our initial consltation will help you examine your
              business holistically to find the best solutions.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Detailed notes will be taken on your requirements and constraints
              while taking care to identify other potential areas for
              consideration.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Cutting-edge advancement in machine learing like object detection
              and natural languages [rocesing allow computers to do things
              previously unimageinable and our expertise and intution will help
              usher you inti this new future of possibilities.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/consultationIcon.svg'
            alt='handshake'
            width="100%"
            style={{ maxWidth:'40em' }}          />
        </Grid>
      </Grid>
      {/* next */}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FF7373', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              {' '}
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Then it's time for us to start on your minimum viable product
              That's just a fancy term for a mockup, which doesn;t include
              colors, images , or any other polished design elements, but
              captures the essential layout structur and functionality.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/mockupIcon.svg'
            alt='basic website design outline'
            width="100%"
            style={{ maxWidth:'40em' }}          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#39B54A', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              {' '}
              Reviews
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Before moving any farther we come back to with our progress. This
              gives you the freedom to discuss any chages you may want or any
              ideas you may have come up with before any heavy lifting has been
              done.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              We give you an interactive demonstation of the mockups, thoroughly
              explaining the thought process that went inti each screen and
              every anticipated feature.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Once you're completely satisfied with vision for our solution we
              get down to the mitty gritty, fie-details of design.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/reviewIcon.svg'
            alt='magnifying glass'
            width="100%"
            style={{ maxWidth:'40em' }}

          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#A67C52', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              {' '}
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Using the mockup and notes taken during the consultation as
              guides, we will start ironing out what the final product will look
              like. This also involves using any brand material like fonts,
              colors, and logos to extend the experience you're alrady familiar
              with.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              No aspect is superfluous, and care will be taken with every
              decision.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/designIcon.svg'
            alt='paintbrush leaving stroke of paint'
            width="100%"
            style={{ maxWidth:'40em' }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#39B54A', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              {' '}
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              A second round of review is essential to our goal of creating
              exactly what you want , exactly how you eant it.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              This time we'll be going over the finalized design in antoer ully
              interactive demonstration. Agin this gives you an opprtunity to
              tweak things and make sure we get everything right the first time.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/reviewIcon.svg'
            alt='magnifying glass'
            width="100%"
            style={{ maxWidth:'40em' }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#FBB03B', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              {' '}
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Here's where we get down to business.{' '}
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project on a high level, prioritizing
              some areas over others.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Typically the backend , behind the scenes operations are completed
              first. Once all the the services are in place we can then create
              the front end, user side of things.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Finishing the pplication doesn;t men we're done though, because we
              use extensive testing to guarntee compatibility with all intended
              devices.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Only after our rigorous examination willwe accept a products as
              finished, then pushing it through the production pipeline. This
              produces an optimized, consumer version of the code and assets
              ready for deployment.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/buildIcon.svg'
            alt='building construnction site'
            width="100%"
            style={{ maxWidth:'40em' }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        className={classes.rowContainer}
        style={{ backgroundColor: '#C1272D', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              {' '}
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              The moment we've all been waiting for.{' '}
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              When constructon comes to a close you're the first one to know.
              We#ll give our fial demonstration to show off your shiny new
              software in the wild so you konw exactly how it will look to your
              users.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              When you say the word, we press the button and lanuch your project
              out to the public. We're there to ensure evertthing goes to plan
              so you can start reaping the rewards of your technological
              inverstment immediately.
            </Typography>
          </Grid>
          <Grid item lg style={{ alignSelf: 'center' }}>
            <img
              src='/assets/launchIcon.svg'
              alt='rocket'
              width="100%"
              style={{ maxWidth:'40em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#8E45CE', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              {' '}
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Our work doesn;t end there.{' '}
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              After a successful launch we keep in close contact to listen to
              feedback and hear how the project is being received.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              From there on out we make sure your application is kept up to datw
              and taking advantage of the bet features and parctices available.
              Whe new developmnts arise otr new techniues are discovered in
              future projects, we will implemet thode advancements in your
              project as part of out routine maintennce.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/maintainIcon.svg'
            alt='wrench tightening bolts'
            width="100%"
            style={{ maxWidth:'40em' }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#29ABE2', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              {' '}
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              The cycle repeats whenever you come up with a new idea for
              extending your current project, or come up with a brand new system
              entirely.{' '}
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              By planning for future feature and chages we ca bulid and evolve
              our application over time. As new use case and customer needs
              develop we can respond with continuous intergration of new
              content.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph
              style={{ color: '#fff', maxWidth: '20em' }}
            >
              Our iterative process will keep you current and competitive,
              allowing you to quickly implement chages instead of waiting monts
              for sigle update.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src='/assets/iterateIcon.svg'
            alt='rocket'
            width="100%"
            style={{ maxWidth:'40em' }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Revolution;
