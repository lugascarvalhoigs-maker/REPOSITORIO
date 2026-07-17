import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background gradient blobs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #7c3aed 0%, #3b82f6 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <div
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full mb-8"
          style={{ fontSize: "0.8rem" }}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Now in public beta — try it free
          <ArrowRight className="w-3 h-3" />
        </div>

        <h1
          className="text-foreground mb-6"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          The smarter way to{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            build together
          </span>
        </h1>

        <p
          className="text-muted-foreground max-w-2xl mx-auto mb-10"
          style={{ fontSize: "1.15rem", lineHeight: 1.7 }}
        >
          Lumen brings your team's ideas, tasks, and conversations into one
          beautifully designed workspace — so you can move fast without losing
          context.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto bg-primary text-white px-7 py-3.5 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            style={{ fontSize: "0.95rem" }}
          >
            Start for free
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 text-foreground px-7 py-3.5 rounded-xl border border-border hover:bg-accent transition-all"
            style={{ fontSize: "0.95rem" }}
          >
            <Play className="w-4 h-4" fill="currentColor" />
            Watch demo
          </a>
        </div>

        <p className="mt-5 text-muted-foreground" style={{ fontSize: "0.82rem" }}>
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>

      {/* Hero image */}
      <div className="max-w-5xl mx-auto mt-16 relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-black/[0.08]">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGFzaGJvYXJkJTIwdWklMjBzY3JlZW58ZW58MXx8fHwxNzgzNTEzMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Lumen dashboard interface"
            className="w-full object-cover"
            style={{ aspectRatio: "16/9" }}
          />
        </div>
        <div
          className="absolute -bottom-4 -left-4 -right-4 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--background), transparent)",
          }}
        />
      </div>
    </section>
  );
}
