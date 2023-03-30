import React from "react";
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/howToBuyStyle.js";
import { Grid, Typography } from "@material-ui/core";
import Button from "/components/CustomButtons/Button.js";

const allStyles = {
  uniswapBuyButton: {
    backgroundColor: "rgb(231 60 151 / 90%)",
    '&:hover, &:focus': {
      backgroundColor: 'rgb(169 45 111 / 90%)',
    }
  },
  ...styles
}
const useStyles = makeStyles(allStyles);

// Tokenomics data
// @material-ui/icons
import FarmAICard from "../../components/Card/FarmAICard";
import UniswapWidget from "../../components/web3/UniswapWidget";
import ContentBox from "../../components/ContentBox/ContentBox";
import { Listing, ListingItem } from "../../components/Listing/Listing";
import { School , HourglassFull, MonetizationOn, Code, Face, Chat, Build, Assessment, Opacity} from "@material-ui/icons";
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CustomTabs from '../../components/CustomTabs/CustomTabs';


const Tokenomics = () => {
  const classes = useStyles();
  const tokenomics = {
    marketing: {
      buy: "3%",
      sell: "6%",
    },
    liquidity: {
      buy: "1%",
      sell: "2%",
    },
    rewards: {
      buy: "1%",
      sell: "2%",
    },
  }
  return (
    <div>
      <div>
        <div id="nav-tabs">
          <h3>Tokenomics</h3>
          <GridContainer>
            <GridItem xs={12} md={6}>
              <CustomTabs
                headerColor="farmAISecondary"
                title="5% buy"
                tabs={[
                  {
                    tabName: `${tokenomics.marketing.buy} Marketing`,
                    tabIcon: Assessment,
                    tabContent: (
                      <p className={classes.textCenter}>
                        The marketing fees allow the team to increase awareness of our project by spreading the word about <strong>#FAI</strong>. 
                        Bigger marketing campaigns allow us to sky rocket and reach our project goals earlier and better.
                      </p>
                    )
                  },
                  {
                    tabName: `${tokenomics.liquidity.buy} Liquidity`,
                    tabIcon: Opacity,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Auto-liquidity ensures a healthy money pool to harden the pool against strong withdrawals. 
                        The result is that your coins remain valuable - even when many people sell.
                      </p>
                    )
                  },
                  {
                    tabName: `${tokenomics.rewards.buy} Rewards`,
                    tabIcon: MonetizationOn,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Get a good bang for your buck. Including reward fees helps our holders to get something back for their investment and their trust into our project.<br />
                        <strong>Hint: The more you hold the more you get!</strong>
                      </p>
                    )
                  }
                ]}
                summary={(
                  <Listing>
                    <ListingItem icon={<Assessment  style={{color: "rgb(52 143 171)"}} />} text={`${tokenomics.marketing.buy} Marketing`} />
                    <ListingItem icon={<Opacity  style={{color: "rgb(215 69 177)"}} />} text={`${tokenomics.liquidity.buy} Liquidity`} />
                    <ListingItem icon={<MonetizationOn  style={{color: "rgb(223 188 60)"}} />} text={`${tokenomics.rewards.buy} Rewards`} />
                  </Listing>
                )}
              />
            </GridItem>
            <GridItem xs={12} md={6}>
            <CustomTabs
                headerColor="farmAITertiary"
                title="10% sell"
                tabs={[
                  {
                    tabName: `${tokenomics.marketing.sell} Marketing`,
                    tabIcon: Assessment,
                    tabContent: (
                      <p className={classes.textCenter}>
                        The marketing fees allow the team to increase awareness of our project by spreading the word about <strong>#FAI</strong>. 
                        Bigger marketing campaigns allow us to sky rocket and reach our project goals earlier and better.
                      </p>
                    )
                  },
                  {
                    tabName: `${tokenomics.liquidity.sell} Liquidity`,
                    tabIcon: Opacity,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Auto-liquidity ensures a healthy money pool to harden the pool against strong withdrawals. 
                        The result is that your coins remain valuable - even when many people sell.
                      </p>
                    )
                  },
                  {
                    tabName: `${tokenomics.rewards.sell} Rewards`,
                    tabIcon: MonetizationOn,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Get a good bang for your buck. Including reward fees helps our holders to get something back for their investment and their trust into our project.<br />
                        <strong>Hint: The more you hold the more you get!</strong>
                      </p>
                    )
                  }
                ]}
                summary={(
                  <Listing>
                    <ListingItem icon={<Assessment  style={{color: "rgb(52 143 171)"}} />} text={`${tokenomics.marketing.sell} Marketing`} />
                    <ListingItem icon={<Opacity  style={{color: "rgb(215 69 177)"}} />} text={`${tokenomics.liquidity.sell} Liquidity`} />
                    <ListingItem icon={<MonetizationOn  style={{color: "rgb(223 188 60)"}} />} text={`${tokenomics.rewards.sell} Rewards`} />
                  </Listing>
                )}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default function SectionHowToBuy() {
  const classes = useStyles();
  const farmAITokenAddress = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
  const uniswapSwapAddress = `https://app.uniswap.org/#/tokens/ethereum/${farmAITokenAddress}`;
  
  return (
    <ContentBox id="how-to-buy" title="How to buy">
      <Grid container justify="center">
        <Grid item sm={6} xs={12}>
          <h3 style={{marginTop: 0}}>Participating in FarmAI</h3>
          <p style={{fontSize: "1rem"}}>
            To take a step forward and get yourself a share of #FAI, you can invest into our token via the Uniswap widget or by clicking on the button below.
            We have a lot to provide for the future, so joining our community is key to staying updated and entering early allows to you to grow big profits over the course of our project.
            Want to get a small introduction into your benefits joining us? <br />
            We got you.
          </p>
          <Listing>
            <ListingItem icon={<School  style={{color: "#28946e"}} />} text="Professional team with multiple years of experience" />
            <ListingItem icon={<HourglassFull  style={{color: "#28946e"}} />} text="Long-term project that builds to stay" />
            <ListingItem icon={<MonetizationOn  style={{color: "#28946e"}} />} text="Automatic reward system benefiting holders for their investment" />
            <ListingItem icon={<Code  style={{color: "#28946e"}} />} text="In-house quality software development" />
          </Listing>
          <Button className={classes.uniswapBuyButton} href={uniswapSwapAddress} target="_blank">Buy on Uniswap</Button>
        </Grid>
        <Grid item xs={2} />
        <Grid item sm={4} xs={12}>
          <UniswapWidget />
          <p style={{textAlign: "center", fontSize: "1rem"}}>Uniswap exchange</p>
        </Grid>
        <Grid item xs={12}>
          <Tokenomics />
        </Grid>
      </Grid>
    </ContentBox>
  );
}
