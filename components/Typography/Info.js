import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui components
import { makeStyles } from "@mui/styles";
// core components
import styles from "/styles/jss/nextjs-material-kit/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Info(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.infoText}>
      {children}
    </div>
  );
}

Info.propTypes = {
  children: PropTypes.node
};
