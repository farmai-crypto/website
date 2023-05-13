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

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/whoWeAreStyle.js";
import { Grid , Stack, Typography} from "@mui/material";
import Image from "next/image";
import MemberCard from "../../components/Card/MemberCard";
import ContentBox from "../../components/ContentBox/ContentBox";
import { Listing, ListingItem } from "../../components/Listing/Listing";
import Circle from "../../components/Icons/Circle";
import { Grade, School, Star, Whatshot } from "@mui/icons-material";

const useStyles = makeStyles(styles);

const BaseListItem = ({icon, title}) => {
  return <ListingItem iconStyle={{minWidth: 0, paddingRight: "8px"}} icon={icon} textStyle={{fontSize: "0.9rem"}} text={title} />
}

const MemberCapabilityListItem = ({title}) => {
  return <BaseListItem icon={<Star style={{fill: "rgb(203 137 55)", width: "16px", height: "16px"}} />} title={title} />
}

const MemberQuote = ({quote, name}) => {
  return (
    <Stack direction="row">
      <span>
        <span style={{fontStyle: "italic"}}>{quote}</span> - {name}
      </span>
    </Stack>
  )
}

export default function SectionWhoWeAre() {
  return (
    <ContentBox id="who-we-are" title="Team">
      <Grid container justifyContent="center">
        <Grid item container justifyContent="space-evenly" spacing={2}>
          <Grid item xs={12} sm={6}>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">
              <MemberCard image="/img/people/kojo.png" title="Kojo">
                <p>Project founder and CEO</p>
                <Listing>
                  <MemberCapabilityListItem title="Fact about Kojo #1" />
                  <MemberCapabilityListItem title="Fact about Kojo #2" />
                  <MemberCapabilityListItem title="Fact about Kojo #3" />
                  <MemberCapabilityListItem title="Fact about Kojo #4" />
                  <MemberCapabilityListItem title="Fact about Kojo #5" />
                </Listing>
                <MemberQuote quote="Fancy quote" name="Kojo" />
              </MemberCard>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">
              <MemberCard image="/img/people/trickz.png" title="Dominik">
                <p>Blockchain developer and CIO</p>
                <Listing>
                  <MemberCapabilityListItem title="+3 years experience in crypto" />
                  <MemberCapabilityListItem title="+12 years experience in software development" />
                  <MemberCapabilityListItem title="Tech nerd" />
                  <MemberCapabilityListItem title="Website & Smart Contract developer" />
                  <MemberCapabilityListItem title="Farm AI core team" />
                </Listing>
                <MemberQuote quote="Fancy quote" name="Dominik" />
              </MemberCard>
            </div>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>You can count on many years of experience in the crypto field from our side which is why we thought of bringing it together within this project.</Typography>
          <Typography>Our combined force of deep blockchain knowledge as well as the possibility to develop everything on our own will lead us to success.</Typography>
        </Grid>
      </Grid>
    </ContentBox>
  );
}
