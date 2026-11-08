"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

const faqs = [
  { q: "Это оригинальная парфюмерия?", a: "Да, мы работаем только с оригинальными флаконами, разливаем в стерильные атомайзеры." },
  { q: "Как происходит оплата и доставка?", a: "Все детали заказа, оплаты и доставки обсуждаются с менеджером в Telegram." },
  { q: "Что такое разлив?", a: "Это возможность попробовать аромат объемом 5 или 10 мл из оригинального флакона." },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-bold sm:text-4xl text-white">Частые вопросы</h2>
          <p className="mt-4 text-neutral-400">Отвечаем на то, что спрашивают чаще всего</p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl border border-wine-800 bg-wine-900/40"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-wine-800/30"
                >
                  <span className="font-semibold text-white">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-copper-400 leading-none"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-wine-800/50 p-5 pt-3 text-neutral-400 text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-neutral-400 text-sm mb-4">Остались вопросы?</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={siteConfig.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-copper-500 px-6 py-3 text-sm font-semibold text-copper-300 transition-all hover:bg-copper-500 hover:text-white hover:shadow-[0_0_20px_rgba(184,107,79,0.4)]"
          >
            Задать вопрос в Telegram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}