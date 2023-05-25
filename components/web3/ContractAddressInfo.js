
import { ContentCopy } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Notification from "../Notification/Notification";

const styles = {
  faiTextField: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff!important',
      },
      '& input': {
        color: "#fff",
        "-webkit-text-fill-color": "#fff"
      },
    },
    '& .MuiInputLabel-root': {
      color: "#fff"
    }
  },
  faiCopyButton: {
    color: "#fff"
  }
};
const useStyles = makeStyles(styles);

const ContractAddressInfo = (props) => {
  const classes = useStyles();
  const tokenAddress = "0x94553328D8A3189B6f47AA85cB77D03d76566148";
  const [state, setState] = React.useState({
    open: false,
    message: "Notification",
    vertical: 'bottom',
    horizontal: 'center',
  });

  const onCopyClick = () => {
    navigator.clipboard.writeText(tokenAddress);
    setState({ ...state, open: true, message: "Address copied to clipboard!"});
  }


  return (
    <Grid container>
      <Grid item xs={9} sm={10}>
        <TextField 
          id="outlined-basic" 
          label="Token address" 
          variant="outlined"
          InputLabelProps={{ shrink: true }} 
          value={tokenAddress}
          fullWidth 
          disabled 
          style={{color: "#fff"}}
          className={classes.faiTextField}
          />
      </Grid>
      <Grid item>
        <IconButton aria-label="copy" size="large" className={classes.faiCopyButton} onClick={onCopyClick}>
          <ContentCopy fontSize="inherit" />
        </IconButton>
      </Grid>
      <Grid item>
        <Notification state={state} setState={setState} />
      </Grid>
    </Grid>
  )
}

export default ContractAddressInfo;