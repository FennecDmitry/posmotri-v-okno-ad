import { siteConfig } from "@/config/site";

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-wine-800 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-neutral-400 sm:flex-row">
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-lg font-bold tracking-[0.2em] text-copper-400">
            FURY
          </span>
          <span className="mt-1">© {YEAR} {siteConfig.name}</span>
        </div>
        <a
          href={siteConfig.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-copper-400 transition-colors hover:text-copper-300"
        >
          Telegram-канал
        </a>
      </div>
    </footer>
  );
}