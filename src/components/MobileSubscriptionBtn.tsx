import { getUserSubscriptionPlan } from "@/lib/stripe";
import { Gem } from "lucide-react";
import Link from "next/link";

async function MobileSubscriptionBtn() {
  const subscriptionPlan = await getUserSubscriptionPlan();
  return (
    <>
      {subscriptionPlan.isSubscribed ? (
        <Link
          className="cursor-pointer flex items-center"
          href="/dashboard/billing"
        >
          Manage Subscription
        </Link>
      ) : (
        <Link className="cursor-pointer flex items-center" href="/pricing">
          Upgrade <Gem className="text-blue-600 h-4 w-4 ml-1.5" />
        </Link>
      )}
    </>
  );
}

export default MobileSubscriptionBtn;
