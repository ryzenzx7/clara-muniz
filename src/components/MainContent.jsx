import Hero from "./Hero";
import LoveCounter from "./LoveCounter";
import MusicCard from "./MusicCard";
import Gallery from "./Gallery";
import Footer from "./Footer";
import FloatingHearts from "./FloatingHearts";
import LoveLetter from "./LoveLetter";

export default function MainContent() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#12001f] text-white">

      <FloatingHearts />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-pink-500/20 blur-[120px]" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-600/20 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-md mx-auto px-5">
        <Hero />
        <LoveCounter />
        <MusicCard />
        <LoveLetter/>
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}