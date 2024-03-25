import {CreateTableCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb"

const dbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY as string,
  },
  region: process.env.AWS_REGION as string,
})
const docClient = DynamoDBDocumentClient.from(dbClient)

export default docClient