import type { FunctionComponent, ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "../modules/Header";
import { Footer } from "../modules/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <div>
    <Header />
    <Box as="main" py="20px">
      {children}
    </Box>
    <Footer />
  </div>
);

export { Layout };
