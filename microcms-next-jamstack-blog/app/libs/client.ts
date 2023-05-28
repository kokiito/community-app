import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'u9i6np6t0p',
  apiKey: process.env.API_KEY || "",
});