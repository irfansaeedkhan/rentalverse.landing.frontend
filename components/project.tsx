import Image from "next/image";
import React from "react";

const Project: React.FC = () => {
  return (
    <section id="project" className="relative min-h-dvh pb-20 sm:h-dvh sm:pb-0">
      <div className="absolute inset-0 h-full bg-[url('/assets/images/project-bg.webp')] bg-cover bg-center bg-no-repeat mix-blend-hard-light sm:h-dvh "></div>
      <div className="relative z-10 h-full overflow-hidden">
        <div className="absolute right-0 top-1/2 z-0 hidden w-[50vw] translate-y-[-50%] sm:block">
          <Image
            src="/assets/images/project-man-desktop.png"
            alt="about image"
            width={468}
            height={376}
            className="size-full object-contain"
          />
        </div>
        <div className="max-container relative flex min-h-full w-full flex-col justify-center gap-10 pt-16 sm:h-full sm:pt-0">
          <div className="flex h-full items-start justify-center gap-5 sm:items-center sm:justify-start">
            <div className="flex flex-col gap-3 text-center sm:text-left">
              <h2 className="h2 text-gradient sm:max-w-[16ch]">
                Tailored Office Solutions
              </h2>
              <h3 className="h4 py-6 sm:max-w-[23ch]">
                Customized Virtual Spaces for Every need
              </h3>
              <div className="h6 flex max-w-[48ch] flex-col gap-3 maxmobile:items-center">
                <p>
                  RentalVerse offers a range of virtual office solutions
                  designed to meet the specific requirements of large
                  corporations and small business.
                </p>
                <p>
                  Companies can choose from bespoke virtual offices, fully
                  customized to reflect their brand and operational needs, or
                  opt for flexible subscription plans that provide access to
                  shared virtual environments.
                </p>
                <p>
                  These solutions are crafted to support growth, innovation, and
                  seamless collaboration, making RentalVerse the perfect partner
                  for businesses seeking to thrive in the digital workspace.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/assets/images/project-man-mobile.png"
            alt="about image"
            width={468}
            height={376}
            className="size-full object-contain sm:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
