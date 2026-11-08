"use client";

import { siteConfig } from "@/config/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-wine-800 via-wine-950 to-wine-950"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mx-auto max-w-6xl text-center sm:text-left"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-copper-400 font-medium">
          Парфюмерия на разлив
        </p>
        <h1 className="mt-4 font-serif text-5xl font-bold leading-tight sm:text-6xl md:text-7xl text-white">
          FURY <span className="text-copper-400">PARFUM</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-neutral-300 sm:text-lg mx-auto sm:mx-0">
          Оригинальные ароматы в объёмах 5 и 10 мл. Заказ и консультация —
          в нашем Telegram-канале.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:justify-start">
          {/* M5. ПУЛЬСАЦИЯ CTA */}
          <a
            href={siteConfig.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow inline-flex items-center justify-center rounded-full bg-copper-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-copper-500"
          >
            Перейти в Telegram
          </a>
          <a
            href="#catalog"
            className="inline-flex items-center justify-center rounded-full border border-wine-700 bg-wine-900/50 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-copper-500 hover:text-copper-300"
          >
            Смотреть каталог
          </a>
        </div>
      </motion.div>
    </section>
  );
}