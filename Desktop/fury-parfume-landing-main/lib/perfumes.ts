import raw from "@/data/perfumes.json";
import type { Perfume } from "@/types/perfume";

export const perfumes = raw as Perfume[];

export function getPerfumeById(id: string): Perfume | undefined {
  return perfumes.find((p) => p.id === id);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
}