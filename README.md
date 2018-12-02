# Bugatchi Mobile

Mobile app with:

- [Expo](https://expo.io/)
- [React Native](https://facebook.github.io/react-native/docs/components-and-apis.html)
- [AWS Amplify](https://aws-amplify.github.io/docs/) 
- [AWS AppSync](https://aws.amazon.com/appsync/)
- [AWS DynamoDB](https://aws.amazon.com/dynamodb/)
- [Serverless Framework](https://serverless.com/)

  with a number of plugins:
  - [serverless-pseudo-parameters](https://github.com/svdgraaf/serverless-pseudo-parameters)
  - [serverless-appsync-plugin](https://github.com/sid88in/serverless-appsync-plugin)
 
  for local development:
  - [serverless-dynamodb-local](https://github.com/99xt/serverless-dynamodb-local)
  - [serverless-offline](https://github.com/dherault/serverless-offline)
  - [serverless-appsync-offline](https://github.com/aheissenberger/serverless-appsync-offline)

## Setup

- Install serverless, expo, awsamplify clis:

```bash
npm install -g serverless expo-cli @aws-amplify/cli
```
- Install node modules:

```bash
npm install
```

## Run

### Backend

Locally:

```bash
sls offline start 
```

### Frontend

```bash
npm start
```

