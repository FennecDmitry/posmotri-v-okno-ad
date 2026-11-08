"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/perfumes";
import type { Perfume } from "@/types/perfume";

type Props = {
  perfume: Perfume;
  onClose: () => void;
};

export function PerfumeModal({ perfume, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${perfume.brand} — ${perfume.name}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative w-full max-w-2xl overflow-hidden rounded-t-3xl bg-wine-900 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-wine-950/90 text-neutral-200 transition hover:bg-wine-800"
          aria-label="Закрыть"
        >
          ✕
        </button>

        <div className="grid gap-0 sm:grid-cols-2">
          <div className="relative aspect-square w-full bg-wine-950 sm:aspect-auto sm:h-full">
            {/* РАЗМЫТЫЙ ФОН */}
            <Image
              src={perfume.image}
              alt=""
              fill
              aria-hidden="true"
              className="object-cover opacity-40 blur-2xl"
            />
            
            {/* ОСНОВНОЕ ФОТО */}
            <Image
              src={perfume.image}
              alt={`${perfume.brand} — ${perfume.name}`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="relative z-10 object-contain p-4"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-4 p-5 sm:p-6 bg-wine-900 relative z-20"
          >
            <div>
              <p className="text-xs uppercase tracking-wide text-copper-400">
                {perfume.brand}
              </p>
              <h2 className="mt-1 font-serif text-xl font-semibold leading-tight text-white">
                {perfume.name}
              </h2>
            </div>

            <ul className="flex flex-col gap-2">
              {perfume.variants.map((v) => (
                <li
                  key={v.volume}
                  className="flex items-center justify-between rounded-lg border border-wine-800/60 bg-wine-950/60 px-3 py-2 text-sm"
                >
                  <span className="text-neutral-300">{v.volume}</span>
                  <span className="font-semibold text-copper-300">
                    {formatPrice(v.price)}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center rounded-full bg-copper-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-copper-500 hover:shadow-[0_0_20px_rgba(184,107,79,0.4)]"
            >
              Написать в Telegram
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}