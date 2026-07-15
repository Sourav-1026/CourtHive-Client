"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "How do I book a court?",
    a: "Browse available courts, pick a time slot, and confirm payment. You'll get instant confirmation.",
  },
  {
    q: "Can I cancel a booking?",
    a: "Yes, cancellations are allowed up to 12 hours before your slot for a full refund.",
  },
  {
    q: "How do I list my own court?",
    a: "Go to 'Add Court', fill in the details, upload photos, and submit for review.",
  },
  {
    q: "Is payment secure?",
    a: "All payments are processed through encrypted, PCI-compliant payment gateways.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-7xl w-full mx-auto my-10">
      <div className="text-center mb-12 px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-900 mt-3 max-w-xl mx-auto">
          Got questions? We&apos;ve got answers. <br />
          Still stuck? Reach out to our support team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0d1f14] border border-lime-500/20 rounded-xl p-5 cursor-pointer h-fit"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-white font-semibold text-sm">{f.q}</h3>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaChevronDown className="text-lime-400 text-xs shrink-0" />
                </motion.span>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.p
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-400 text-xs leading-relaxed overflow-hidden"
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
