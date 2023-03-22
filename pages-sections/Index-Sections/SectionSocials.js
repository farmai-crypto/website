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
import { Telegram, Twitter } from "@material-ui/icons";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/whatWeDoStyle.js";
import { Grid } from "@material-ui/core";
import SocialCard from "../../components/Social/SocialCard";

const useStyles = makeStyles(styles);

export default function SectionSocials() {
  const classes = useStyles();
  
  return (
    <Grid container>
      <Grid item xs={12}>
        <h2 id="socials" className={classes.title}>Socials</h2>
      </Grid>
      <Grid item>
        <SocialCard location="Twitter" style={{backgroundColor: "rgb(29, 155, 240)", borderRadius: "5px"}}>
          <Twitter style={{fontSize: "4rem", color: "#fff"}} />
        </SocialCard>
        <SocialCard location="Twitter" style={{backgroundColor: "#0088cc", borderRadius: "5px"}}>
          <Telegram style={{fontSize: "4rem", color: "#fff"}} />
        </SocialCard>
      </Grid>
    </Grid>
  );
}
