import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-wine-800/50 bg-wine-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex flex-col leading-none group">
          <span className="animate-shine font-serif text-2xl font-bold tracking-[0.2em] transition-opacity">
            FURY
          </span>
          <span className="text-[0.6rem] tracking-[0.4em] text-neutral-400 mt-1">
            PARFUM
          </span>
        </a>
        <a
          href={siteConfig.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-copper-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-copper-500 hover:shadow-[0_0_15px_rgba(184,107,79,0.4)]"
        >
          Telegram
        </a>
      </div>
    </header>
  );
}