import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { Seo } from "../../components/Seo";
import { PageHeading } from "../../components/PageHeading";
import { Wrapper } from "../../components/Wrapper";

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
        <Box py="30px">Test</Box>
      </Wrapper>
    </>
  );
};

export default Collections;
