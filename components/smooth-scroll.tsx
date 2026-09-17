"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { PropsWithChildren } from "react";

function SmoothScrolling({ children }: PropsWithChildren) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
