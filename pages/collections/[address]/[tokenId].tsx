import type { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import { Seo } from "../../../components/Seo";
import { PageHeading } from "../../../components/PageHeading";
import { Wrapper } from "../../../components/Wrapper";
import { useGetToken } from "../../../hooks/useData";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      address: context?.query?.address,
      tokenId: context?.query?.tokenId,
    },
  };
};

interface TokenIdPageProps {
  address: string;
  tokenId: string;
  token: object;
}

const TokenId: NextPage<TokenIdPageProps> = ({ address, tokenId }) => {
  const { isLoading, error, data } = useGetToken(address, tokenId);

  return (
    <>
      <Seo
        title={`${data?.token?.name} | NFT Viewer`}
        description="NFT viewing app that leverages LooksRare's GraphQL API"
      />
      <PageHeading title={data?.token?.name} lead={data?.token?.description} />
      <Wrapper>
        <Box py="30px">
          <Box
            h={["300px", "400px", "500px"]}
            w={["300px", "400px", "500px"]}
            position="relative"
          >
            <Image
              src={data?.token?.image?.src}
              alt={data?.token?.name}
              layout="fill"
            />
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};

export default TokenId;
