import type { FunctionComponent } from "react";
import type { AppProps } from "next/app";
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "../modules/Layout";
import { ALCHEMY_API_KEY } from "../constants";

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: ALCHEMY_API_KEY }),
  publicProvider(),
]);

const web3Client = createClient({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "NFT Viewer",
      },
    }),
  ],
  provider,
  webSocketProvider,
});

const queryClient = new QueryClient();

const NftViewerApp: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}) => (
  <WagmiConfig client={web3Client}>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </QueryClientProvider>
  </WagmiConfig>
);

export default NftViewerApp;
