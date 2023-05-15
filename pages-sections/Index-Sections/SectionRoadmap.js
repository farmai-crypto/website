import { useRef, useEffect, React } from "react";
// plugin that creates slider
// @mui components
import { makeStyles } from "@mui/styles";
// @mui/icons-material
// core components

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/howToBuyStyle.js";
import { Card, CardActionArea, CardContent, CardMedia, Chip, Divider, Grid, Typography } from "@mui/material";
import Button from "/components/CustomButtons/Button.js";

import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';


const allStyles = {
  uniswapBuyButton: {
    backgroundColor: "rgb(231 60 151 / 90%)",
    '&:hover, &:focus': {
      backgroundColor: 'rgb(169 45 111 / 90%)',
    }
  },
  centerSmall: {
    "@media(max-width: 900px)": {
      textAlign: "center"
    }
  },
  ...styles
}
const useStyles = makeStyles(allStyles);

// Tokenomics data
// @mui/icons-material
import FarmAICard from "../../components/Card/FarmAICard";
import UniswapWidget from "../../components/web3/UniswapWidget";
import ContentBox from "../../components/ContentBox/ContentBox";
import { Listing, ListingItem } from "../../components/Listing/Listing";
import { School , HourglassFull, MonetizationOn, Code, Face, Chat, Build, Assessment, Opacity, Check, Lens, HourglassEmpty} from "@mui/icons-material";
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CustomTabs from '../../components/CustomTabs/CustomTabs';
import HourglassBottom from "../../components/Icons/HourglassBottom";
import Circle from "../../components/Icons/Circle";

const CheckedListItem = ({title}) => {
  return <ListingItem icon={<Check style={{color: "#398756"}} />} style={{padding: 0}} text={title} />
}

const ActiveListItem = ({title}) => {
  return <ListingItem icon={<HourglassBottom style={{fill: "rgb(58 114 163 / 93%)"}} />} style={{padding: 0}} text={title} />
}

const InactiveListItem = ({title}) => {
  return <ListingItem icon={<Circle style={{fill: "rgb(110 107 100 / 60%)"}} />} style={{padding: 0}} text={title} />
}

const PhaseOne = () => {
  return (
    <Card style={{ maxWidth: 4000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/img/sections/roadmap/phase1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Phase 1
          </Typography>
          <Divider />
          <Listing>
            <CheckedListItem title="Presale and stealth launch" />
            <CheckedListItem title="Website launch" />
            <ActiveListItem title="Listing on coin sites" />
            <ActiveListItem title="Team expansion" />
            <ActiveListItem title="CMC and CG listings" />
            <InactiveListItem title="Aggressive CEX Listings" />
            <InactiveListItem title="Promos and Partnerships" />
          </Listing>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const PhaseTwo = () => {
  return (
    <Card style={{ height: "100%", opacity: "0.3" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/img/sections/roadmap/phase2.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Phase 2
          </Typography>
          <Divider />
          <Listing>
            <InactiveListItem title="Prototype development" />
            <InactiveListItem title="Top tier CEX Listings" />
            <InactiveListItem title="Global Partnerships (Governments)" />
            <InactiveListItem title="Continuous team expansion" />
            <InactiveListItem title="Major Fundraisers (Top tier investors)" />
          </Listing>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const PhaseThree = () => {
  return (
    <Card style={{ height: "100%", opacity: "0.3" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/img/sections/roadmap/phase3.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Phase 3
          </Typography>
          <Divider />
          <Listing>
            <InactiveListItem title="Igorous solutions testing with technology partners" />
            <InactiveListItem title="Beta release of first solutions" />
            <InactiveListItem title="Exhibitions at Global Tech Forums" />
            <InactiveListItem title="Partnerships with Agric equipment manufacturers" />
          </Listing>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function SectionRoadmap() {
  const classes = useStyles();
  const farmAITokenAddress = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
  const uniswapSwapAddress = `https://app.uniswap.org/#/tokens/ethereum/${farmAITokenAddress}`;
  
  return (
    <ContentBox id="how-to-buy" title="FarmAI's Roadmap">
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={8} lg={4}>
          <div data-aos="fade-up" data-aos-duration="400" data-aos-offset="200" data-aos-delay="200" style={{height: "100%"}}>
          <PhaseOne />
          </div>
        </Grid>
        <Grid item xs={12} sm={8} lg={4}>
          <div data-aos="fade-up" data-aos-duration="400" data-aos-offset="200" data-aos-delay="400" style={{height: "100%"}}>
            <PhaseTwo />
          </div>
        </Grid>
        <Grid item xs={12} sm={8} lg={4}>
          <div data-aos="fade-up" data-aos-duration="400" data-aos-offset="200" data-aos-delay="700" style={{height: "100%"}}>
            <PhaseThree />
          </div>
        </Grid>
      </Grid>
    </ContentBox>
  );
}
