"use client";

import { useState, useMemo } from "react";
import { PerfumeCard } from "./PerfumeCard";
import type { Perfume } from "@/types/perfume";
import { motion } from "framer-motion";

type SortMode = "default" | "asc" | "desc";

export function Catalog({ perfumes }: { perfumes: Perfume[] }) {
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const sortedPerfumes = useMemo(() => {
    if (sortMode === "default") return perfumes;

    return [...perfumes].sort((a, b) => {
      const minA = Math.min(...a.variants.map((v) => v.price));
      const minB = Math.min(...b.variants.map((v) => v.price));
      const maxA = Math.max(...a.variants.map((v) => v.price));
      const maxB = Math.max(...b.variants.map((v) => v.price));

      if (sortMode === "asc") return minA - minB;
      return maxB - maxA;
    });
  }, [perfumes, sortMode]);

  return (
    <section id="catalog" className="px-4 py-16 sm:px-6 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl"
      >
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl text-white">Каталог</h2>
          <p className="mt-4 text-neutral-400 mb-8">
            {perfumes.length} ароматов. Объёмы 5 и 10 мл.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "default", label: "По умолчанию" },
            { id: "asc", label: "Цена ↑" },
            { id: "desc", label: "Цена ↓" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setSortMode(btn.id as SortMode)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                sortMode === btn.id
                  ? "bg-copper-600 text-white shadow-[0_0_15px_rgba(184,107,79,0.4)]"
                  : "border border-wine-800 bg-wine-900/40 text-neutral-400 hover:border-copper-500/50 hover:text-white"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedPerfumes.map((p) => (
            <PerfumeCard key={p.id} perfume={p} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}