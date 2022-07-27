import type { FunctionComponent } from "react";
import NextLink from "next/link";
import { Flex, Link, Text } from "@chakra-ui/react";

interface TokenProps {
  address: string;
  id: number;
}

const Token: FunctionComponent<TokenProps> = ({ address, id }) => (
  <NextLink href={`/collections/${address}/${id}`} passHref>
    <Link color="green.500" _hover={{ textDecoration: "none" }}>
      <Flex
        justify="center"
        align="center"
        bg="gray.100"
        _hover={{ bg: "gray.200" }}
        p={["10px", "20px"]}
        rounded="5px"
        h="160px"
      >
        <Text fontSize="lg" fontWeight="bold">
          {id}
        </Text>
      </Flex>
    </Link>
  </NextLink>
);

export { Token };
