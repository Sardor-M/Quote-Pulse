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
const docClient = new AWS.DynomoDB.DocumentClient();

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
  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!"),
  };
};
