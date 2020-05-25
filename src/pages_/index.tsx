import Head from "next/head";
import React from "react";

import { AppBar } from "@components/AppBar";
import { Header } from "@components/Header";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <AppBar />
    </div>
  );
};

export default Home;
