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

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/howToBuyStyle.js";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

// Tokenomics data
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import Marketing from "/public/img/cards/marketing.svg";
import CustomTabs from "/components/CustomTabs/CustomTabs.js";
import FarmAICard from "../../components/Card/FarmAICard";
import UniswapWidget from "../../components/web3/UniswapWidget";

const Tokenomics = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Tokenomics</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Profile",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  },
                  {
                    tabName: "Messages",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    )
                  },
                  {
                    tabName: "Settings",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  }
                ]}
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
  
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <h2 id="how-to-buy" className={classes.title}>How to buy</h2>
      </Grid>
      <Grid item sm={4} xs={12}>
        <UniswapWidget />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" style={{textAlign: "center"}}>Uniswap exchange</Typography>
      </Grid>
      <Grid item container xs={12} spacing={2} justify="space-between">
        <Grid item xs={12}>
          <h3 style={{textAlign: "center"}}>Tokenomics</h3>
        </Grid>
        <Grid item sm={4} xs={12}>
          <FarmAICard title="5% marketing" image="/img/cards/marketing.svg">
            The marketing fees allow the team to increase awareness of our project by spreading the word about #FAI.
            Bigger marketing campaigns allow us to sky rocket and reach our project goals earlier and better.
          </FarmAICard>
        </Grid>
        <Grid item sm={4} xs={12}>
          <FarmAICard title="2% liquidity" image="/img/cards/liquidity.svg">
            Auto-liquidity ensures a healthy cash pool to harden the pool against strong withdrawals.
            The result is that your coins remain valuable even when many people sell.
          </FarmAICard>
        </Grid>
        <Grid item sm={4} xs={12}>
          <FarmAICard title="3% rewards" image="/img/cards/rewards.svg">
            Get a good bang for your buck.
            Including reward fees helps our holders to get something back for their investment and their trust into our project.
            Hint: The more you hold the more you get!
          </FarmAICard>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Token fees fulfill one purpose: To help token economy growing.
            We adjusted the tokenomics to our best knowledge in order to balance between token price stabilization, project evolvement 
            and investing incentives to ensure long-term health of our project and the investment of our holders.
            We will fine-tune the tokenomics from time to time in order to keep in sync with the current market situation and project performance.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
