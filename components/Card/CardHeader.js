import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui components
import { makeStyles } from "@mui/styles";
// @mui/icons-material

// core components
import styles from "/styles/jss/nextjs-material-kit/components/cardHeaderStyle.js";

const useStyles = makeStyles(styles);

export default function CardHeader(props) {
  const classes = useStyles();
  const { className, children, color, plain, ...rest } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [className]: className !== undefined
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary", "farmAISecondary", "farmAITertiary"]),
  plain: PropTypes.bool,
  children: PropTypes.node
};
