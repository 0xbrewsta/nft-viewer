import { useQuery } from "@tanstack/react-query";
import { GraphQLClient, gql } from "graphql-request";
import { GRAPHQL_API_ENDPOINT } from "../constants";

const client = new GraphQLClient(GRAPHQL_API_ENDPOINT);

const useGetToken = (collection: string, tokenId: string) => useQuery(["token-owners", collection, tokenId], async () => {
    const tokenOwner = await client.request(gql`
    query GetToken(
        $collection: Address!
        $tokenId: String!
        $ownerFilter: TokenOwnerInput
      ) {
        token(collection: $collection, tokenId: $tokenId) {
            tokenId
            name
            description
            image {
                src
            }
            attributes {
                ...AttributeFragment
            }
            owners(filter: $ownerFilter) {
                owner {
                    ...ExtendedOwnerFragment
                }
                balance
            }
            collection {
              name
              totalSupply
              floor {
                floorPrice
              }
            }
        }
      }
      
      fragment ExtendedOwnerFragment on User {
        address
        name
        avatar {
          image {
            src
            contentType
          }
        }
      }

      fragment AttributeFragment on Attribute {
        id
        traitType
        value
        displayType
        count
        floorOrder {
          price
        }
      }
    `,
    {collection, tokenId}
    );

    return tokenOwner;
});

export { useGetToken };