import type { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { useAccount } from "wagmi";
import {
  Box,
  Flex,
  Button,
  Stack,
  SimpleGrid,
  Text,
  Center,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Seo } from "../../../components/Seo";
import { PageHeading } from "../../../components/PageHeading";
import { Wrapper } from "../../../components/Wrapper";
import { useGetToken } from "../../../hooks/useData";
import { getShortAddress } from "../../../utils";

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

type Attribute = {
  id: string;
  traitType: string;
  value: string;
  displayType: string;
  count: string;
};

const TokenId: NextPage<TokenIdPageProps> = ({ address, tokenId }) => {
  const { data } = useGetToken(address, tokenId);
  const ownerAddress = data?.token?.owners[0]?.owner?.address;
  const { address: connectedAddress } = useAccount();
  const isOwnedByConnectedWallet = ownerAddress === connectedAddress;

  const pageHeading =
    data?.token?.collection?.name && data?.token?.tokenId
      ? `${data?.token?.collection?.name} #${data?.token?.tokenId}`
      : "";

  return (
    <>
      <Seo
        title={`${data?.token?.name} | NFT Viewer`}
        description="NFT viewing app that leverages LooksRare's GraphQL API"
      />
      <PageHeading title={pageHeading} lead={data?.token?.description} />
      <Wrapper>
        <Box py="30px">
          <Flex flexDirection={["column", "column", "column", "row"]}>
            <Stack spacing={6}>
              <Box
                position="relative"
                bg="gray.100"
                minHeight={["300px", "400px", "500px"]}
                minWidth={["300px", "400px", "500px"]}
              >
                {data?.token?.image?.src && (
                  <Center>
                    <Image
                      src={data?.token?.image?.src}
                      alt={data?.token?.name}
                      height={500}
                      width={500}
                      priority
                    />
                  </Center>
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
                {parseInt(tokenId) !==
                  parseInt(data?.token?.collection?.totalSupply) - 1 && (
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
                )}
              </Flex>
            </Stack>
            <Box
              pl={["0", "0", "0", "40px"]}
              pt={["40px", "40px", "40px", "0"]}
            >
              <Stack spacing={6}>
                <Stack spacing={1}>
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    textTransform="uppercase"
                  >
                    Name
                  </Text>
                  <Text fontWeight="bold" color="green.500">
                    {data?.token?.name}
                  </Text>
                </Stack>
                <Stack spacing={1}>
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    textTransform="uppercase"
                  >
                    Collection
                  </Text>
                  <Text fontWeight="bold" color="green.500">
                    {data?.token?.collection?.name}
                  </Text>
                </Stack>
                <Stack spacing={1}>
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    textTransform="uppercase"
                  >
                    Token ID
                  </Text>
                  <Text fontWeight="bold" color="green.500">
                    {data?.token?.tokenId}
                  </Text>
                </Stack>
                <Stack spacing={1}>
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    textTransform="uppercase"
                  >
                    Owner
                  </Text>
                  <Text fontWeight="bold" color="green.500">
                    {isOwnedByConnectedWallet ? (
                      <Link
                        href={`https://etherscan.io/address/${connectedAddress}`}
                        isExternal
                        target="_blank"
                      >
                        You!
                      </Link>
                    ) : (
                      <Link
                        href={`https://etherscan.io/address/${ownerAddress}`}
                        isExternal
                        target="_blank"
                      >
                        {getShortAddress(ownerAddress)}
                      </Link>
                    )}
                  </Text>
                </Stack>
                <Stack spacing={2}>
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    textTransform="uppercase"
                  >
                    Attributes
                  </Text>
                  <SimpleGrid columns={[2, 3, 4, 3, 4]} spacing={3}>
                    {data?.token?.attributes?.map((attribute: Attribute) => (
                      <Box
                        key={attribute?.id}
                        fontWeight="medium"
                        bg="gray.100"
                        justifyItems="center"
                        alignItems="center"
                        rounded="md"
                        p="10px"
                      >
                        <Text color="green.500" fontSize="sm">
                          {attribute?.traitType}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                          {attribute?.value}
                        </Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Wrapper>
    </>
  );
};

export default TokenId;
