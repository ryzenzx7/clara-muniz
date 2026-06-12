import { Heart } from "lucide-react";

export default function LoveLetter() {
  return (
    <section className="mt-14">
      <div
        className="
        backdrop-blur-lg
        bg-[#2a0837]/60
        border border-pink-500/20
        rounded-3xl
        p-5 sm:p-8
        shadow-[0_0_30px_rgba(236,72,153,.12)]
      "
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart
            size={20}
            fill="currentColor"
            className="text-pink-400"
          />

          <h2 className="text-pink-400 text-1xl sm:text-xl font-semibold">
            Carta Para Você
          </h2>

          <Heart
            size={20}
            fill="currentColor"
            className="text-pink-400"
          />
        </div>

        <div className="max-w-sm mx-auto text-center">
          <p
            className="
              italic
              text-zinc-200
              text-sm
              sm:text-base
              leading-8
              font-light
            "
          >
            Eu te amo de um jeito que não
            cabe em palavras, mas mesmo
            assim eu tento. Te amo nos
            detalhes, nas pequenas coisas, no
            jeito que você fala, no jeito que
            sorri, no jeito que faz meus dias
            ficarem mais leves.

            <br />
            <br />

            Com você, tudo faz mais sentido.

            <br />
            <br />

            O tempo passa diferente, os
            problemas parecem menores e a
            vida fica mais bonita. ❤️
          </p>
        </div>
      </div>
    </section>
  );
}