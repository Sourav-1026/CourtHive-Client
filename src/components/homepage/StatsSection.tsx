"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { FaMapMarkerAlt, FaUsers, FaCity, FaCheckCircle } from "react-icons/fa";

const stats = [
  { icon: FaMapMarkerAlt, value: 250, suffix: "+", label: "Courts Listed" },
  { icon: FaUsers, value: 5000, suffix: "+", label: "Happy Players" },
  { icon: FaCity, value: 12, suffix: "", label: "Cities Covered" },
  {
    icon: FaCheckCircle,
    value: 8000,
    suffix: "+",
    label: "Bookings Completed",
  },
];

const Counter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  return <motion.span>{rounded}</motion.span>;
};

const StatsSection = () => {
  return (
    <section className="max-w-7xl w-full mx-auto my-10">
      <div className="text-center mb-12 px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          CourtHive By The Numbers
        </h2>
        <p className="text-gray-900 mt-3 max-w-xl mx-auto">
          A growing community of players and court owners. <br />
          Join thousands already booking with us.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-linear-to-b from-[#0d1f14] to-black border border-lime-500/20 rounded-xl p-6 text-center"
          >
            <s.icon className="text-lime-400 text-3xl mx-auto mb-3" />
            <p className="text-3xl font-extrabold text-white">
              <Counter value={s.value} />
              {s.suffix}
            </p>
            <p className="text-gray-400 text-sm mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
