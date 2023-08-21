import Head from "next/head";
import Image from "next/image";
import { GradientBackgroundCon } from "@/components/QuoteGenerator/QuoteGeneratorElem";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quote-Pulse</title>
        <meta name="description" content="A side project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackgroundCon>
        <div>Hello Quote-Pulse</div>
      </GradientBackgroundCon>
    </>
  );
}
