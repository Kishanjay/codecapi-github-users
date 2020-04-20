import * as redis from 'redis';
import { promisify } from 'util';
const client = redis.createClient(process.env.REDIS_URL as string);

export default {
  ...client,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAsync: promisify(client.get).bind(client) as Function,
  setAsync: promisify(client.set).bind(client) as Function,
  keysAsync: promisify(client.keys).bind(client),
};
