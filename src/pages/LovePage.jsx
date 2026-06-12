import { useEffect, useState } from "react";

import {
  Heart,
  Images,
  Music2,
  BookHeart,
} from "lucide-react";

const CONFIG = {
  startDate: "2024-08-31",

  spotify:
    "https://open.spotify.com/embed/track/4PTG3Z6ehGkBFwjybzWkR8",

  photos: [
    "/foto1.jpg",
    "/foto2.jpg",
    "/foto3.jpg",
  ],

  reasons: [
    "Seu sorriso",
    "Seu jeito",
    "Seu abraço",
    "Seu olhar",
  ],

  letter: `
Eu te escolheria
todos os dias.

Obrigado por existir.

Você deixa tudo
mais bonito.
`,
};

export default function LovePage() {
  const [time, setTime] =
    useState({
      days: 0,
      h: 0,
      m: 0,
      s: 0,
    });

  useEffect(() => {
    const update = () => {
      const start =
        new Date(
          CONFIG.startDate
        );

      const now =
        new Date();

      const diff =
        now - start;

      setTime({
        days:
          Math.floor(
            diff /
              86400000
          ),

        h:
          Math.floor(
            diff /
              3600000
          ) % 24,

        m:
          Math.floor(
            diff /
              60000
          ) % 60,

        s:
          Math.floor(
            diff /
              1000
          ) % 60,
      });
    };

    update();

    const t =
      setInterval(
        update,
        1000
      );

    return () =>
      clearInterval(t);
  }, []);

  const f = (v) =>
    String(v).padStart(
      2,
      "0"
    );

  return (
    <main className="min-h-screen bg-[#150017] overflow-hidden">

      {/* luz */}

      <div className="fixed inset-0">

        <div className="absolute w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[180px] top-[-180px] left-1/2 -translate-x-1/2" />

      </div>

      <div className="relative z-10 max-w-md mx-auto">

        {/* HERO */}

        <section className="min-h-screen px-7 flex flex-col justify-center">

          <div className="flex justify-center">

            <div
              className="
              w-[110px]
              h-[110px]

              rounded-full

              bg-gradient-to-br
              from-pink-300
              to-pink-500

              flex
              items-center
              justify-center

              shadow-[0_0_80px_rgba(255,90,170,.5)]
              "
            >

              <Heart
                size={52}
                fill="white"
                className="text-white"
              />

            </div>

          </div>

          <h1
            className="
            text-center

            text-white

            text-[62px]

            leading-[1.05]

            mt-10

            font-serif
            "
          >
            Para minha
          </h1>

          <h2
            className="
            text-center

            text-pink-200

            text-[72px]

            font-serif
            "
          >
            Princesa
          </h2>

          {/* contador */}

          <div
            className="
            mt-14

            rounded-[44px]

            bg-white/[0.03]

            border
            border-white/[0.06]

            backdrop-blur-3xl

            p-8
            "
          >

            <div className="text-center">

              <div
                className="
                text-white

                text-[72px]

                font-light
                "
              >
                {time.days}
              </div>

              <div className="text-pink-300">
                dias
              </div>

            </div>

            <div
              className="
              mt-8

              flex

              justify-center

              text-pink-100

              text-[22px]

              gap-2
              "
            >
              <span>
                {f(time.h)}
              </span>

              :

              <span>
                {f(time.m)}
              </span>

              :

              <span>
                {f(time.s)}
              </span>

            </div>

          </div>

        </section>

        {/* MOMENTOS */}

        <section className="px-7">

          <div className="flex gap-3">

            <Images
              className="text-pink-300"
            />

            <h2 className="text-white text-[44px] font-serif">
              Nossos Momentos
            </h2>

          </div>

          <div
            className="
            mt-8

            flex

            gap-5

            overflow-x-auto
            "
          >

            {CONFIG.photos.map(
              (
                img
              ) => (
                <div
                  key={
                    img
                  }
                  className="
                  shrink-0

                  rounded-[38px]

                  p-3

                  bg-white
                  "
                >

                  <img
                    src={
                      img
                    }
                    className="
                    w-[270px]

                    h-[390px]

                    object-cover

                    rounded-[30px]
                    "
                  />

                </div>
              )
            )}

          </div>

        </section>

        {/* MÚSICA */}

        <section className="px-7 mt-20">

          <div className="flex gap-3">

            <Music2 className="text-pink-300" />

            <h2 className="text-white text-[44px] font-serif">
              Nossa Música
            </h2>

          </div>

          <iframe
            src={
              CONFIG.spotify
            }
            width="100%"
            height="160"
            className="
            mt-8

            rounded-[34px]
            "
          />

        </section>

        {/* CARTA */}

        <section className="px-7 py-20">

          <div
            className="
            rounded-[44px]

            bg-[#2a0d31]

            p-10
            "
          >

            <div className="flex gap-3">

              <BookHeart className="text-pink-300" />

              <h2 className="text-white text-[42px] font-serif">
                Carta
              </h2>

            </div>

            <p
              className="
              mt-8

              text-pink-100

              text-[22px]

              leading-[2.1]

              whitespace-pre-line
              "
            >
              {CONFIG.letter}
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}