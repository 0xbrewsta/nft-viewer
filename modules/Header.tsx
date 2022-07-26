import type { FunctionComponent } from "react";
import NextLink from "next/link";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { ConnectWalletButton } from "../components/ConnectWalletButton";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => (
  <Box as="header" borderBottom="1px" borderColor="gray.300" py="26px">
    <Wrapper fullWidth>
      <Flex alignItems="center" justify="space-between">
        <NextLink href="/" passHref>
          <Link _hover={{ textDecoration: "none" }}>
            <Text fontSize="lg" textTransform="uppercase" fontWeight="medium">
              👀💎 NFT Viewer
            </Text>
          </Link>
        </NextLink>
        <ConnectWalletButton />
      </Flex>
    </Wrapper>
  </Box>
);

export { Header };
