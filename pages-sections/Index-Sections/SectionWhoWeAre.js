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

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/whoWeAreStyle.js";
import { Grid , Typography} from "@material-ui/core";
import Image from "next/image";
import MemberCard from "../../components/Card/MemberCard";
import ContentBox from "../../components/ContentBox/ContentBox";
import { Listing, ListingItem } from "../../components/Listing/Listing";
import Circle from "../../components/Icons/Circle";

const useStyles = makeStyles(styles);

const InactiveListItem = ({title}) => {
  return <ListingItem iconStyle={{minWidth: 0, paddingRight: "8px"}} icon={<Circle style={{fill: "rgb(110 107 100 / 60%)", width: "16px", height: "16px"}} />} style={{padding: 0}} textStyle={{fontSize: "10px"}} text={title} />
}

export default function SectionWhoWeAre() {
  const classes = useStyles();
  
  return (
    <ContentBox id="who-we-are" title="Who we are">
      <Grid container justify="center">
        <Grid item container justify="space-evenly" spacing={2}>
          <Grid item xs={6}>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">
              <MemberCard image="/img/people/kojo.png" title="Kojo">
                Project founder and CEO
              </MemberCard>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">
              <MemberCard image="/img/people/trickz.png" title="Dominik">
                Blockchain developer and CIO
                <Listing>
                  <InactiveListItem title="Prototype development" />
                  <InactiveListItem title="Top tier CEX Listings" />
                  <InactiveListItem title="Global Partnerships (Governments)" />
                  <InactiveListItem title="Continuous team expansion" />
                  <InactiveListItem title="Major Fundraisers (Top tier investors)" />
                </Listing>
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
