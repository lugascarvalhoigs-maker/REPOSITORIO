import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Product", "Features", "Pricing", "Blog", "Company"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" fill="currentColor" />
          </div>
          <span className="text-primary" style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Lumen
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontSize: "0.9rem" }}
            >
              {l}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-foreground hover:text-muted-foreground transition-colors"
            style={{ fontSize: "0.9rem" }}
          >
            Sign in
          </a>
          <a
            href="#"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            style={{ fontSize: "0.875rem" }}
          >
            Get started free
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-black/[0.06] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href="#" className="text-foreground" style={{ fontSize: "0.95rem" }}>
              {l}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-border">
            <a href="#" className="text-foreground" style={{ fontSize: "0.95rem" }}>Sign in</a>
            <a
              href="#"
              className="bg-primary text-white px-4 py-2.5 rounded-lg text-center"
              style={{ fontSize: "0.9rem" }}
            >
              Get started free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
