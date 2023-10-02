/* Amplify Params - DO NOT EDIT
	API_QUOTEGEN_GRAPHQLAPIIDOUTPUT
	API_QUOTEGEN_QUOTEAPPTESTTABLE_ARN
	API_QUOTEGEN_QUOTEAPPTESTTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

// AWS packages
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

// Image processing packages
const sharp = require("sharp");
const fetch = require("node-fetch");
const path = require("path");
const fs = require("fs");

// Function to update the DynomoDb table
async function updateDynomoDBObject() {
  const quoteTableName = process.env.API_QUOTEGEN_QUOTEAPPTESTTABLE_NAME;
  const quoteObejectID = "14563-343532-454353526-436245258";

  try {
    var quoteParams = {
      TableName: quoteTableName,
      Key: {
        id: quoteObejectID,
      },
      UpdateExpression: "SET #quotesGenerated = #quotesGenerated + :inc",
      ExpressionAttributeValues: {
        ":inc": 1,
      },
      ExpressionAtributeNames: {
        "#quotesGenerated": "quotesGenerated",
      },
      ReturnValues: "UPDATED_NEW",
    };
    const updateQuoteObject = await docClient.update(quoteParams).promise();
    return updateQuoteObject;
  } catch (error) {
    console.log(
      "Error is catched in updating the quote object in DynomoDB",
      error
    );
  }
}

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const apiURL = "https://zenquotes.io/api/random";

  // Generatea quote image using sharp

  async function getRandomQuote(apiURLInput) {
    // my quote is ..
    let quoteText;
    // author name here
    let quoteAuthor;

    // validate response to the api
    const response = await fetch(apiURLInput);
    var quoteData = await response.json();
    console.log(quoteData);

    // quote elements
    quoteText = quoteData[0].q;
    quoteAuthor = quoteData[0].a;

    // image construction
    const width = 750;
    const height = 483;
    const text = quoteText;
    const words = text.split("");
    const lineBreak = 4;
    let newText = "";

    // define some tspan elements 4 words each
    let tspanElements = "";
    for (let i = 0; i < words.length; i++) {
      newText += words[i] + " ";
      if ((i + 1) % lineBreak === 0) {
        tspanElements += `<tspan x="${
          width / 2
        }" dy="1.2em">${newText}</tspan> `;
        newText = "";
      }
    }
    if (newText !== "") {
      tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan> `;
    }
    console.log(tspanElements);

    // construct SVG
    const svgImg = `
      <svg width="${width}" height="${height}">
          <style>
              .title{
                  fill: #ffffff;
                  font-size: 20px;
                  font-weight: bold;
              }     
              .quoteAuthorStyles{
                  font-size: 35px;
                  font-weight: bold;
                  padding: 50px;
              }
              .footerStyles {
                  font-size: 20px;
                  font-weight: bold;
                  fill: lightgrey;
                  text-anchor: middle;
                  font-family: Verdana;
              }
              </style>
              <circle cx="382" cy="76" r="44" fill="rgba(255, 255, 255, 0.155)"/>
              <text x="382" y="76" dy="50" text-anchor="middle" font-size="90" font-family="Verdana" fill=""white">"</text>
              <g>
                  <rect x="0" y="0" width="${width}" height="auto"> </rect>
                  <text id="lastLineOfQuote" x="375" y="120" font-family="Verdana" font-size="35" fill="white" text-anchor="middle"> 
                      ${tspanElements}
                      <tspan class="quoteAuthorStyles" x="375" dy="1.8em">- ${quoteAuthor}</tspan>          
                  </text>
              </g>
              <text x="${width / 2}" y="${
      height - 10
    }" class="footerStyles"> Developed by @Sardor-M | Quotes from ZenQuotes.io </text>
      </svg>
    `;

    // add background images for the svg creation
    const backgroundImages = [
      "backgrounds/Delhi.png",
      "backgrounds/DeepSea.png",
      "backgrounds/Dusk.png",
      "backgrounds/Sun.png",
    ];

    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const selectedBackgoundImage = backgroundImages[randomIndex];

    // Composite this image together
    const timestamp = new Date().toLocaleDateString().replace(/[^\d]/g, "");
    const svgBuffer = Buffer.from(svgImg);

    const imagePath = path.join("/tmp", "quote-card.png");
    const image = await sharp(selectedBackgoundImage)
      .composite([
        {
          input: svgBuffer,
          top: 0,
          left: 0,
        },
      ])
      .toFile(imagePath);

    // function to update the quote object in DynomoDB
    try {
      updateQuoteDBObject();
    } catch (error) {
      console.log("error in updating the quote object in DynomoDB", error);
    }
    return {
      statusCode: 200,
      //  Uncomment below to enable CORS requests
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: fs.readFileSync(imagePath).toString("base64"),
      isBase64Encoded: true,
    };
  }
  return await getRandomQuote(apiURL);
};
