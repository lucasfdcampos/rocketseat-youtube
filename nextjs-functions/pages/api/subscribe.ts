import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';
import url from 'url';

async function connectToDatabase(uri: string) {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1); // '/news' => 'news'

  const db = client.db(dbName);
}

export default (request: NowRequest, response: NowResponse) => {
  const { email } = request.body;

  return response.json({ message: `Hello ${email}` });
};
