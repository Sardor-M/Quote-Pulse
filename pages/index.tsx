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
  QuoteGeneratorButtonText,
  QuoteGeneratorContainer,
  QuoteGeneratorInnerContainer,
  QuoteGeneratorSubtitle,
  QuoteGeneratorTitle,
} from "@/components/QuoteGenerator/QuoteGeneratorElem";

// Assets
import Cloud_1 from "assets/cloud-image-here.png";
import Cloud_2 from "assets/cloud-image-new.png";

import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { quoteQueryName } from "@/src/graphql/queries";
import { QuoteQueryNameQuery } from "../src/API";
import { GraphQLResult } from "@aws-amplify/api-graphql";

// interfaces for the DynamoDB table
interface UpdateQuoteInfoData {
  id: string;
  queryName: string;
  quotesGenerated: number;
  createdAt: string;
  updatedAt: string;
}

// type guard for fetch function
function isGraphQLResultForQueryName(response: any): response is GraphQLResult<{
  quoteQueryName: {
    items: [UpdateItemInfoData];
  };
}> {
  return (
    response.data &&
    response.data.quoteQueryName &&
    response.data.quoteQueryName.items
  );
}

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  // a function to fetch our DynomoDB object (generated)
  const updateQuoteInfo = async () => {
    try {
      const response = await API.graphql<UpdateQuoteInfoData>({
        query: quoteQueryName,
        authMode: "AWS_IAM",
        variables: {
          queryName: "LIVE",
        },
      });
      // console.log(" Response from the query:", response);
      // setNumberOfQuotes(response.data.quoteQueryName.items[0].quotesGenerated);

      if (!isGraphQLResultForQueryName(response)) {
        throw new Error(
          "New Error is thrown as the response is not from API.graphQl."
        );
      }
      if (!response.data) {
        throw new Error("Response data is undefineds");
      }
      const recievedNumOfQuotes =
        response.data.quoteQueryName.items[0].quotesGenerated;
      setNumberOfQuotes(recievedNumOfQuotes);
    } catch (error) {
      console.log("Getting eror while fetching the quote data:", error);
    }
  };

  useEffect(() => {
    updateQuoteInfo();
  }, []);

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
        {/* Quote Generator */}
        <QuoteGeneratorContainer>
          <QuoteGeneratorInnerContainer>
            <QuoteGeneratorTitle>Quote-Pulse</QuoteGeneratorTitle>
            <QuoteGeneratorSubtitle>
              Are you looking for a quote? <br />
              Generate a random quote provided by the {""}
              <FooterLink
                href="https://zenquotes.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ZenQuotes API
              </FooterLink>
            </QuoteGeneratorSubtitle>
            <QuoteGeneratorButton
            // onClick={() => setNumberOfQuotes(numberOfQuotes + 1)}
            >
              <QuoteGeneratorButtonText>
                Generate a quote
              </QuoteGeneratorButtonText>
            </QuoteGeneratorButton>
          </QuoteGeneratorInnerContainer>
        </QuoteGeneratorContainer>

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
