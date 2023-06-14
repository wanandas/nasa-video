import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Suspense } from "react";
import NextNprogress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NASA VIDEO</title>
        <meta
          name="description"
          content="THIS SITE FOR SHOWING VIDEO FROM NASA"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NextNprogress />
        <Suspense fallback={<p>Loading feed...</p>}>
          <Component {...pageProps} />
        </Suspense>
      </main>
    </>
  );
}
