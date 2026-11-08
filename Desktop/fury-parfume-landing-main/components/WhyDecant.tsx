"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Попробуйте перед покупкой",
    desc: "Не покупайте полный флакон вслепую. Оцените стойкость и раскрытие на своей коже.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "100% Оригинал",
    desc: "Мы разливаем только оригинальную парфюмерию в стерильные атомайзеры.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Экономия бюджета",
    desc: "Зачем платить за 100 мл, если можно наслаждаться любимым ароматом в объеме 5 или 10 мл?",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Доставка по Екатеринбургу и РФ",
    desc: "Быстрая отправка по городу и в любой регион России удобным для вас способом.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
];

export function WhyDecant() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl font-bold sm:text-4xl text-white">Почему разлив?</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((pt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-2xl border border-wine-800 bg-wine-900/40 p-6 text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-copper-500/10 text-copper-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={pt.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{pt.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{pt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}