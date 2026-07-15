"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaHandshake, FaUsers, FaLeaf } from "react-icons/fa";

const values = [
  {
    icon: FaBullseye,
    title: "Our Mission",
    desc: "Make booking a sports court as easy as booking a cab.",
  },
  {
    icon: FaHandshake,
    title: "Trust First",
    desc: "Every court is verified before it goes live on the platform.",
  },
  {
    icon: FaUsers,
    title: "Community",
    desc: "Built for players, teams, and court owners to connect.",
  },
  {
    icon: FaLeaf,
    title: "Local Focus",
    desc: "Supporting local sports facilities across Bangladesh.",
  },
];

const AboutPage = () => {
  return (
    <div className=" min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto my-10 px-5 text-center pt-16 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-black"
        >
          About <span className="text-lime-400">CourtHive</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-900 mt-4 max-w-2xl mx-auto"
        >
          We&apos;re on a mission to connect players with the perfect court.{" "}
          <br />
          No more calling around, no more guessing availability.
        </motion.p>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto my-10 px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0d1f14] border border-lime-500/20 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Our Story
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            CourtHive started as a simple idea between friends frustrated with
            how hard it was to find an open futsal ground on short notice. What
            began as a small directory has grown into a full booking platform
            covering football, cricket, and badminton courts.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Today, we work directly with court owners to bring real-time
            availability, transparent pricing, and instant booking to players
            everywhere — so you can spend less time searching and more time
            playing.
          </p>
        </motion.div>
      </section>

      {/* Values grid */}
      <section className="max-w-7xl mx-auto my-10 px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            What We Stand For
          </h2>
          <p className="text-gray-900 mt-3 max-w-xl mx-auto">
            The principles that guide every decision we make. <br />
            From product design to partner relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#0d1f14] border border-lime-500/20 rounded-xl p-6 text-center hover:border-lime-500/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-lime-500/10 flex items-center justify-center">
                <v.icon className="text-lime-400 text-2xl" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {v.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
