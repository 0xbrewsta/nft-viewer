import type { FunctionComponent } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "../modules/Layout";

const queryClient = new QueryClient();

const NftViewerApp: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </QueryClientProvider>
);

export default NftViewerApp;
