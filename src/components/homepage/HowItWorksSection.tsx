"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaCalendarCheck,
  FaCreditCard,
  FaTrophy,
} from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    step: "01",
    title: "Search",
    desc: "Find courts by sport, location, or price.",
  },
  {
    icon: FaCalendarCheck,
    step: "02",
    title: "Book",
    desc: "Choose your date and time slot instantly.",
  },
  {
    icon: FaCreditCard,
    step: "03",
    title: "Pay",
    desc: "Secure checkout, no hidden charges.",
  },
  {
    icon: FaTrophy,
    step: "04",
    title: "Play",
    desc: "Show up and enjoy the game with friends.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-10">
      <div className="text-center mb-12 px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          How It Works
        </h2>
        <p className="text-gray-900 mt-3 max-w-xl mx-auto">
          Booking a court has never been this simple. <br />
          Four steps, and you&apos;re on the field.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative bg-[#0d1f14] border border-lime-500/20 rounded-xl p-6 text-center"
          >
            <span className="absolute top-3 right-4 text-4xl font-extrabold text-lime-500/10">
              {s.step}
            </span>
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-lime-500 flex items-center justify-center">
              <s.icon className="text-black text-xl" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-gray-400 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
