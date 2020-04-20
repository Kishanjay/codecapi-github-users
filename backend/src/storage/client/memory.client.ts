// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cache: any = {};

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAsync(key: string, value: string): Promise<void> {
    cache[key] = value;
    return Promise.resolve();
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAsync(key: string): Promise<any> {
    if (!(key in cache)) { return Promise.resolve(null); }
    return Promise.resolve(cache[key]);
  },

  keysAsync(): Promise<string[]> {
    return Promise.resolve(Object.keys(cache));
  },
};
