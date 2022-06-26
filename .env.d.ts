declare namespace NodeJS {
  interface ProcessEnv {
    STRIPE_API_KEY: string;
    STRIPE_PRODUCT_PRICE_ID: string;
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string;
    STRIPE_WEBHOOK_SECRET: string;
    STRIPE_SUCCESS_URL: string;
    STRIPE_CANCEL_URL: string;

    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;

    FAUNADB_KEY: string;
  }
}
