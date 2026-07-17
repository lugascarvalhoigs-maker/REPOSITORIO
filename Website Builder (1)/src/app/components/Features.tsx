import { Layers, Zap, Shield, BarChart2, GitBranch, Globe } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Unified workspace",
    description:
      "All your docs, tasks, and conversations live in one place. No more jumping between apps or losing track of context.",
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    icon: Zap,
    title: "AI-powered automation",
    description:
      "Let AI handle repetitive work — summarize threads, generate drafts, and surface what matters most.",
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    icon: Shield,
    title: "Enterprise-grade security",
    description:
      "SOC 2 Type II certified with SSO, audit logs, granular permissions, and end-to-end encryption.",
    color: "#059669",
    bg: "#ecfdf5",
  },
  {
    icon: BarChart2,
    title: "Real-time analytics",
    description:
      "Track team velocity, project health, and individual contributions with live dashboards.",
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    icon: GitBranch,
    title: "Deep integrations",
    description:
      "Connect to GitHub, Slack, Jira, Figma, and 100+ more tools your team already uses every day.",
    color: "#db2777",
    bg: "#fdf2f8",
  },
  {
    icon: Globe,
    title: "Works everywhere",
    description:
      "Native apps for Mac, Windows, iOS, and Android — fully in sync so you're never out of the loop.",
    color: "#0891b2",
    bg: "#ecfeff",
  },
];

export function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-muted-foreground mb-3"
            style={{ fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Everything you need
          </p>
          <h2
            className="text-foreground"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em" }}
          >
            Built for how modern teams work
          </h2>
          <p
            className="text-muted-foreground max-w-xl mx-auto mt-4"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Lumen isn't just another tool — it's the operating system your team
            has been waiting for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-border hover:border-black/20 transition-all hover:shadow-sm bg-white group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: f.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <h3
                  className="text-foreground mb-2"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "0.9rem", lineHeight: 1.65 }}
                >
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
