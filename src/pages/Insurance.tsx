import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterContact from "@/components/FooterContact";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const Insurance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-foreground">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container max-w-5xl space-y-10">
          <motion.section
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-r from-accent/20 via-slate-900 to-slate-900 px-8 py-10 md:px-12 md:py-12 shadow-elevated"
          >
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_top,_rgba(255,255,255,0.12)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.2)_0,_transparent_60%)]" />
            <div className="relative z-10 max-w-3xl space-y-4">
              <p className="text-xs font-bold tracking-widest text-accent uppercase">
                Insurance Intelligence
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                How Infoxeme helps insurers price and manage construction risk
              </h1>
              <p className="text-sm md:text-base text-slate-200">
                Underwriters, brokers, and carriers use Infoxeme&apos;s construction and location intelligence to see
                project risk before bind, monitor exposure in-force, and reduce surprises at claim time.
              </p>
            </div>
          </motion.section>

          <motion.section
            {...fadeUp}
            className="grid gap-6 md:grid-cols-3 rounded-2xl"
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 md:p-6 shadow-card-custom">
              <p className="text-[10px] font-bold tracking-widest text-accent uppercase mb-1">
                Before bind
              </p>
              <h2 className="text-base md:text-lg font-bold text-white">
                Better project selection
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-300">
                Combine ZIP-level demand, contractor history, and schedule quality to decide which risks to write and
                at what terms.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 md:p-6 shadow-card-custom">
              <p className="text-[10px] font-bold tracking-widest text-accent uppercase mb-1">
                During build
              </p>
              <h2 className="text-base md:text-lg font-bold text-white">
                Live exposure monitoring
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-300">
                Track progress vs. plan, major change orders, and delay drivers so exposures match reality—not just the
                original binder.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 md:p-6 shadow-card-custom">
              <p className="text-[10px] font-bold tracking-widest text-accent uppercase mb-1">
                At claim time
              </p>
              <h2 className="text-base md:text-lg font-bold text-white">
                Evidence in one place
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-300">
                Access a single record of drawings, progress, and change history to support loss adjustment and reduce
                disputes.
              </p>
            </div>
          </motion.section>
        </div>
      </main>
      <FooterContact />
    </div>
  );
};

export default Insurance;

