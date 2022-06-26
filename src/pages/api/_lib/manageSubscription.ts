import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
) {
  const [subscription, userRef] = await Promise.all([
    stripe.subscriptions.retrieve(subscriptionId),
    fauna.query<{ id: string }>(
      q.Select(
        "ref",
        q.Get(q.Match(q.Index("user_by_stripe_customer_id"), customerId)),
      ),
    ),
  ]);

  await fauna.query(
    q.Create(q.Collection("subscriptions"), {
      data: {
        id: subscription.id,
        userId: userRef,
        status: subscription.status,
        price_id: subscription.items.data[0].price.id,
      },
    }),
  );
}
