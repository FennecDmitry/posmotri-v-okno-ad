"use client";

import { motion } from "framer-motion";

const benefits = [
  { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Оригинал" },
  { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", label: "Разлив от 5 мл" },
  { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Екатеринбург и РФ" },
  { icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8", label: "Заказ в Telegram" },
];

export function BenefitsStrip() {
  return (
    <div className="border-y border-wine-800 bg-wine-900/30">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center gap-2 text-center"
            >
              <svg className="h-6 w-6 text-copper-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
              </svg>
              <span className="text-xs sm:text-sm text-neutral-300 font-medium">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}