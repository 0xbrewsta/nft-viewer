import type { FunctionComponent } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../modules/Layout";

const NftViewerApp: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}) => (
  <ChakraProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default NftViewerApp;
