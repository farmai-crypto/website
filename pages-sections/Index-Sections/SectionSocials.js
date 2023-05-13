import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @mui components
import { makeStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import Switch from "@mui/material/Switch";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
import People from "@mui/icons-material/People";
import Check from "@mui/icons-material/Check";
import FiberManualRecord from "@mui/icons-material/FiberManualRecord";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import CustomLinearProgress from "/components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "/components/Pagination/Pagination.js";
import Badge from "/components/Badge/Badge.js";
import { GitHub, Telegram, Twitter, YouTube } from "@mui/icons-material";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/whatWeDoStyle.js";
import { Grid } from "@mui/material";
import SocialCard from "../../components/Social/SocialCard";
import ContentBox from "../../components/ContentBox/ContentBox";

const useStyles = makeStyles(styles);

export default function SectionSocials() {
  const classes = useStyles();
  
  return (
    <ContentBox id="socials" title="Socials">
      <Grid container spacing={2} justifyContent="space-between">
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
