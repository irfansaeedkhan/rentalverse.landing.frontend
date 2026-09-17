import Image from "next/image";
import React from "react";
import { Parallax } from "./parallex";

const Technology: React.FC = () => {
  return (
    <section id="technology" className=" overflow-hidden md:overflow-visible">
      <div className="max-container">
        <div className="relative flex min-h-dvh w-full flex-col pb-[10%]">
          <Parallax
            speed={-2}
            className="absolute left-[50%] top-0 z-0 w-[150vw] translate-x-[-50%] sm:top-[-12%] sm:w-full"
          >
            <Image
              src="/assets/images/about-bg.webp"
              alt="about image"
              width={748}
              height={843}
              className="size-full object-contain"
            />
          </Parallax>
          <div className="relative z-10 flex flex-col">
            <div className="mx-auto flex w-full flex-col sm:max-w-fit">
              <p className="h1 text-gradient hidden h-0 self-start opacity-0 sm:block" aria-hidden="true">
                RentalMinerTechnology
              </p>
              <h2 className="h1 text-gradient self-start">RentalMiner</h2>
              <h2 className="h1 text-gradient self-end">Technology</h2>
            </div>
            <h3 className="h4 py-10 text-center xl:py-12">
              Powered by Numeris <br /> RentalMiner Certified Hardware Ensuring Top Security
            </h3>
            <div className="h6 flex flex-col gap-3 text-center maxmobile:items-center">
              <p>
                All transactions within RentalVerse are facilitated through RentalMiner, our certified hardware solution
                provided by Numeris.
              </p>
              <p>
                This technology guarantees the highest level of security and reliability for all virtual office
                operations.
              </p>
              <p>
                With RentalMiner, every transaction is secure, transparent, and efficient, providing both investors and
                businesses with a trustworthy platform for managing their virtual office needs.
              </p>
            </div>
          </div>

          <div className="custom-grid pt-[15%] md:h-dvh">
            <div className="grid-2  overflow-hidden rounded-3xl">
              <Image
                src="/assets/images/tech-grid-1.webp"
                alt="about image"
                width={455}
                height={551}
                className="size-full object-cover"
              />
            </div>
            <div className="grid-3  overflow-hidden rounded-3xl">
              <Image
                src="/assets/images/tech-grid-2.webp"
                alt="about image"
                width={265}
                height={265}
                className="size-full object-cover"
              />
            </div>
            <div className="grid-4  overflow-hidden rounded-3xl">
              <Image
                src="/assets/images/tech-grid-3.webp"
                alt="about image"
                width={358}
                height={265}
                className="size-full object-cover"
              />{" "}
            </div>
            <div className="grid-5  overflow-hidden rounded-3xl">
              <Image
                src="/assets/images/tech-grid-5.webp"
                alt="about image"
                width={265}
                height={265}
                className="size-full object-cover"
              />{" "}
            </div>
            <div className="grid-6  overflow-hidden rounded-3xl">
              <Image
                src="/assets/images/tech-grid-4.webp"
                alt="about image"
                width={360}
                height={265}
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
