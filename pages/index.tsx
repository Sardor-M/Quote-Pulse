import Head from "next/head";
import Image from "next/image";

// Components
import {
  BackgorundCloudImage1,
  BackgorundCloudImage2,
  FooterContainer,
  FooterLink,
  GradientBackgroundCon,
  QuoteGeneratorButton,
  QuoteGeneratorContainer,
  QuoteGeneratorInnerContainer,
  QuoteGeneratorSubtitle,
  QuoteGeneratorText,
  QuoteGeneratorTitle,
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
      {/* Background */}
      <GradientBackgroundCon>
        {/* Quote Generator Modal Popup */}

        {/* Quote Generator */}
        <QuoteGeneratorContainer />
        <QuoteGeneratorInnerContainer>
          <QuoteGeneratorTitle>Quote-Pulse</QuoteGeneratorTitle>
          <QuoteGeneratorSubtitle>
            Are you looking for a quote? <br />
            Generate a random quote provided by the
            <FooterLink
              href="https://zenquotes.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZenQuotes API
            </FooterLink>
          </QuoteGeneratorSubtitle>
          <QuoteGeneratorButton>
            <QuoteGeneratorText
              onClick={() => setNumberOfQuotes(numberOfQuotes + 1)}
            >
              Generate a quote
            </QuoteGeneratorText>
          </QuoteGeneratorButton>
        </QuoteGeneratorInnerContainer>

        {/* Background Images */}
        <BackgorundCloudImage1 src={Cloud_1} alt="cloudyImage1" height="300" />
        <BackgorundCloudImage2 src={Cloud_2} alt="cloudyImage2" height="300" />
      </GradientBackgroundCon>

      {/* Footer */}
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
