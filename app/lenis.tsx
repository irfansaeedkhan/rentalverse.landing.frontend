"use client";
import React, { PropsWithChildren } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const Lenis = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis options={{ lerp: 0.1, duration: 1.5 }} root>
      {children}
    </ReactLenis>
  );
};

export default Lenis;
