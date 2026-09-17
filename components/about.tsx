import Image from "next/image";
import React from "react";
import { Parallax } from "./parallex";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="max-container">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex flex-1 flex-col gap-3 text-center md:text-left">
            <h2 className="h2 text-gradient pt-10 md:pt-0">About RentalVerse</h2>
            <h3 className="h4 py-6">Pioneering Virtual Office Solutions</h3>
            <div className="h6 flex flex-col gap-3 maxmobile:items-center">
              <p>RentalVerse is transforming the landscape of work by offering cutting-edge virtual office spaces.</p>
              <p>
                Designed to cater to the diverse needs of modern businesses, RentalVerse provides a secure and
                innovative platform for renting and sub-renting virtual offices.
              </p>
              <p>
                These spaces are not only state-of-the-art but also tailored to meet the highest standards of security
                and functionality, ensuring businesses can operate efficiently in a digital environment.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/images/about.webp"
              alt="About RentalVerse virtual offices"
              width={468}
              height={376}
              className="w-full"
              sizes="(max-width: 768px) 100vw, 468px"
            />
          </div>
        </div>
      </div>
      <div className="relative flex min-h-[60dvh] w-full flex-col overflow-hidden pb-20 sm:h-[90dvh] sm:pb-0 md:overflow-visible">
        <Parallax
          speed={-2}
          className="absolute left-[50%] top-0 z-0 w-[150vw] translate-x-[-50%] sm:top-[-12%] sm:w-full"
        >
          <Image
            src="/assets/images/about-bg.webp"
            alt="about image"
            width={748}
            height={843}
            className="mx-auto size-full object-contain sm:w-4/5"
          />
        </Parallax>
        <div className="max-container relative z-10 flex flex-col">
          <div className="mx-auto flex w-full flex-col sm:max-w-fit">
            <p className="h1 text-gradient hidden h-0 self-start opacity-0 sm:block" aria-hidden="true">
              WhyChooseRentalVerse
            </p>
            <h2 className="h1 text-gradient self-start">Why Choose</h2>
            <h2 className="h1 text-gradient self-end">RentalVerse</h2>
          </div>
          <h3 className="h4 py-10 text-center xl:py-12">Leading the Way in Virtual Workspace Innovation</h3>
          <div className="h6 flex flex-col gap-3 text-center maxmobile:items-center">
            <p>RentalVerse stands out by offering unparalleled benefits in the realm of virtual office spaces.</p>
            <p>
              Businesses can take advantage of secure, customized office environments perfect for hosting meetings,
              events, and daily operations. The platform is designed to facilitate seamless interaction and
              collaboration, making it an ideal choice for companies looking to enhance productivity and innovation.
            </p>
            <p>
              With a focus on security, ease of use, and advanced technology, RentalVerse redefines the virtual
              workspace experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
