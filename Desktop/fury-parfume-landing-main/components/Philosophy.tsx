"use client";

import { motion } from "framer-motion";

const textLines = [
  "FURY PARFUM — ЗАПОМНИСЬ БЕЗ СЛОВ.",
  "Друзья, с большой радостью хочу поделиться с вами новостью — наконец-то я открываю свой онлайн магазин оригинальной парфюмерии Fury Parfum!",
  "Это дело, к которому я долго шёл, о котором мечтал и которое наконец-то стало реальностью.",
  "Для меня это не просто магазин, а воплощение моей мечты.",
  "В Fury Parfum вы найдёте оригинальную парфюмерию в полноразмерных флаконах, а также разлив от 5 мл — чтобы каждый мог познакомиться с любимыми ароматами и найти свой.",
  "Спасибо каждому, кто поддерживает меня на этом пути.",
  "Впереди много интересного, и я буду рад разделить этот путь с вами!",
  "Добро пожаловать в Fury Parfum. Начинаем! 🖤",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function Philosophy() {
  return (
    <section className="border-y border-wine-800 bg-wine-900/30 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 text-center sm:text-left"
        >
          <h2 className="font-serif text-sm uppercase tracking-[0.3em] text-copper-400 mb-8">
            Философия FURY
          </h2>
          {textLines.map((line, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className={
                index === 0
                  ? "font-serif text-2xl sm:text-4xl font-bold text-white leading-tight"
                  : "text-base sm:text-lg text-neutral-300 leading-relaxed"
              }
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}