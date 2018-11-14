const dev = {
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-otu9zxjcpm01"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://api.bcaspar.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_ZZfYgPp5u",
    APP_CLIENT_ID: "llso6vjkggac0b6t8npcieltk",
    IDENTITY_POOL_ID: "us-west-2:d36989d8-78ae-4ea0-8f9c-22f6f835ce9e"
  }
};

const prod = {
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-rjphcya6z7p8"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://api.bcaspar.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_vtb1PK76v",
    APP_CLIENT_ID: "14ctmatbqldnkgtt1vgnkbieqj",
    IDENTITY_POOL_ID: "us-west-2:4181f95a-8269-4f63-a099-d11333fa540c"
  }
};

const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
