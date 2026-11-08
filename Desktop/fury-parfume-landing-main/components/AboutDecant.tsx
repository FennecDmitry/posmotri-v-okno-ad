export function AboutDecant() {
  return (
    <section className="border-y border-wine-800 bg-wine-900/50 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl text-white">О разливе</h2>
        <p className="mt-3 max-w-2xl text-neutral-400">
          Разлив — это оригинальный парфюм, перелитый в компактный флакон.
          Пробуете аромат в объёме 5 или 10 мл без покупки полного флакона.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-wine-800 p-5">
            <div className="text-sm uppercase tracking-wide text-amber-400">01</div>
            <h3 className="mt-2 text-lg font-semibold text-white">Оригинал</h3>
            <p className="mt-1 text-sm text-neutral-400">Тот же аромат, что во флаконе бренда.</p>
          </div>
          <div className="rounded-2xl border border-wine-800 p-5">
            <div className="text-sm uppercase tracking-wide text-amber-400">02</div>
            <h3 className="mt-2 text-lg font-semibold text-white">5 или 10 мл</h3>
            <p className="mt-1 text-sm text-neutral-400">Достаточно, чтобы носить и понять аромат.</p>
          </div>
          <div className="rounded-2xl border border-wine-800 p-5">
            <div className="text-sm uppercase tracking-wide text-amber-400">03</div>
            <h3 className="mt-2 text-lg font-semibold text-white">Удобно</h3>
            <p className="mt-1 text-sm text-neutral-400">Компактный формат — в сумке, в поездке, в кармане.</p>
          </div>
        </div>
      </div>
    </section>
  );
}