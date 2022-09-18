import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "beer-idjs",
  apiKey: process.env.API_KEY,
});
