import Prismic from "@prismicio/client";

export function getPrismicClient(request?: unknown) {
  return Prismic.client(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req: request,
  });
}
