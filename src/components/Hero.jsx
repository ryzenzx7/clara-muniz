import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-20 text-center">
      <Heart
        size={50}
        className="mx-auto text-pink-500 animate-pulse"
      />

      <h1 className="text-4xl font-bold mt-5 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
        Para Minha Princesa
      </h1>

      <p className="text-zinc-400 mt-4">
        Cada momento ao seu lado vale a pena ❤️
      </p>
    </section>
  );
}