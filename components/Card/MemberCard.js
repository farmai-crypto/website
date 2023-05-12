import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import Button from "/components/CustomButtons/Button.js";

import imagesStyles from "/styles/jss/nextjs-material-kit/imagesStyles.js";

import { cardTitle } from "/styles/jss/nextjs-material-kit.js";
import { Grid } from "@material-ui/core";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function MemberCard({image, title, children}) {
  const classes = useStyles();
  return (
    <Card>
      <Grid container>
        <Grid item xs={6}>
          <img
          style={{height: "320px", display: "block", backgroundColor: "rgb(80 145 191)", padding: "10px", objectFit: "contain"}}
          className={classes.imgCardTop}
          src={image}
          alt="Card-img-cap"
        />
        </Grid>
        <Grid item xs={6}>
          <CardBody>
            <h4 className={classes.cardTitle}>{title}</h4>
            <p>{children}</p>
          </CardBody>
        </Grid>
      </Grid>
    </Card>
  );
}