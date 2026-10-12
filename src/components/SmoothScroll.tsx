"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [nativeScroll, setNativeScroll] = useState(true);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 760px), (pointer: coarse), (prefers-reduced-motion: reduce)");
    const update = () => setNativeScroll(mobile.matches);
    update();
    mobile.addEventListener("change", update);
    return () => mobile.removeEventListener("change", update);
  }, []);

  if (nativeScroll) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        anchors: { offset: -78 },
        autoRaf: true,
        lerp: 0.09,
        smoothWheel: true,
        stopInertiaOnNavigate: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
      }}
    >
      {children}
    </ReactLenis>
  );
}
