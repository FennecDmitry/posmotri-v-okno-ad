export type PerfumeVariant = {
  volume: string; // "5 ml" | "10 ml"
  price: number;  // ₽
};

export type Perfume = {
  id: string;
  brand: string;
  name: string;
  image: string;
  variants: PerfumeVariant[];
};