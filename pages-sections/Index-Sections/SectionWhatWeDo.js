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
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";

import farmingHands from "/public/img/sections/what-we-do/farm-hands.jpg";

const useStyles = makeStyles(styles);

export default function SectionWhatWeDo() {
  const classes = useStyles();
  
  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={12}>
        <h2 id="what-we-do" className={classes.title}>Farming meets AI</h2>
      </Grid>
      <Grid item container sm={6} xs={12} justify="flex-end">
        <Image src={farmingHands} width={300} alt="farming-hands" />
      </Grid>
      <Grid item sm={6} xs={12}>
        <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut porttitor augue, non iaculis diam. Mauris venenatis orci vitae ex maximus accumsan. Cras non dolor tortor. Proin sed viverra sapien. Pellentesque fermentum finibus finibus. Integer vulputate quam eget scelerisque condimentum. In auctor urna augue, sit amet feugiat massa pulvinar at. Donec gravida odio a justo convallis efficitur. Vivamus imperdiet varius ante vel feugiat. Vivamus eget sapien viverra, tempor arcu id, egestas elit. Sed in nibh vehicula risus dictum cursus vitae eu dui. Pellentesque cursus ut magna eu pellentesque. Mauris id neque eu sem auctor convallis congue quis nisi.
          </Typography>
      </Grid>
    </Grid>
  );
}
