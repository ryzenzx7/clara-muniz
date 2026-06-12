import { Heart, Play } from "lucide-react";

export default function IntroScreen({ onReveal }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">

      <div className="absolute inset-0 bg-[#12001f]">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-[#180022] to-black" />

        <div className="absolute top-1/2 left-1/2 w-[70vw] h-[70vw] max-w-80 max-h-80 -translate-x-1/2 -translate-y-1/2 bg-pink-500/20 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full">

        <div className="mb-8">
          <Heart
            size={60}
            fill="#ff5ca8"
            className="text-pink-500 animate-pulse drop-shadow-[0_0_25px_rgba(255,92,168,.8)]"
          />
        </div>

        <p className="text-zinc-300 text-base sm:text-lg mb-8 px-4">
          Uma surpresa especial te espera
        </p>

        <button
          onClick={onReveal}
          className="
            w-full
            max-w-[320px]
            py-4
            rounded-3xl
            backdrop-blur-xl
            bg-white/5
            border border-pink-500/20
            shadow-[0_0_50px_rgba(255,0,128,.25)]
            hover:scale-105
            transition
          "
        >
          <div className="flex items-center justify-center gap-3">

            <Heart
              size={14}
              fill="white"
              className="text-white shrink-0"
            />

            <span className="text-base sm:text-lg text-white font-medium">
              Clique aqui, amor
            </span>

            <Heart
              size={14}
              fill="white"
              className="text-white shrink-0"
            />
          </div>
        </button>

        <p className="mt-6 text-zinc-500 text-sm">
          Toque para revelar
        </p>

      </div>
    </section>
  );
}