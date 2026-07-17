import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
          style={{
            background: "linear-gradient(135deg, #030213 0%, #1e1b4b 50%, #030213 100%)",
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(124,58,237,0.4) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative">
            <h2
              className="text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em" }}
            >
              Ready to move faster?
            </h2>
            <p
              className="mb-10 max-w-lg mx-auto"
              style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", lineHeight: 1.7 }}
            >
              Join 50,000+ teams already using Lumen to do their best work.
              Start free — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto bg-white text-primary px-8 py-3.5 rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-lg"
                style={{ fontSize: "0.95rem", fontWeight: 600 }}
              >
                Get started free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl border transition-all flex items-center justify-center gap-2"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.75)",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
