import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import Button from "/components/CustomButtons/Button.js";

import contentBoxStyle from "/styles/jss/farmai/components/contentBoxStyle.js";

const styles = {
  ...contentBoxStyle,
};
const useStyles = makeStyles(styles);


const ContentBox = ({className, children}) => {
  const classes = useStyles();
  
  return (
    <div className={[classes.container, className]}>
      {children}
    </div>
  );
}

export default ContentBox;