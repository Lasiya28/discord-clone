// This is where the sanity client is going to live.
import sanityClient from "@sanity/client";

//Need to get project id and access token to initiate client.
export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "v1",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});
