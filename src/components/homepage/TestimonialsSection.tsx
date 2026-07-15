"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rafiul Islam",
    role: "Football Player",
    text: "Booking a futsal court used to take forever. Now it takes two minutes.",
  },
  {
    name: "Nabila Rahman",
    role: "Badminton Enthusiast",
    text: "Clean UI, accurate court info, and instant confirmation. Love it.",
  },
  {
    name: "Tanvir Ahmed",
    role: "Court Owner",
    text: "Listing my ground on CourtHive doubled my weekend bookings.",
  },
  {
    name: "Sadia Kabir",
    role: "Cricket Team Captain",
    text: "Finally a platform that actually shows real-time availability.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-10">
      <div className="text-center mb-12 px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          What Players Say
        </h2>
        <p className="text-gray-900 mt-3 max-w-xl mx-auto">
          Real feedback from our growing community. <br />
          Trusted by players and court owners alike.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-[#0d1f14] border border-lime-500/20 rounded-xl p-6 flex flex-col"
          >
            <FaQuoteLeft className="text-lime-500 text-xl mb-3" />
            <p className="text-gray-300 text-sm leading-relaxed flex-1">
              {t.text}
            </p>
            <div className="flex gap-1 my-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <FaStar key={idx} className="text-lime-400 text-xs" />
              ))}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{t.name}</p>
              <p className="text-gray-500 text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
