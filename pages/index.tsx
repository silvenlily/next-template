import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { mainWrapper } from "../components/css/global";

const Home: NextPage = () => {
  return (
    <div css={mainWrapper}>
      <Head>
        <title>NextTemplate</title>
        <meta name="description" content="a template for nextjs apps using recoil and emotion" />
      </Head>

      <main>nextjs template using recoil and emotion</main>
    </div>
  );
};

export default Home;
