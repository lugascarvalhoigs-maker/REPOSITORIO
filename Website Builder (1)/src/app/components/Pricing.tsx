import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    annual: 0,
    description: "Perfect for individuals and small side projects.",
    cta: "Start for free",
    ctaStyle: "outline",
    features: [
      "Up to 5 members",
      "10 active projects",
      "5 GB storage",
      "Basic integrations",
      "Community support",
    ],
  },
  {
    name: "Pro",
    monthly: 18,
    annual: 14,
    description: "For growing teams that need more power and control.",
    cta: "Start free trial",
    ctaStyle: "solid",
    popular: true,
    features: [
      "Unlimited members",
      "Unlimited projects",
      "100 GB storage",
      "All integrations",
      "AI features",
      "Priority support",
      "Advanced analytics",
    ],
  },
  {
    name: "Enterprise",
    monthly: null,
    annual: null,
    description: "Custom solutions for large organizations.",
    cta: "Contact sales",
    ctaStyle: "outline",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Audit logs",
      "Custom contracts",
      "SLA guarantee",
      "Dedicated CSM",
      "On-prem option",
    ],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-muted-foreground mb-3"
            style={{ fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Pricing
          </p>
          <h2
            className="text-foreground mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em" }}
          >
            Simple, transparent pricing
          </h2>
          <p
            className="text-muted-foreground max-w-md mx-auto mb-8"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Start free. Upgrade when you're ready.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-secondary rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full transition-all ${
                !annual ? "bg-white shadow text-foreground" : "text-muted-foreground"
              }`}
              style={{ fontSize: "0.875rem" }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 ${
                annual ? "bg-white shadow text-foreground" : "text-muted-foreground"
              }`}
              style={{ fontSize: "0.875rem" }}
            >
              Annual
              <span
                className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full"
                style={{ fontSize: "0.7rem", fontWeight: 600 }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col gap-6 relative ${
                plan.popular
                  ? "bg-primary text-white shadow-2xl shadow-primary/20 scale-[1.02]"
                  : "bg-white border border-border"
              }`}
            >
              {plan.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-blue-500 text-white px-4 py-1 rounded-full"
                  style={{ fontSize: "0.75rem", fontWeight: 600 }}
                >
                  Most popular
                </span>
              )}

              <div>
                <h3
                  className={plan.popular ? "text-white" : "text-foreground"}
                  style={{ fontSize: "1.1rem", fontWeight: 700 }}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 ${plan.popular ? "text-white/70" : "text-muted-foreground"}`}
                  style={{ fontSize: "0.875rem" }}
                >
                  {plan.description}
                </p>
              </div>

              <div>
                {plan.monthly === null ? (
                  <div
                    className={plan.popular ? "text-white" : "text-foreground"}
                    style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.03em" }}
                  >
                    Custom
                  </div>
                ) : (
                  <div className="flex items-end gap-1">
                    <span
                      className={plan.popular ? "text-white" : "text-foreground"}
                      style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}
                    >
                      ${annual ? plan.annual : plan.monthly}
                    </span>
                    {plan.monthly > 0 && (
                      <span
                        className={`pb-1 ${plan.popular ? "text-white/60" : "text-muted-foreground"}`}
                        style={{ fontSize: "0.875rem" }}
                      >
                        /mo
                      </span>
                    )}
                  </div>
                )}
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check
                      className={`w-4 h-4 shrink-0 ${plan.popular ? "text-white" : "text-green-500"}`}
                    />
                    <span
                      className={`${plan.popular ? "text-white/85" : "text-foreground"}`}
                      style={{ fontSize: "0.9rem" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`w-full py-3 rounded-xl text-center transition-all ${
                  plan.popular
                    ? "bg-white text-primary hover:bg-white/90"
                    : plan.ctaStyle === "solid"
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border border-border text-foreground hover:bg-accent"
                }`}
                style={{ fontSize: "0.9rem", fontWeight: 600 }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
