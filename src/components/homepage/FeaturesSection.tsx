"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaClock,
  FaMoneyBillWave,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Verified Courts",
    desc: "Every listing is checked for quality, safety, and accurate details.",
  },
  {
    icon: FaClock,
    title: "Instant Booking",
    desc: "Reserve your slot in seconds, no back-and-forth calls needed.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Fair Pricing",
    desc: "Transparent hourly rates with zero hidden booking fees.",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    desc: "Our team is always available to help with any issue.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-10">
      <div className="text-center mb-12 px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Why Choose CourtHive
        </h2>
        <p className="text-gray-900 mt-3 max-w-xl mx-auto">
          We make finding and booking sports courts effortless. <br />
          Built for players, trusted by owners.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-[#0d1f14] border border-lime-500/20 rounded-xl p-6 text-center hover:border-lime-500/60 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-lime-500/10 flex items-center justify-center">
              <f.icon className="text-lime-400 text-2xl" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
