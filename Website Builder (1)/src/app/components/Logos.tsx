const companies = [
  "Vercel",
  "Linear",
  "Notion",
  "Figma",
  "Stripe",
  "Loom",
  "Coda",
  "Retool",
];

export function Logos() {
  return (
    <section className="py-16 px-6 border-y border-border">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-center text-muted-foreground mb-10"
          style={{ fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
        >
          Trusted by teams at leading companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {companies.map((name) => (
            <span
              key={name}
              className="text-muted-foreground/50 select-none"
              style={{ fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.01em" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
