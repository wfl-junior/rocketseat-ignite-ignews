import { NextApiHandler, PageConfig } from "next";
import { Readable } from "stream";
import { Stripe } from "stripe";
import { stripe } from "../../services/stripe";

async function getBuffer(readable: Readable) {
  const chunks: any[] = [];

  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks);
}

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const relevantEvents = new Set(["checkout.session.completed"]);

const handler: NextApiHandler = async (request, response) => {
  if (request.method !== "POST") {
    return response
      .setHeader("Allow", "POST")
      .status(405)
      .end("Method not allowed");
  }

  const buffer = await getBuffer(request);
  const secret = request.headers["stripe-signature"];

  let event: Stripe.Event | undefined;

  try {
    if (!secret) {
      throw new Error("no secret");
    }

    event = stripe.webhooks.constructEvent(
      buffer,
      secret,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (error) {
    return response.status(400).json(error);
  }

  if (relevantEvents.has(event.type)) {
    console.log("Evento recebido", event);
  }

  return response.status(204).send();
};

export default handler;
