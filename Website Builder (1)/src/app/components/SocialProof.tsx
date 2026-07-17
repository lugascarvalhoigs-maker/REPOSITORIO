const testimonials = [
  {
    quote:
      "Lumen replaced four different tools for us. Our team ships 40% faster and we've actually cut our tool spend in half.",
    name: "Sarah Chen",
    role: "VP of Engineering, Meridian",
    avatar: "SC",
    color: "#7c3aed",
  },
  {
    quote:
      "I've tried every project management tool out there. Lumen is the first one that actually feels like it was designed for humans.",
    name: "James Okafor",
    role: "Founder, Blueshift Labs",
    avatar: "JO",
    color: "#2563eb",
  },
  {
    quote:
      "The AI features are genuinely useful — not just gimmicks. It saves me at least an hour every single day.",
    name: "Priya Nair",
    role: "Product Manager, Solace Health",
    avatar: "PN",
    color: "#059669",
  },
  {
    quote:
      "Onboarding our 200-person org took less than a week. Support was incredible throughout.",
    name: "Marcus Delgado",
    role: "CTO, Kinetic Commerce",
    avatar: "MD",
    color: "#d97706",
  },
  {
    quote:
      "We went from chaotic Slack threads to structured workflows overnight. The difference is night and day.",
    name: "Aiko Tanaka",
    role: "Head of Design, Frond Studio",
    avatar: "AT",
    color: "#db2777",
  },
  {
    quote:
      "Best in class for remote teams. Our distributed crew of 60 finally feels like they're working from the same room.",
    name: "Lena Fischer",
    role: "COO, Atlaswork",
    avatar: "LF",
    color: "#0891b2",
  },
];

const stats = [
  { value: "50K+", label: "Teams worldwide" },
  { value: "4.9★", label: "Average rating" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "2M+", label: "Tasks completed" },
];

export function SocialProof() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-foreground"
                style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}
              >
                {s.value}
              </div>
              <div
                className="text-muted-foreground mt-1"
                style={{ fontSize: "0.875rem" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2
            className="text-foreground"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Loved by teams everywhere
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-border flex flex-col gap-4"
            >
              <p
                className="text-foreground flex-1"
                style={{ fontSize: "0.925rem", lineHeight: 1.7 }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: t.color, fontSize: "0.75rem", fontWeight: 700 }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600 }} className="text-foreground">
                    {t.name}
                  </div>
                  <div style={{ fontSize: "0.8rem" }} className="text-muted-foreground">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
