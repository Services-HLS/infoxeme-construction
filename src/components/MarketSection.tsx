import { motion } from "framer-motion";
import { MapPin, Users, DollarSign, Building } from "lucide-react";
import marketBg from "@/assets/market-bg.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const MarketSection = () => {
  return (
    <section id="market" className="relative py-20 md:py-28 overflow-hidden scroll-mt-24 md:scroll-mt-28">
      <div className="absolute inset-0">
        <img src={marketBg} alt="US market intelligence map" className="h-full w-full object-cover" />
        <div className="absolute inset-0 section-overlay" />
      </div>

      <div className="container relative z-10">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">Target Market</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            USA — $800B+ Addressable Market
          </h2>
          <p className="mt-4 text-lg text-white/60">
            The US construction & real estate market is fragmented across dozens of disconnected systems. We unify it all.
          </p>
        </motion.div>

        {/* Market stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: DollarSign, value: "$4.2T", label: "US Residential Market Cap" },
            { icon: Users, value: "260K+", label: "Active US Developers" },
            { icon: Building, value: "$900B", label: "Annual Construction Spend" },
            { icon: MapPin, value: "19,500", label: "US Municipalities" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <stat.icon className="mx-auto mb-3 h-6 w-6 text-accent" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="mt-1 text-xs text-white/50 leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* TAM / SAM / SOM */}
        <motion.div {...fadeUp} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {[
            { label: "TAM", value: "$800B+", desc: "Total Addressable Market" },
            { label: "SAM", value: "$120B", desc: "Serviceable Addressable Market" },
            { label: "SOM (Yr 5)", value: "$2.4B", desc: "Serviceable Obtainable Market" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-4">
              {i > 0 && <div className="hidden md:block h-12 w-px bg-white/20" />}
              <div className="rounded-2xl border border-accent/30 bg-accent/10 px-8 py-5 text-center backdrop-blur-sm min-w-[180px]">
                <p className="text-xs font-bold text-accent tracking-wider">{item.label}</p>
                <p className="text-2xl font-extrabold text-white mt-1">{item.value}</p>
                <p className="text-[10px] text-white/40 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Target customers */}
        <motion.div {...fadeUp} className="mt-16 text-center">
          <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-6">Who We Serve</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Real Estate Investors", "Developers", "General Contractors", "Private Equity Firms", "Municipal Advisors"].map((c) => (
              <span key={c} className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/70 backdrop-blur-sm">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketSection;
