const GRAPHQL_API_ENDPOINT = "https://graphql.looksrare.org/graphql";

const COLLECTION_ADDRESSES = [
    "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
    "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623",
];

const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

export { GRAPHQL_API_ENDPOINT, COLLECTION_ADDRESSES, ALCHEMY_API_KEY };