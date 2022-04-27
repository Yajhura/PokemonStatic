import Head from "next/head";
import React, { ReactNode } from "react";
import { Navbar } from "../ui";

type Props = {
  children: ReactNode;
  title?: string;
};

export const Layout = ({ children, title }: Props) => {
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "";

  const ulrPrincipal = origin;
  return (
    <>
      <Head>
        <title>{title || "Pokemon app"}</title>
        <meta name="author" content="Yajhura" />
        <meta name="description" content="info de pokemones" />
        <meta name="keywords" content="XXX. pokemon,pokedex" />
        <meta property="og:title" content={`Information about ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${ulrPrincipal}/img/banner.png`} />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
