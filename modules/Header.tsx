import type { FunctionComponent } from "react";
import NextLink from "next/link";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { ConnectButton } from "../components/ConnectButton";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => (
  <Box as="header" borderBottom="1px" borderColor="gray.300" py="26px">
    <Wrapper fullWidth>
      <Flex alignItems="center" justify="space-between">
        <NextLink href="/" passHref>
          <Link>
            <Text fontSize="lg" textTransform="uppercase">
              NFT Viewer
            </Text>
          </Link>
        </NextLink>
        <ConnectButton />
      </Flex>
    </Wrapper>
  </Box>
);

export { Header };
