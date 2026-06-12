import useLoveCounter from "../hooks/useLoveCounter";

export default function LoveCounter() {
  const { years, months, days } =
    useLoveCounter("2026-02-28");

  return (
    <section className="mt-16 text-center">
      <div className="backdrop-blur-lg bg-white/5 border border-pink-500/20 rounded-3xl p-6">
        <h2 className="text-pink-400 text-xl font-semibold">
          Nosso Tempo Juntos
        </h2>

        <p className="text-3xl font-bold mt-4">
          {years} ano {months} meses {days} dias
        </p>

        <p className="text-zinc-400 mt-2">
          feliz ao seu lado ❤️
        </p>
      </div>
    </section>
  );
}