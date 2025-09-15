"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Petits hacks iOS/Safari
    v.muted = true;                     // indispensable pour l’autoplay
    // @ts-ignore - compat iOS vieux Safari
    v.defaultMuted = true;              // certains iOS respectent mieux defaultMuted
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");

    const tryPlay = () => v.play().catch(() => {/* ignore */});

    // 1) Essaye immédiatement
    tryPlay();

    // 2) Si l’autoplay est bloqué, joue dès la première interaction
    const onInteract = () => tryPlay();
    window.addEventListener("touchstart", onInteract, { once: true, passive: true });
    window.addEventListener("click", onInteract, { once: true });

    // 3) Reprend quand l’onglet redevient visible
    const onVis = () => (document.visibilityState === "visible" ? tryPlay() : v.pause());
    document.addEventListener("visibilitychange", onVis);

    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("click", onInteract);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      controls={false}
      // poster="/poster.jpg" // optionnel: enlève-le le temps du test
    >
      {/* Si tu génères un .webm, laisse-le en premier */}
      {/* <source src="/hero.webm" type="video/webm" /> */}
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  );
}
