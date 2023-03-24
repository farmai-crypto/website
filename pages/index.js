import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "/pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "/pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "/pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "/pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "/pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "/pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "/pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "/pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "/pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "/pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "/pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "/pages-sections/Components-Sections/SectionDownload.js";

import styles from "/styles/jss/nextjs-material-kit/pages/index.js";

// Custom font
import { Nunito } from "next/font/google";
import { Grid } from "@material-ui/core";
import SectionWhatWeDo from "../pages-sections/Index-Sections/SectionWhatWeDo";
import SectionHowToBuy from "../pages-sections/Index-Sections/SectionHowToBuy";
import SectionWhoWeAre from "../pages-sections/Index-Sections/SectionWhoWeAre";
import SectionServices from "../pages-sections/Index-Sections/SectionServices";
import SectionSocials from "../pages-sections/Index-Sections/SectionSocials";
const nunito = Nunito({ subsets: ['latin'], fallback: ['"Roboto", "Helvetica", "Arial", sans-serif']})

const useStyles = makeStyles(() => ({
  mainScreenBuyButton: {
    marginTop: "5vh",
    backgroundColor: "#25624ff0",
    '&:hover': {
      backgroundColor: '#48af8ff0',
    }
  },
  ...styles
}));

export default function Index(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <style jsx global>{`
        html body * {
          font-family: ${nunito.style.fontFamily};
        };
        html, body {
          scroll-behavior: smooth !important;
        }
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
                <Button className={classes.mainScreenBuyButton} href="/#how-to-buy">Buy now</Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <Grid container justify="center" className={classes.mainContent}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item sm={8} xs={10}>
              <SectionWhatWeDo />
              <SectionHowToBuy />
              <SectionWhoWeAre />
              <SectionSocials />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
