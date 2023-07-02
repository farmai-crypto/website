
import { makeStyles } from "@mui/styles";
import { getPriorityConnector, initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";

import dynamic from 'next/dynamic'
const SwapWidget = dynamic(
  async(props) => {
  const res = await import('@uniswap/widgets');
  
  const Widget = res.SwapWidget;
  return Widget;
  },
  {ssr: false}
  )
const JSON_RPC_URLS = [
  'https://eth.llamarpc.com',
  'https://ethereum.publicnode.com',
  'https://rpc.payload.de',
  'https://eth.meowrpc.com'
];
const metaMask = () => {
  const [connector, hooks] = initializeConnector((actions) => new MetaMask(actions, false));
  return [connector, hooks];
}
const walletConnect = () => {
  const [connector, hooks] = initializeConnector(
    (actions) =>
      new WalletConnect(
        actions,
        { rpc: { 1: JSON_RPC_URLS[0]}, },
        false
      )
  );
  return [connector, hooks];
}

const connectors = [metaMask(), walletConnect()];

const activeProvider = () => {
  return getPriorityConnector(...connectors).usePriorityProvider();
}

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/uniswapWidgetStyle.js";
import styled from "@emotion/styled";
const useStyles = makeStyles(styles);

const PresaleWidgetContainer = ({children}) => {
  return (
    <div style={{position: "relative"}}>
      <div style={{
        zIndex: 1, position: "absolute", 
        height: "100%", width: "100%", 
        background: "rgb(0 0 0 / 70%)", 
        display: "flex", justifyContent: "center", alignItems: "center"}}>
        <p style={{textAlign: "center", fontWeight: "bold"}}>
          The Uniswap Widget will be available after presale ended.<br />
          For now, join our community by grabbing yourself an early bag!
        </p>
      </div>
      {children}
    </div>
  )
}

const UniswapWidget = (props) => {
  const classes = useStyles();
  const provider = activeProvider();
  const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org';
  const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984';
  const presaleRunning = process.env.NEXT_PUBLIC_PRESALE_ACTIVE === "true";
  const Widget = () => <SwapWidget
    jsonRpcUrlMap={{1: JSON_RPC_URLS}}
    tokenList={TOKEN_LIST}
    provider={provider}
    /*locale={locale}
    onConnectWallet={focusConnectors}*/
    defaultInputTokenAddress="NATIVE"
    defaultInputAmount="1"
    defaultOutputTokenAddress={UNI}
    className={classes.widget}
    {...props}
    />

  if(presaleRunning)
    return (
      <PresaleWidgetContainer>
        <Widget />
      </PresaleWidgetContainer>
    )
  else
    return <Widget />
}

export default UniswapWidget;