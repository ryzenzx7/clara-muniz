import { useState } from "react";
import IntroScreen from "../components/IntroScreen";
import MainContent from "../components/MainContent";

export default function Home() {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      {!revealed ? (
        <IntroScreen
          onReveal={() => setRevealed(true)}
        />
      ) : (
        <MainContent />
      )}
    </>
  );
}