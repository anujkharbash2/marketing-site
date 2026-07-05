import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "₹0",
    period: "/month",
    credits: "1,000 credits/month",
    features: ["Product & article extraction", "Community support", "Standard rate limits"],
    cta: "Request access",
    href: "/request-access",
    highlighted: false,
  },
  {
    name: "Custom",
    price: "Let's talk",
    period: "",
    credits: "Volume-based, uncapped",
    features: ["Everything in Free", "Priority support", "Onboarding help", "Feedback shapes our roadmap"],
    cta: "Talk to us",
    href: "/contact",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-medium mb-3 tracking-tight">Simple, pilot-phase pricing</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
  We're in early access. Start free, or talk to us if you need a custom
  plan.
</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {tiers.map((t) => (
          <Card
            key={t.name}
            className={t.highlighted ? "border-2 border-foreground/20" : ""}
          >
            <CardContent className="p-6">
              {t.highlighted && (
                <span className="inline-block bg-muted text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                  For design partners
                </span>
              )}
              <p className="font-medium text-lg mb-1">{t.name}</p>
              <p className="mb-1">
                <span className="text-2xl font-medium">{t.price}</span>
                <span className="text-muted-foreground text-sm">{t.period}</span>
              </p>
              <p className="text-sm text-muted-foreground mb-4">{t.credits}</p>
              <ul className="space-y-2 mb-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-muted-foreground shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={t.href}
                className={cn(
                  buttonVariants({ variant: t.highlighted ? "default" : "outline" }),
                  "w-full"
                )}
              >
                {t.cta}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}