import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui components
import { makeStyles } from "@mui/styles";
// @mui/icons-material
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page

import styles from "/styles/jss/nextjs-material-kit/pages/index.js";

// Custom font
import { Nunito } from "next/font/google";
import { Grid, ThemeProvider, createTheme } from "@mui/material";
import SectionWhatWeDo from "../pages-sections/Index-Sections/SectionWhatWeDo";
import SectionHowToBuy from "../pages-sections/Index-Sections/SectionHowToBuy";
import SectionWhoWeAre from "../pages-sections/Index-Sections/SectionWhoWeAre";
import SectionSocials from "../pages-sections/Index-Sections/SectionSocials";
import SectionRoadmap from "../pages-sections/Index-Sections/SectionRoadmap";
const nunito = Nunito({ subsets: ['latin'], fallback: ['"Roboto", "Helvetica", "Arial", sans-serif']})

const useStyles = makeStyles(() => ({
  mainScreenBuyButton: {
    marginTop: "5vh"
  },
  ...styles
}));

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: nunito.style.fontFamily
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: nunito.style.fontFamily
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: nunito.style.fontFamily
        }
      }
    }
  }
});

const MainApp = ({props}) => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
        <style jsx global>{`
          html body * {
            font-family: ${nunito.style.fontFamily};
          };

        `}</style>
        <Header
          brand="Farm AI"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "farmai"
          }}
          {...rest}
        />
        <Parallax image="/img/bg/1.jpg">
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>AI-powered agriculture</h1>
                  <h3 className={classes.subtitle}>
                    Utilize technology to enhance farming - for everyone.
                  </h3>
                  <Button className={[classes.farmAIButton, classes.mainScreenBuyButton].join(" ")} href="/#how-to-buy">Buy now</Button>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <Grid container justifyContent="center" className={classes.mainContent}>
          <Grid item container justifyContent="center" xs={12}>
            <Grid item sm={9} xs={11}>
              <SectionWhatWeDo />
              <SectionHowToBuy />
              <SectionRoadmap />
              <SectionWhoWeAre />
              <SectionSocials />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
  )
}

export default function Index(props) {
  return (
    <ThemeProvider theme={theme}>
      <MainApp props={props} />
    </ThemeProvider>
  );
}
