import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import Button from "/components/CustomButtons/Button.js";

import imagesStyles from "/styles/jss/nextjs-material-kit/imagesStyles.js";

import { cardTitle } from "/styles/jss/nextjs-material-kit.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function FarmAICard({image, title, children}) {
  const classes = useStyles();
  return (
    <Card>
      <img
        style={{height: "80px", width: "100%", display: "block", backgroundColor: "#666", padding: "10px"}}
        className={classes.imgCardTop}
        src={image}
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>{title}</h4>
        <p>{children}</p>
      </CardBody>
    </Card>
  );
}