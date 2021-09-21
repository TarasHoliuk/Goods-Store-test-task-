const BASE_URL = 'https://my-json-server.typicode.com/tarasholiuk/db';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const LoadGoods = async () => {
  const response = await fetch(`${BASE_URL}/goods`);

  return response.json();
};
