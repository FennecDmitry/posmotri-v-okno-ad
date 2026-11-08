"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Perfume } from "@/types/perfume";
import { formatPrice } from "@/lib/perfumes";
import { PerfumeModal } from "./PerfumeModal";

type Props = { perfume: Perfume };

export function PerfumeCard({ perfume }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <div style={{ perspective: 1000 }} className="group relative w-full">
        <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,_rgba(184,107,79,0.35)_0%,_transparent_70%)] opacity-40 blur-2xl transition-opacity duration-500 md:group-hover:opacity-80" />

        <motion.article
          layout
          ref={ref}
          onPointerMove={handleMouseMove}
          onPointerLeave={handleMouseLeave}
          onClick={() => setOpen(true)}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          whileHover={{ scale: 1.02 }}
          transition={{ layout: { duration: 0.4, type: "spring" } }}
          className="relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-wine-800 bg-wine-900/80 backdrop-blur-sm transition-colors duration-300 hover:border-copper-500/50"
        >
          <div className="absolute right-3 top-3 z-30 rounded border border-copper-500/50 bg-wine-950/80 px-2 py-0.5 text-[10px] font-semibold tracking-widest text-copper-400 backdrop-blur-md">
            ORIGINAL
          </div>

          <div 
            style={{ transform: "translateZ(30px)" }} 
            className="relative aspect-[4/5] w-full overflow-hidden bg-wine-950"
          >
            {/* РАЗМЫТЫЙ ФОН (заполняет пустоты цветами фото) */}
            <Image
              src={perfume.image}
              alt=""
              fill
              aria-hidden="true"
              className="scale-110 object-cover opacity-50 blur-xl"
            />
            
            {/* ОСНОВНОЕ ФОТО */}
            <Image
              src={perfume.image}
              alt={`${perfume.brand} — ${perfume.name}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="relative z-10 object-contain p-2 transition-transform duration-400 ease-out md:group-hover:scale-105 md:group-hover:-translate-y-1"
            />
            
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-wine-900/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
          </div>

          <div style={{ transform: "translateZ(20px)" }} className="flex flex-1 flex-col gap-3 p-5 relative z-20">
            <div>
              <p className="text-xs uppercase tracking-wider text-copper-400">
                {perfume.brand}
              </p>
              <h3 className="mt-1 font-serif text-lg font-semibold leading-tight text-white">
                {perfume.name}
              </h3>
            </div>
            <ul className="mt-auto flex flex-col gap-2">
              {perfume.variants.map((v) => (
                <li
                  key={v.volume}
                  className="flex items-center justify-between rounded-lg border border-wine-800/50 bg-wine-950/50 px-3 py-2 text-sm"
                >
                  <span className="text-neutral-300">{v.volume}</span>
                  <span className="font-semibold text-copper-300 transition-colors group-hover:text-copper-100">
                    {formatPrice(v.price)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>

      <AnimatePresence>
        {open && (
          <PerfumeModal perfume={perfume} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}