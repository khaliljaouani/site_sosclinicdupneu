"use client";
import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // iOS/Safari : s’assurer que la vidéo est bien muette et inline
    v.muted = true;
    // @ts-ignore - pour iOS plus ancien
    v.setAttribute("webkit-playsinline", "true");
    v.setAttribute("muted", ""); // certains iOS exigent l’attribut en plus de la prop

    // essaie de lancer la lecture dès que possible
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        /* si l’autoplay est bloqué (mode économie d’énergie), on laisse l’affiche (poster) */
      }
    };

    // lance à l’apparition, et si l’onglet redevient visible
    tryPlay();
    const onVis = () => document.visibilityState === "visible" && tryPlay();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div className="relative h-[75vh] md:h-[90vh] overflow-hidden">
     <video
  src="/hero.mp4"
  className="absolute inset-0 h-full w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"   // ou "auto" si tu veux charger plus vite
  poster="/poster.jpg" // optionnel: image de fallback
/>

      {/* voile sombre au-dessus */}
      <div className="absolute inset-0 bg-black/50" />
      {/* ton contenu par-dessus */}
      <div className="relative z-10">{/* ... */}</div>
    </div>
  );
}
