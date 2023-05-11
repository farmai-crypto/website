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

import { Listing, ListingItem } from "../../components/Listing/Listing";
import Ethereum from "../../components/Icons/Ethereum";
import Monitoring from "../../components/Icons/Monitoring";

const allStyles = {
  centerSmall: {
    "@media(max-width: 600px)": {
      margin: "auto"
    }
  },
  ...styles
}
const useStyles = makeStyles(allStyles);

const InitFadeOnScroll = (threshold) => {
  var runFadeAnimation = true;

  $(document).ready(() => {
    $(window).on("scroll", () => {
      let container = document.getElementById("img-farm-sky");
      let offsetTop = container.getBoundingClientRect().top;

      if(offsetTop <= threshold && runFadeAnimation){
        runFadeAnimation = false;
        alert("NOW");
      }
    });
  });
}

export default function SectionWhatWeDo() {
  const classes = useStyles();
  
  return (
    <ContentBox id="what-we-do" title="Farming meets AI" className={[classes.mainContainer, "what-we-do"].join(" ")}>
      <Grid container spacing={2} className={classes.container}>
        <Grid container item sm={7} lg={8} xs={12}>
          <Grid item xs={12}>
            <p style={{fontSize: "1rem"}}>
            Farm AI is an AI-focused technology company that is committed to revolutionizing agriculture through the use of data-driven insights powered by artificial intelligence solutions.
            Our goal is to help farmers make smarter decisions that lead to higher yields, reduced costs, and increased sustainability.
            With the global population on the rise, it has become more important than ever to find innovative solutions that can feed our growing world while protecting our planet.
            <br /><br />
            Our team of experts have a deep understanding of the challenges facing modern agriculture and we are dedicated to finding solutions that can help farmers achieve their goals.
            Through AI-powered tools, Farm AI Solutions will empower farmers to monitor their crop health, predict growth accuracy, diagnose diseases, promote efficient water usage, and optimize farming schedules according to weather data.
            By providing farmers with access to these insights, we help them to make more informed decisions that drive down costs and maximize yields.
            <br /><br />
            To further enhance the value of our ecosystem, we will integrate blockchain technology to provide a secure and transparent way to store and share data.
            Our focus on data management, traceability, automated contract signing, supply chain management, and improved means of payment through our native cryptocurrency token, $FAI, enables us to create a trustworthy and efficient ecosystem for all participants.
            <br /><br />
            With $FAI, we are creating a new paradigm in agriculture, incentivizing contributors through a governance model that rewards long-term participation and contributes to the growth and sustainability of the ecosystem.
            Our ecosystem is built on trust, transparency, and collaboration, and we are excited to be at the forefront of this revolutionary change.
            </p>
          </Grid>
          <Grid item xs={12}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="500">
                <Listing>
                  <ListingItem icon={<Landscape style={{color: "#28946e"}} />} text="Autonomous agriculture" />
                  <ListingItem icon={<Memory style={{color: "#28946e"}} />} text="Next-gen technology" />
                  <ListingItem icon={<Monitoring style={{color: "#28946e", fill: "currentColor"}} />} text="Blockchain-based data management" />
                  <ListingItem icon={<Ethereum style={{color: "#28946e", fill: "currentColor"}} />} text="Blockchain-based payment solution $FAI" />
                </Listing>
              </div>
            </List>
          </Grid>
          <Grid item className={classes.centerSmall}>
            <div data-aos="fade-right" data-aos-duration="500">
              <Button className={classes.farmAIButton}>Read the whitepaper</Button>
            </div>
          </Grid>
        </Grid>
        <Grid item container sm={5} lg={4} xs={12} justify="flex-end">
          <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="500">
            <Image src={farmingSky} id="img-farm-sky" width={300} style={{opacity: "0.9", borderRadius: "5px", maxWidth: "100%"}} alt="farming-hands" className={classes.centerSmall} />
          </div>
        </Grid>
      </Grid>
    </ContentBox>
  );
}
