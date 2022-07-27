import type { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { Box, Flex, Button, Stack } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
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
  const { data } = useGetToken(address, tokenId);

  return (
    <>
      <Seo
        title={`${data?.token?.name} | NFT Viewer`}
        description="NFT viewing app that leverages LooksRare's GraphQL API"
      />
      <PageHeading title={data?.token?.name} lead={data?.token?.description} />
      <Wrapper>
        <Box py="30px">
          <Flex>
            <Stack spacing={6}>
              <Box
                h={["300px", "400px", "500px"]}
                w={["300px", "400px", "500px"]}
                position="relative"
                bg="gray.100"
              >
                {data?.token?.image?.src && (
                  <Image
                    src={data?.token?.image?.src}
                    alt={data?.token?.name}
                    height={500}
                    width={500}
                    priority
                  />
                )}
              </Box>
              <Flex justify="space-between">
                {parseInt(tokenId) > 0 && (
                  <Box mr="auto">
                    <NextLink
                      href={`/collections/${address}/${parseInt(tokenId) - 1}`}
                      passHref
                    >
                      <Button as="a" leftIcon={<ArrowBackIcon />}>
                        Previous token
                      </Button>
                    </NextLink>
                  </Box>
                )}
                <Box ml="auto">
                  <NextLink
                    href={`/collections/${address}/${parseInt(tokenId) + 1}`}
                    passHref
                  >
                    <Button as="a" rightIcon={<ArrowForwardIcon />}>
                      Next token
                    </Button>
                  </NextLink>
                </Box>
              </Flex>
            </Stack>
          </Flex>
        </Box>
      </Wrapper>
    </>
  );
};

export default TokenId;
