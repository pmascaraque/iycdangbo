import Prismic from "prismic-javascript";

export const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_URL;
export const accessToken = process.env.NEXT_PUBLIC_PRISMIC_TOKEN;

export const client = Prismic.client(apiEndpoint, { accessToken });
