<img align="left" width="60" height="60" src="./assets/idea.png" alt="Image Segmentation Tool">

# Quote-Pulse
### 📝 Description:

- **Quote Pulse** is a full-stack web application that allows users to generate a random quote(s) from [Zen Quotes Api](https://zenquotes.io/) and save  generated quotes in **Image** format to your local machine.

### 💻 Technologies Used:

- **Frontend:** 
  - `React.js`, `React-Bootstrap`, `Styled-Components`, `Typescript`
- **Backend:**
  - `Node.js`, `Next.js`, `AWS-Amplify`, `AWS-DynamoDB`, `AWS AppSync` 
- **Deployment:**
  - `AWS-Lambda`
- **Version Control:**
  - `Git`, `GitHub`
- **Ci/CD pipeline:**
  - `AWS-Amplify`
- **API:**
  - [Zen Quotes Api](https://zenquotes.io/random)
   
    

### 🏗️ Project Architecture:
```mermaid
graph LR
  subgraph "Client side"
    React[React.js]
    Next[Next.js]
  end

  Next <--> React
  Next <--> StorageEngine

  subgraph "AWS DataStore"
    SyncEngine <-->StorageEngine
    SyncEngine <-->
    AWSDataStore[AWS DataStore]
  end

  subgraph "AWS Cloud"
    AWSLambda -->
    AWSDynamoDB --> GraphQLResolver
    AWSAppSync <--> AWSDataStore
    GraphQLResolver --> 
    AWSAppSync <--> AWSDynamoDB
  end

subgraph "AWS Hosting"
    Amplify[AWS Amplify]
    ---> FullStack[Full Stack Web App]
  end

```

