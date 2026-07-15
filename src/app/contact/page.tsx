"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  { icon: FaEnvelope, label: "Email", value: "support@courthive.com" },
  { icon: FaPhone, label: "Phone", value: "+880 1954844656" },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Gazipur, Dhaka, Bangladesh",
  },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up to backend contact endpoint
    setSubmitted(true);
  };

  return (
    <div className=" min-h-screen">
      <section className="max-w-7xl mx-auto my-10 px-5 text-center pt-16 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-black"
        >
          Get In <span className="text-lime-400">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-900 mt-4 max-w-2xl mx-auto"
        >
          Questions, feedback, or want to list your court with us? <br />
          Send us a message and we&apos;ll get back within 24 hours.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto my-10 px-5 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact info cards */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          {contactInfo.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#0d1f14] border border-lime-500/20 rounded-xl p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-lime-500/10 flex items-center justify-center">
                <c.icon className="text-lime-400 text-lg" />
              </div>
              <div>
                <p className="text-gray-500 text-xs">{c.label}</p>
                <p className="text-white font-medium text-sm">{c.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-[#0d1f14] border border-lime-500/20 rounded-2xl p-6 md:p-8"
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <FaPaperPlane className="text-lime-400 text-3xl mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">
                Message Sent
              </h3>
              <p className="text-gray-400 text-sm">
                Thanks for reaching out — we&apos;ll reply soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-400 text-sm block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-black/40 border border-lime-500/20 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-lime-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-black/40 border border-lime-500/20 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-lime-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="What's this about?"
                  className="w-full bg-black/40 border border-lime-500/20 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-lime-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us more..."
                  className="w-full bg-black/40 border border-lime-500/20 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-lime-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="self-start bg-lime-500 hover:bg-lime-400 text-black font-semibold px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2"
              >
                Send Message
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          )}
        </motion.div>
      </section>
      {/* </section> */}
    </div>
  );
};

export default ContactPage;
