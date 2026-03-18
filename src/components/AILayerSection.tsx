import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Brain, TrendingUp, Target, BarChart3, AlertTriangle, Zap } from "lucide-react";
import aiLayerBg from "@/assets/ai-layer-bg.jpg";

type Capability = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const aiCapabilities: Capability[] = [
  { icon: TrendingUp, title: "ROI Forecasting", desc: "12–36 month forecasts with scenario bands for investment intelligence" },
  { icon: Target, title: "Opportunity Scoring", desc: "AI-matched ZIP-level demand signals for optimal investment decisions" },
  { icon: AlertTriangle, title: "Delay Prediction", desc: "Forecast construction delays and budget overruns before they happen" },
  { icon: BarChart3, title: "Change Order Impact", desc: "Estimate financial impact of change orders in real-time" },
  { icon: Brain, title: "Win-Rate Analysis", desc: "Predictive win-rate analysis per client and project type" },
  { icon: Zap, title: "Risk Exposure Modeling", desc: "Dynamic risk exposure models updated with 100M+ US data points" },
];

const CapabilityCard = ({ cap, compact = false }: { cap: Capability; compact?: boolean }) => (
  <div
    className={[
      "group w-full rounded-2xl border border-border bg-white shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-1",
      compact ? "px-4 py-3.5" : "px-4 py-3",
    ].join(" ")}
  >
    <div
      className={[
        "mb-2 inline-flex items-center justify-center rounded-full bg-white shadow-md relative overflow-hidden",
        compact ? "h-9 w-9" : "h-9 w-9",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-construction/20 to-transparent" />
      <div
        className={[
          "relative flex items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors",
          compact ? "h-7 w-7" : "h-7 w-7",
        ].join(" ")}
      >
        <cap.icon className={compact ? "h-4 w-4 text-accent" : "h-4 w-4 text-accent"} />
      </div>
    </div>
    <h3 className={compact ? "mb-1 text-[14px] font-semibold text-primary leading-snug" : "mb-1 text-sm font-semibold text-primary"}>
      {cap.title}
    </h3>
    <p
      className={
        compact
          ? "text-[12px] text-muted-foreground leading-snug overflow-hidden max-h-[3.8em]"
          : "text-[11px] text-muted-foreground leading-relaxed"
      }
    >
      {cap.desc}
    </p>
  </div>
);

const CenterNode = ({ compact = false }: { compact?: boolean }) => (
  <div className={["relative flex items-center justify-center", compact ? "w-[5.25rem] px-1" : "px-4 lg:px-6"].join(" ")}>
    {/* Outer faint ring */}
    {!compact && (
      <div className="h-64 w-64 rounded-full border border-accent/10 bg-gradient-to-br from-accent/5 via-construction/10 to-transparent shadow-[0_0_48px_rgba(15,23,42,0.28)]" />
    )}

    {/* Inner glowing circle */}
    <div
      className={[
        "absolute flex items-center justify-center rounded-full bg-navy-gradient shadow-[0_0_40px_rgba(15,23,42,0.5)]",
        compact ? "h-24 w-24" : "h-48 w-48",
      ].join(" ")}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/70 via-construction/60 to-transparent opacity-90 blur-[3px]" />
      <div className={["relative z-10 text-center flex flex-col items-center justify-center", compact ? "px-3" : "px-6"].join(" ")}>
        <Brain className={compact ? "mx-auto mb-1.5 h-5 w-5 text-white/95" : "mx-auto mb-2 h-8 w-8 text-white/95"} />
        <p className={compact ? "text-[9px] font-semibold tracking-[0.22em] text-accent uppercase" : "text-[11px] font-semibold tracking-[0.22em] text-accent uppercase"}>
          AI Intelligence Layer
        </p>
        {!compact && (
          <p className="mt-1 text-[11px] text-white/85 leading-snug max-w-[9rem]">
            Predictive · Proactive · Precise
          </p>
        )}
      </div>
    </div>
  </div>
);

const AILayerSection = () => {
  return (
    <section id="ai-layer" className="relative py-20 md:py-28 overflow-hidden scroll-mt-24 md:scroll-mt-28">
      <div className="absolute inset-0">
        <img src={aiLayerBg} alt="AI neural network visualization" className="h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="container relative z-10">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">AI Intelligence Layer</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary md:text-5xl">
            Predictive · Proactive · Precise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built on 100M+ US data points — AI predicts disputes, overruns & financial exposure before they escalate.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="relative mx-auto max-w-6xl px-0 py-0 lg:rounded-3xl lg:border lg:border-border lg:bg-white/90 lg:px-6 lg:py-8 lg:shadow-card-custom xl:px-10 xl:py-10"
        >
          {/* Mobile/tablet: same 3-column format in a single screen (compact) */}
          <div className="lg:hidden">
            <div className="grid gap-y-4 gap-x-4 grid-cols-[minmax(0,1.35fr)_5rem_minmax(0,1.35fr)] items-center">
              <div className="space-y-2 flex flex-col pr-2">
                {aiCapabilities.slice(0, 3).map((cap) => (
                  <CapabilityCard key={cap.title} cap={cap} compact />
                ))}
              </div>

              <CenterNode compact />

              <div className="space-y-2 flex flex-col pl-2">
                {aiCapabilities.slice(3).map((cap) => (
                  <CapabilityCard key={cap.title} cap={cap} compact />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1.25fr)_auto_minmax(0,1.25fr)] items-center">
            <div className="space-y-3 flex flex-col">
              {aiCapabilities.slice(0, 3).map((cap) => (
                <CapabilityCard key={cap.title} cap={cap} />
              ))}
            </div>

            <CenterNode />

            <div className="space-y-3 flex flex-col">
              {aiCapabilities.slice(3).map((cap) => (
                <CapabilityCard key={cap.title} cap={cap} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AILayerSection;
