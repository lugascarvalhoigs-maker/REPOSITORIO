import { Zap } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Brand"],
  Resources: ["Docs", "API Reference", "Community", "Tutorials", "Status"],
  Legal: ["Privacy", "Terms", "Security", "Cookies", "GDPR"],
};

export function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" fill="currentColor" />
              </div>
              <span
                className="text-primary"
                style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                Lumen
              </span>
            </a>
            <p
              className="text-muted-foreground"
              style={{ fontSize: "0.875rem", lineHeight: 1.65 }}
            >
              The workspace built for how modern teams actually work.
            </p>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-foreground mb-4"
                style={{ fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}
              >
                {section}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      style={{ fontSize: "0.875rem" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground" style={{ fontSize: "0.82rem" }}>
            © 2026 Lumen, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontSize: "0.82rem" }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
