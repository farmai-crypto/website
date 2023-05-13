/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @mui components
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// @mui/icons-material
import { Apps, CloudDownload } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

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
          href="/files/whitepaper.pdf"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>description</Icon> Whitepaper
        </Button>
      </ListItem>
    </List>
  );
}
