// react-lenis.d.ts
declare module "@studio-freight/react-lenis" {
  import { FC, ReactNode } from "react";

  interface ReactLenisProps {
    options?: Record<string, any>;
    root?: boolean;
    children?: ReactNode;
  }

  export const ReactLenis: FC<ReactLenisProps>;
}
