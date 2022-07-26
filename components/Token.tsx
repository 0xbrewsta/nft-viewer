import type { FunctionComponent } from "react";
import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";

interface TokenProps {
  address: string;
  id: number;
}

const Token: FunctionComponent<TokenProps> = ({ address, id }) => (
  <Box bg="gray.100" p={["10px", "20px"]} rounded="5px" h="160px">
    <NextLink href={`/collections/${address}/${id}`} passHref>
      <Link color="green.500">{id}</Link>
    </NextLink>
  </Box>
);

export { Token };
