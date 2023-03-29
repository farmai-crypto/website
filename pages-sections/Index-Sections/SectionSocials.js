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
import { GitHub, Telegram, Twitter, YouTube } from "@material-ui/icons";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/whatWeDoStyle.js";
import { Grid } from "@material-ui/core";
import SocialCard from "../../components/Social/SocialCard";
import ContentBox from "../../components/ContentBox/ContentBox";

const useStyles = makeStyles(styles);

export default function SectionSocials() {
  const classes = useStyles();
  
  return (
    <ContentBox id="socials" title="Socials">
      <Grid container spacing={2} justify="space-between">
        <Grid item xs={6} sm={3} lg={2}>
          <SocialCard location="https://twitter.com/FarmAiToken" style={{backgroundColor: "rgb(29, 155, 240)", borderRadius: "5px"}}>
            <Twitter style={{fontSize: "3rem", color: "#fff"}} />
          </SocialCard>
        </Grid>
        <Grid item xs={6} sm={3} lg={2}>
          <SocialCard location="https://t.me/FarmAiToken" title="Telegram" style={{backgroundColor: "#0088cc", borderRadius: "5px"}}>
            <Telegram style={{fontSize: "3rem", color: "#fff"}} />
          </SocialCard>
        </Grid>
        <Grid item xs={6} sm={3} lg={2}>
          <SocialCard location="https://twitter.com/FarmAiToken" style={{backgroundColor: "#c00", borderRadius: "5px"}}>
            <YouTube style={{fontSize: "3rem", color: "#fff"}} />
          </SocialCard>
        </Grid>
        <Grid item xs={6} sm={3} lg={2}>
          <SocialCard location="https://github.com/orgs/farmai-crypto" style={{backgroundColor: "#24292f", borderRadius: "5px"}}>
            <GitHub style={{fontSize: "3rem", color: "#fff"}} />
          </SocialCard>
        </Grid>
      </Grid>
    </ContentBox>
  );
}
