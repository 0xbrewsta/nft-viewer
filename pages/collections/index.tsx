import type { NextPage } from "next";
import NextLink from "next/link";
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Stack,
} from "@chakra-ui/react";
import { Seo } from "../../components/Seo";
import { PageHeading } from "../../components/PageHeading";
import { Wrapper } from "../../components/Wrapper";
import { COLLECTION_ADDRESSES } from "../../constants";

const Collections: NextPage = () => {
  return (
    <>
      <Seo
        title="Collections | NFT Viewer"
        description="NFT viewing app that leverages LooksRare's GraphQL API"
      />
      <PageHeading
        title="Collections"
        lead="This is an index page that would show all collections if it were required"
      />
      <Wrapper>
        <Box py="30px">
          <Stack spacing={6}>
            <Text>
              We need this page to construct the single token pages, so
              let&apos;s keep it in the hierarchy. Here are some example
              contract addresses:
            </Text>
            <UnorderedList listStylePosition="inside">
              {COLLECTION_ADDRESSES.map((address) => (
                <ListItem key={address}>
                  <NextLink href={`/collections/${address}`} passHref>
                    <Link color="green.500">{address}</Link>
                  </NextLink>
                </ListItem>
              ))}
            </UnorderedList>
          </Stack>
        </Box>
      </Wrapper>
    </>
  );
};

export default Collections;
