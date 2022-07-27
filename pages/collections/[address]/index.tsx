import type { NextPage, GetServerSideProps } from "next";
import { Box, Text, List, ListItem, Link, Stack } from "@chakra-ui/react";
import { Seo } from "../../../components/Seo";
import { PageHeading } from "../../../components/PageHeading";
import { Wrapper } from "../../../components/Wrapper";
import { TokenGrid } from "../../../components/TokenGrid";
import { Token } from "../../../components/Token";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      address: context?.query?.address,
    },
  };
};

interface CollectionPageProps {
  address: string;
}

const tokenCount = 12;

const Collection: NextPage<CollectionPageProps> = ({ address }) => {
  return (
    <>
      <Seo
        title={`${address} | NFT Viewer`}
        description={`The collection index page view for ${address}`}
      />
      <PageHeading
        title={"Collection"}
        lead={`This is the ${address} index page that would show all tokens in the collection if it were required`}
      />
      <Wrapper>
        <Box py="30px">
          <Stack spacing={6}>
            <Text>
              We need this page to construct the single token pages, so
              let&apos;s keep it in the hierarchy. Here are some example token
              numbers:
            </Text>
            <TokenGrid>
              {[...Array(tokenCount)].map((_, index) => (
                <Token key={index} address={address} id={index} />
              ))}
            </TokenGrid>
          </Stack>
        </Box>
      </Wrapper>
    </>
  );
};

export default Collection;
