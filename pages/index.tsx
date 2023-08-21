import Head from "next/head";
import Image from "next/image";

// Components
import {
  BackgorundCloudImage1,
  BackgorundCloudImage2,
  FooterContainer,
  FooterLink,
  GradientBackgroundCon,
} from "@/components/QuoteGenerator/QuoteGeneratorElem";

// Assets
import Cloud_1 from "assets/cloud-image-here.png";
import Cloud_2 from "assets/cloud-image-new.png";

import { useState } from "react";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <>
      <Head>
        <title>Quote-Pulse</title>
        <meta name="description" content="A side project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackgroundCon>
        <BackgorundCloudImage1 src={Cloud_1} alt="cloudyImage1" height="300" />
        <BackgorundCloudImage2 src={Cloud_2} alt="cloudyImage2" height="300" />
      </GradientBackgroundCon>
      <FooterContainer>
        <>
          Quotes generated: {numberOfQuotes}
          <br />
          Developed with ❤️ by{" "}
          <FooterLink
            href="https://github.com/sardor-m"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Sardor-M
          </FooterLink>
        </>
      </FooterContainer>
    </>
  );
}
