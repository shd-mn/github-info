import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "@/components/header";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Github Info</title>
        <meta name="description" content="Find github user info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {children}
    </>
  );
}

export default Layout;
