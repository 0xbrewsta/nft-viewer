import type { FunctionComponent, ReactNode } from "react";
import { Box, Text, Link, Flex } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => (
  <Box
    as="footer"
    pt="120px"
    borderTop="1px"
    borderColor="gray.300"
    fontSize="sm"
  >
    <Wrapper fullWidth>
      <Flex justify="space-between">
        <Text>&copy; {new Date().getFullYear()} NFT Viewer</Text>
        <Text>
          Token data from{" "}
          <Link href="https://looksrare.org" target="_blank" color="green.500">
            LooksRare
          </Link>
        </Text>
      </Flex>
    </Wrapper>
  </Box>
);

export { Footer };
