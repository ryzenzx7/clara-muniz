import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen overflow-hidden bg-[#120016] relative">

      <div className="absolute inset-0">

        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[150px] left-1/2 -translate-x-1/2 top-[-180px]" />

      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">

        <div
          className="
          w-full
          max-w-sm
          rounded-[40px]
          bg-white/[0.04]
          backdrop-blur-3xl
          border
          border-white/[0.05]
          p-8
          text-center
          "
        >

          <div
            className="
            w-[120px]
            h-[120px]
            rounded-full
            mx-auto

            bg-gradient-to-br
            from-pink-400
            via-fuchsia-500
            to-purple-600

            flex
            items-center
            justify-center

            shadow-[0_0_120px_rgba(255,70,170,.4)]
            "
          >

            <Heart
              size={54}
              className="text-white"
              fill="white"
            />

          </div>

          <h1 className="text-white text-[44px] mt-8 font-serif">
            Uma surpresa
          </h1>

          <p className="text-pink-200 mt-3">
            feita especialmente
            para você
          </p>

          <button
            onClick={() => navigate("/amor")}
            className="
            mt-10
            w-full
            rounded-full
            py-5

            bg-gradient-to-r
            from-pink-500
            to-purple-600

            text-white
            "
          >
            Abrir
          </button>

        </div>

      </div>

    </main>
  );
}