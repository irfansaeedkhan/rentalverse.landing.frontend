import Image from "next/image";
import React from "react";
import { Parallax } from "./parallex";

const TechnologicalPartners: React.FC = () => {
  return (
    <section
      id="numeris"
      className="relative min-h-dvh w-full overflow-hidden bg-primary py-20 backdrop-blur-2xl sm:py-[10%]"
    >
      <Parallax
        speed={-2}
        className="absolute top-[5px] z-0 w-[150vw] opacity-70 md:right-[-55%] md:top-[-12%] md:w-[85vw] maxmobile:left-[-55%]"
      >
        <Image
          src="/assets/images/how-it-works-elipse-1.webp"
          alt="technology partner section img"
          width={643}
          height={645}
          className="z-0 size-full object-contain"
        />
      </Parallax>
      <Parallax
        speed={2}
        className="absolute top-[250px] z-0 w-[265vw] opacity-80 md:left-[-18%] md:top-[-17%] md:w-[65vw] maxmobile:right-0"
      >
        <Image
          src="/assets/images/how-it-works-elipse-2.webp"
          alt="technology partner section img"
          width={645}
          height={645}
          className="z-0 size-full object-contain"
        />
      </Parallax>
      <div className="max-container relative z-10">
        <div className="flex flex-col items-center justify-center pb-10 text-center md:pb-0">
          <h2 className="h2 text-gradient max-w-[20ch]">
            Technological Partners: <br className="block md:hidden" /> Driving Innovation Together
          </h2>
          <h3 className="h4 py-6">Strategic Collaborations with Industry Leaders</h3>
        </div>
      </div>
      <div className="max-container relative z-10 mx-auto flex w-[90%] flex-col items-center justify-between gap-5 pt-[8%] md:w-full md:flex-row md:items-end">
        <div className="flex w-full max-w-fit flex-col items-start gap-10 md:w-2/3">
          <Image
            src="/assets/images/numeris.png"
            alt="numeris logo"
            width={232}
            height={128}
            className="z-1 mx-auto w-40 object-contain sm:w-60"
          />
          <div className=" flex-2 card-gradient flex flex-col items-center justify-center gap-5 rounded-[6.25rem] p-8 pb-10 text-center text-sm text-white sm:max-w-[68ch] sm:p-10 sm:pb-16">
            <Image
              src="/assets/images/numeris.png"
              alt="numeris logo"
              width={232}
              height={128}
              className="z-1 mx-auto h-auto w-20 object-contain sm:w-32 sm:pt-5"
            />
            <p className="h6">
              Numeris is at the forefront of secure transaction technology, specializing in high-performance hardware
              and blockchain-based solutions. Their expertise in secure data handling and real-time monitoring ensures
              that RentalVerse operates with the highest standards of reliability and security, setting new benchmarks
              in digital asset management.
            </p>
          </div>
        </div>
        <div className="hidden md:block md:w-1/3">
          <Image
            src="/assets/images/numeris-bg-2.webp"
            alt="numeris bg"
            width={578}
            height={360}
            className="z-1 w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologicalPartners;
