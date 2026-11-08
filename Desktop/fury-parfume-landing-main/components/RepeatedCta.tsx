import { siteConfig } from "@/config/site";

export function RepeatedCta() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-wine-800 bg-wine-900 p-8 text-center sm:p-12">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl text-white">Не нашли нужный аромат?</h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-400">
          Напишите нам в Telegram — подскажем, есть ли позиция в наличии,
          и поможем с выбором.
        </p>
        <a
          href={siteConfig.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-copper-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-copper-500 hover:shadow-[0_0_20px_rgba(184,107,79,0.4)]"
        >
          Написать в Telegram
        </a>
      </div>
    </section>
  );
}