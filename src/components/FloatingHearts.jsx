export default function FloatingHearts() {
  const hearts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 8 + Math.random() * 3,
    delay: Math.random() * 12,
    size: 10 + Math.random() * 16,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="falling-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
          }}
        />
      ))}
    </div>
  );
}