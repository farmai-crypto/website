import { SwapWidget } from "@uniswap/widgets";
import { getPriorityConnector, initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";

const JSON_RPC_URL = 'https://cloudflare-eth.com';
const metaMask = () => {
  const [connector, hooks] = initializeConnector((actions) => new MetaMask(actions, false));
  return [connector, hooks];
}
const walletConnect = () => {
  const [connector, hooks] = initializeConnector(
    (actions) =>
      new WalletConnect(
        actions,
        {
          rpc: { 1: JSON_RPC_URL },
        },
        false
      )
  );
  return [connector, hooks];
}

const connectors = [metaMask(), walletConnect()];

const activeProvider = () => {
  return getPriorityConnector(...connectors).usePriorityProvider();
}

const UniswapWidget = () => {
  const provider = activeProvider();
  const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org';
  const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984';

  return (
    <SwapWidget
      jsonRpcEndpoint={JSON_RPC_URL}
      tokenList={TOKEN_LIST}
      provider={provider}
      /*locale={locale}
      onConnectWallet={focusConnectors}*/
      defaultInputTokenAddress="NATIVE"
      defaultInputAmount="1"
      defaultOutputTokenAddress={UNI} />
  );
}

export default UniswapWidget;