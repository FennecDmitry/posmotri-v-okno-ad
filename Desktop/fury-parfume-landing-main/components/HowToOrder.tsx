"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const steps = [
  { num: "01", title: "Выберите аромат", desc: "Найдите свой парфюм в каталоге и выберите объем: 5 или 10 мл." },
  { num: "02", title: "Перейдите в Telegram", desc: "Нажмите на кнопку, чтобы открыть наш официальный канал." },
  { num: "03", title: "Напишите менеджеру", desc: "Оформите заказ, узнайте детали оплаты и удобный способ доставки." },
];

export function HowToOrder() {
  return (
    <section className="border-y border-wine-800 bg-wine-900/20 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-bold sm:text-4xl text-white">Как заказать</h2>
          <p className="mt-4 text-neutral-400">Всего три простых шага до вашего идеального аромата</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative rounded-2xl border border-wine-800 bg-wine-950/50 p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-copper-500/30 bg-copper-500/10 text-lg font-bold text-copper-400">
                {step.num}
              </div>
              <h3 className="font-serif text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={siteConfig.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-copper-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_15px_rgba(184,107,79,0.2)] transition-all hover:bg-copper-500 hover:shadow-[0_0_25px_rgba(184,107,79,0.5)]"
          >
            Перейти в Telegram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}