import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Seo } from "../components/Seo";

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="NFT Viewer"
        description="NFT viewing app that leverages LooksRare's GraphQL API"
      />
      <h1>Home</h1>
    </>
  );
};

export default Home;
