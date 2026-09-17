import Image from "next/image";
import React from "react";
import { Parallax } from "./parallex";

const Partnership: React.FC = () => {
  return (
    <section
      id="partnership"
      className="pt-20 sm:pt-0 overflow-hidden md:overflow-visible"
    >
      <div className="max-container">
        <div className="w-full relative flex flex-col min-h-[100dvh] pt-[8%] pb-[20%] sm:pb-[10%]">
          <Parallax
            speed={1}
            className="absolute top-[-20%] left-[50%] translate-x-[-50%] translate-y-[-100%]  z-0 w-[300vw] sm:w-full"
          >
            <Image
              src="/assets/images/about-bg.webp"
              alt="about image"
              width={748}
              height={843}
              className="w-full h-full object-contain"
            />
          </Parallax>
          <div className="flex flex-col items-center relative z-10 text-center">
            <h2 className="h1 text-gradient">Our Partnerships</h2>
            <h3 className="h4 pb-10 xl:pb-12">Collaborating for Success</h3>
          </div>

          <div className="pt-[5%] grid grid-cols-3 sm:grid-cols-6 grid-rows-8 sm:grid-rows-4 gap-5 items-end">
            {Array.from({ length: 24 }).map((_, index) => {
              return (
                <Image
                  key={index}
                  src={`/assets/images/partners/partner-${index + 1}.png`}
                  alt="about image"
                  width={150}
                  height={128}
                  className="object-contain"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
