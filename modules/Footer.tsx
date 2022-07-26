import type { FunctionComponent, ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => (
  <Box as="footer" pt="120px" borderTop="1px" borderColor="gray.300">
    <Wrapper fullWidth>&copy; {new Date().getFullYear()} NFT Viewer</Wrapper>
  </Box>
);

export { Footer };
