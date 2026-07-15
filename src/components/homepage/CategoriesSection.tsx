"use client";

import { motion } from "framer-motion";
import { FaFutbol } from "react-icons/fa";
import { GiCricketBat, GiShuttlecock, GiVolleyballBall } from "react-icons/gi";

const categories = [
  { icon: FaFutbol, title: "Football / Futsal", count: "120+ Courts" },
  { icon: GiCricketBat, title: "Cricket", count: "85+ Grounds" },
  { icon: GiShuttlecock, title: "Badminton", count: "150+ Courts" },
  { icon: GiVolleyballBall, title: "Volleyball", count: "60+ Courts" },
];

const CategoriesSection = () => {
  return (
    <section className="max-w-7xl w-full mx-auto my-10">
      <div className="text-center mb-12 px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Explore By Sport
        </h2>
        <p className="text-gray-800 mt-3 max-w-xl mx-auto">
          Pick your game and find courts near you. <br />
          More sports being added every month.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        {categories.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            whileHover={{ scale: 1.04 }}
            className="cursor-pointer bg-linear-to-b from-[#0d1f14] to-black border border-lime-500/20 rounded-xl p-6 text-center hover:border-lime-400 transition-colors"
          >
            <c.icon className="text-lime-400 text-4xl mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg">{c.title}</h3>
            <p className="text-lime-400/80 text-sm mt-1">{c.count}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
