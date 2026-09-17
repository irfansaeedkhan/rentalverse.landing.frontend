"use client";

import { useEffect, useRef, ReactNode } from "react";
import { useWindowSize } from "@darkroom.engineering/hamo";

interface ParallaxProps {
  className?: string;
  children: ReactNode;
  speed?: number;
  id?: string;
}

interface WindowSize {
  width: number;
}

export function Parallax({
  className,
  children,
  speed = 1,
  id = "parallax",
}: ParallaxProps) {
  const trigger = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);
  const { width: windowWidth }: WindowSize = useWindowSize() as WindowSize;

  useEffect(() => {
    if (!trigger.current || !target.current) return;

    let cancelled = false;
    let scrollTrigger: { kill: () => void } | null = null;

    const setup = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (cancelled || !trigger.current || !target.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const y = windowWidth * speed * 0.1;
      const setY = gsap.quickSetter(target.current, "y", "px");
      gsap.set(target.current, { y: 0, force3D: true });

      scrollTrigger = ScrollTrigger.create({
        id,
        trigger: target.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          setY(self.progress * y);
        },
      });

      if (cancelled) {
        scrollTrigger.kill();
        scrollTrigger = null;
      }
    };

    void setup();

    return () => {
      cancelled = true;
      scrollTrigger?.kill();
    };
  }, [id, speed, windowWidth]);

  return (
    <div ref={trigger} className={className} style={{ position: "relative" }}>
      <div
        ref={target}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
