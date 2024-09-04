import {Client} from "pg"
import envConfig from "../config/envConfig";

type QueryParameters = any[]; // Adjust this type if you know the exact shape of parameters

const logQuery = (statement: string, parameters: QueryParameters) => {
  const timeStamp = new Date();
  const formattedTimeStamp = timeStamp.toString().substring(4, 24);
  console.log(formattedTimeStamp, statement, parameters);
};

const CONNECTION = {
  connectionString: envConfig.MODE === "test" ? envConfig.TEST_DATABASE_URL : envConfig.DATABASE_URL
};

export default async function makeQuery(statement: string, ...parameters: QueryParameters) {
  const client = new Client(CONNECTION);
  try {
    await client.connect();
    const result = await client.query(statement, parameters);
    return result;
  } finally {
    await client.end();
  }
}
