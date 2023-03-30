import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import CustomLinearProgress from "/components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "/components/Pagination/Pagination.js";
import Badge from "/components/Badge/Badge.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/whatWeDoStyle.js";
import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import Image from "next/image";

import farmingSky from "/public/img/sections/what-we-do/farm-sky.jpg";
import ContentBox from "../../components/ContentBox/ContentBox";
import { Landscape, Memory, Timelapse } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function SectionWhatWeDo() {
  const classes = useStyles();
  
  return (
    <ContentBox id="what-we-do" title="Farming meets AI" className={classes.mainContainer}>
      <Grid container spacing={2} className={classes.container}>
        <Grid container item sm={6} xs={12}>
          <Grid item xs={12}>
            <p style={{fontSize: "1rem"}}>
              Artificial intelligence is ubiquitous nowadays.
              It helps in automating tasks, empowers your Google search, drives your cleaning robotic device at home and assists you in executing trades on your trading platform.
              The field of AI applicability seems to be endless and we want to use it to empower agriculture.
              Agriculture is a vital part of human society and our belief is that we can leverage it to build an ecosystem where most work is done by AI itself - supervised by human beings.  
            </p>
          </Grid>
          <Grid item xs={12}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem disablepadding>
                <ListItemIcon>
                  <Landscape style={{color: "#28946e"}} />
                </ListItemIcon>
                <ListItemText primary="Autonomous agriculture" />
              </ListItem>
              <ListItem disablepadding>
                <ListItemIcon>
                  <Timelapse style={{color: "#28946e"}} />
                </ListItemIcon>
                <ListItemText primary="Demand-driven supply chain" />
              </ListItem>
              <ListItem disablepadding>
                <ListItemIcon>
                  <Memory style={{color: "#28946e"}} />
                </ListItemIcon>
                <ListItemText primary="Next-gen technology" />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <Button className={classes.farmAIButton}>Read the whitepaper</Button>
          </Grid>
        </Grid>
        <Grid item container sm={6} xs={12} justify="flex-end">
          <Image src={farmingSky} width={300} style={{opacity: "0.9", borderRadius: "5px"}} alt="farming-hands" />
        </Grid>
      </Grid>
    </ContentBox>
  );
}
