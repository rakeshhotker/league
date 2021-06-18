import React from 'react'
import "./style.css";
import StorefrontIcon from '@material-ui/icons/Storefront';
import {Link} from "react-scroll"
import { Grid ,Paper,Typography,makeStyles} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import GetAppIcon from '@material-ui/icons/GetApp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    opacity:0.6,position:"relative",
    top:"70px",
    height:"70vh",
    fontSize:"3vw",
  },
}));

function Home() {
  const classes = useStyles();
    return (
      

    <div className="homeall" id="home">
    <div className="nav">
    <Link activeClass="active" className="link"
      to="home"
      spy={true}
      smooth={true}
      offset={0}
      duration={800}
      >
        <HomeIcon
          color="secondary"
        /></Link>
      <Link activeClass="active" className="link"
            to="download"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
      >
        <GetAppIcon
          color="secondary"
        />
      </Link>
      <Link activeClass="active" className="link"
            to="login"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
      >
        <StorefrontIcon
          color="secondary"
        />
      </Link>
      <Link activeClass="active" className="link"
            to="Contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
      >
        <QuestionAnswerIcon
          color="secondary"
        />
      </Link>
    </div>
    <div className="container-home">
    <Grid container spacing={2}>
        
        <Grid item lg={3} md={3} xs={3} sm={3} >
          <Paper className={classes.paper}>
          START YOUR JOURNEY NOW WITH WITH NEW WORLD </Paper>
        </Grid>
        <Grid item lg={3} md={3} xs={3} sm={3}>
          <Paper className={classes.paper}>DOWNLOAD AND PLAY WITH CHARACTER YOU WANT AND GET 
          BONUS</Paper>
        </Grid>
        <Grid item lg={3} md={3} xs={3} sm={3}>
          <Paper className={classes.paper}>WE HAVE AKALI<br/>YASUO<br/>LUX<br/>JINX <br/>AND MANY MORE</Paper>
        </Grid>
        <Grid item lg={3} md={3} xs={3} sm={3}>
          <Paper className={classes.paper}>FEEL THE WORLD LEAGUE <br/>2021 !</Paper>
        </Grid>
      </Grid>
    </div>
        






    </div>

    )
}

export default Home
