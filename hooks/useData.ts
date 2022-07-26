import { useQuery } from "@tanstack/react-query";
import { GraphQLClient, gql } from "graphql-request";
import { GRAPHQL_API_ENDPOINT } from "../constants";

const client = new GraphQLClient(GRAPHQL_API_ENDPOINT);

const useGetToken = (collection: string, tokenId: string) => useQuery(["token", collection, tokenId], async () => {
    const token = await client.request(gql`
        query GetToken($collection:  Address!, $tokenId:  String!) {
            token(collection: $collection, tokenId: $tokenId) {
                tokenId
                name
                description
                image {
                    src
                }
            }
        }
    `,
    {collection, tokenId}
    );

    return token;
});

export { useGetToken };