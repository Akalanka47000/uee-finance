import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import config from '@/config/secrets';

const baseQuery = fetchBaseQuery({
  baseUrl: config.backend_url
});

const staggeredBaseQuery = retry(baseQuery, {
  maxRetries: 0 // TODO: Change this to 1 once the unwanted requests are fixed
});

const transformedBaseQuery = async (args, api, extraOptions) => {
  const result = await staggeredBaseQuery(args, api, extraOptions);
  if (result.error) return result;
  return { data: result.data.data };
};

export default transformedBaseQuery;
