import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { stripe } from "../../services/stripe";

const handler: NextApiHandler = async (request, response) => {
  if (request.method !== "POST") {
    return response
      .setHeader("Allow", "POST")
      .status(405)
      .end("Method not allowed");
  }

  const session = await getSession({ req: request });

  const stripeCustomer = await stripe.customers.create({
    email: session?.user?.email!,
    name: session?.user?.name!,
  });

  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    customer: stripeCustomer.id,
    payment_method_types: ["card"],
    billing_address_collection: "required",
    line_items: [
      {
        price: process.env.STRIPE_PRODUCT_PRICE_ID,
        quantity: 1,
      },
    ],
    mode: "subscription",
    allow_promotion_codes: true,
    success_url: process.env.STRIPE_SUCCESS_URL,
    cancel_url: process.env.STRIPE_CANCEL_URL,
  });

  return response.status(200).json({
    sessionId: stripeCheckoutSession.id,
  });
};

export default handler;
