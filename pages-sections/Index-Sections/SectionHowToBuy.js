import { useRef, useEffect, React } from "react";
// plugin that creates slider
// @mui components
import { makeStyles } from "@mui/styles";
// @mui/icons-material
// core components

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/howToBuyStyle.js";
import { Chip, Grid, Typography } from "@mui/material";
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
import UniswapWidget from "../../components/web3/UniswapWidget";
import ContentBox from "../../components/ContentBox/ContentBox";
import { Listing, ListingItem } from "../../components/Listing/Listing";
import { School , HourglassFull, MonetizationOn, Code, Face, Chat, Build, Assessment, Opacity} from "@mui/icons-material";
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CustomTabs from '../../components/CustomTabs/CustomTabs';
import { styled } from "@mui/system";
import ContractAddressInfo from "../../components/web3/ContractAddressInfo";


const Tokenomics = () => {
  const classes = useStyles();
  const tokenomics = {
    marketing: {
      buy: "3%",
      sell: "3%",
    },
    liquidity: {
      buy: "2%",
      sell: "2%",
    },
  }
  return (
    <div>
      <div>
        <div id="nav-tabs">
          <GridContainer>
            <GridItem xs={12} style={{padding: "0px 10px"}}>
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
                ]}
                summary={(
                  <Listing>
                    <ListingItem icon={<Assessment  style={{color: "rgb(52 143 171)"}} />} text={`${tokenomics.marketing.buy} Marketing`} />
                    <ListingItem icon={<Opacity  style={{color: "rgb(215 69 177)"}} />} text={`${tokenomics.liquidity.buy} Liquidity`} />
                  </Listing>
                )}
              />
            </GridItem>
            <GridItem xs={12} style={{padding: "0px 10px"}}>
            <CustomTabs
                headerColor="farmAITertiary"
                title="5% sell"
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
                ]}
                summary={(
                  <Listing>
                    <ListingItem icon={<Assessment  style={{color: "rgb(52 143 171)"}} />} text={`${tokenomics.marketing.sell} Marketing`} />
                    <ListingItem icon={<Opacity  style={{color: "rgb(215 69 177)"}} />} text={`${tokenomics.liquidity.sell} Liquidity`} />
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

const Charts = () => {
  const canvas = useRef();

  useEffect(() => {
    const ctx = canvas.current;

    let chartStatus = Chart.getChart('myChart');
      if (chartStatus != undefined) {
        chartStatus.destroy();
    }

    const chart = new Chart(ctx, {
      plugins: [ChartDataLabels],
      type: 'pie',
      data: {
        labels: ['CEX', 'DEX', 'Future Hires', 'Marketing and Development', 'Owners'],
        datasets: [
          {
            label: 'Percentage',
            data: [45, 20, 5, 10, 20],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: "#fff"
            }
          },
          datalabels: {
            formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map(data => {
                    sum += data;
                });
                let percentage = (value*100 / sum)+"%";
                return percentage;
            },
            color: '#fff',
         },
        },
      },
    });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{textAlign: "center"}}>
        <Chip sx={{backgroundColor: "#fff"}} label="1,000,000 Total Token Supply" />
      </Grid>
      <Grid item xs={12}>
      <div style={{display: "flex", justifyContent: "center", width: "100%", height: "50vh"}}>
        <canvas id="myChart" ref={canvas}></canvas>
      </div>
      </Grid>
    </Grid>
  );
}

const UniswapBuyButton = (props) => {
  const farmAITokenAddress = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
  const uniswapSwapAddress = `https://app.uniswap.org/#/tokens/ethereum/${farmAITokenAddress}`;

  return (
    <Button href={uniswapSwapAddress} target="_blank" {...props}>Buy on Uniswap</Button>
  )
}

const PresaleButton = (props) => {
  const presaleAddress = "https://www.pinksale.finance/launchpad/0x12f3739912a9fE439563567335ec8bdd0cB7EBE8?chain=ETH";

  return (
    <Button href={presaleAddress} target="_blank" {...props}>Enter presale on Pinksale</Button>
  )
}

export default function SectionHowToBuy() {
  const classes = useStyles();
  
  return (
    <ContentBox id="how-to-buy" title="How to buy">
      <Grid container justifyContent="center">
        <Grid item container xs={12} md={6} alignContent="flex-start">
          <Grid item>
            <h3 style={{marginTop: 0}}>Participating in FarmAI</h3>
            <p style={{fontSize: "1rem"}}>
              To take a step forward and get yourself a share of #FAI, you can invest into our token via the Uniswap widget or by clicking on the button below.
              We have a lot to provide for the future, so joining our community is key to staying updated and entering early allows to you to grow big profits over the course of our project.
              Want to get a small introduction into your benefits joining us? We got you.
            </p>
          </Grid>
          <div data-aos="fade-right" data-aos-duration="500" style={{width: "100%"}}>
            <Grid item>
                <Listing>
                  <ListingItem icon={<School  style={{color: "#28946e"}} />} text="Professional team with multiple years of experience" />
                  <ListingItem icon={<HourglassFull  style={{color: "#28946e"}} />} text="Long-term project that builds to stay" />
                  <ListingItem icon={<MonetizationOn  style={{color: "#28946e"}} />} text="Auto-liquidity to keep project healthy" />
                  <ListingItem icon={<Code  style={{color: "#28946e"}} />} text="In-house quality software development" />
                </Listing>
            </Grid>
            <Grid item xs={12} className={classes.centerSmall}>
              {
                process.env.NEXT_PUBLIC_PRESALE_ACTIVE === "true" ?
                 <PresaleButton className={classes.uniswapBuyButton} /> :
                 <UniswapBuyButton className={classes.uniswapBuyButton} />
              }
            </Grid>
            <Grid item xs={12} style={{marginTop: 10}}>
              <ContractAddressInfo />
            </Grid>
          </div>
        </Grid>
        <Grid item xs={0} sm={0} md={1} lg={2} />
        <Grid item xs={12} sm={8} md={5} lg={4} style={{marginTop: "1rem"}}>
          <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="300">
            <UniswapWidget />
            <p style={{textAlign: "center", fontSize: "1rem"}}>Uniswap exchange</p>
          </div>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={12} style={{marginBottom: "1rem"}}>
          <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="300">
            <h3>Tokenomics</h3>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
          <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="300">
            <Charts />
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
          <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="300">
            <Tokenomics />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </ContentBox>
  );
}
