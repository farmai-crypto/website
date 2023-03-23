/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/#what-we-do"
          color="transparent"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>assessment</Icon> What we do
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/#how-to-buy"
          color="transparent"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>paid</Icon> How to buy
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/#who-we-are"
          color="transparent"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>people</Icon> Who we are
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/#socials"
          color="transparent"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>public</Icon> Socials
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/#socials"
          color="transparent"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>description</Icon> Whitepaper
        </Button>
      </ListItem>
    </List>
  );
}
