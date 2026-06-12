import { Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function MusicCard() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.5;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay bloqueado pelo navegador");
      }
    };

    playAudio();
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="mt-14">
      <audio
        ref={audioRef}
        src="/music/planos.mp3"
        loop
      />

      <div className="bg-white/5 backdrop-blur-lg border border-pink-500/20 rounded-3xl p-5">

        <h2 className="text-center text-pink-400 font-bold mb-4 text-lg">
          Nossa Música 🎵
        </h2>

        <div className="bg-zinc-900 p-5 rounded-2xl text-center">

        <img
          src="/assets/planos.jpg"
          alt="Capa do álbum"
          onError={() => console.log("Imagem não encontrada")}
          className="
            w-32
            h-32
            mx-auto
            rounded-2xl
            object-cover
            shadow-lg
          "
        />

          <h3 className="font-semibold text-lg mt-4">
            Planos
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            BK & Luccas Carlos
          </p>

          <button
            onClick={toggleMusic}
            className="
              mt-5
              bg-white
              text-black
              p-4
              rounded-full
              hover:scale-105
              transition
              duration-300
            "
          >
            {isPlaying ? (
              <Pause size={22} />
            ) : (
              <Play size={22} />
            )}
          </button>

        </div>
      </div>
    </section>
  );
}