import Image from "next/image";
import React from "react";
import { Parallax } from "./parallex";

const HowItWorks: React.FC = () => {
  return (
    <section id="howitworks" className="relative overflow-hidden">
      <div className="max-container">
        <div className="flex flex-col items-center justify-center pt-10 text-center">
          <h2 className="h1 text-gradient">How It Works</h2>
          <h3 className="h4 py-6">Simple Steps to Join the Future of Work</h3>
          <p className="h6 max-w-prose">
            RentalVerse provides a straightforward and intuitive process for investors to acquire virtual office spaces
            and lease them to businesses.
          </p>
        </div>
      </div>
      <div className="relative min-h-dvh w-full">
        <Parallax speed={-1} className="absolute right-[-55%] top-[-12%] z-0 w-[65vw]">
          <Image
            src="/assets/images/how-it-works-elipse-1.webp"
            alt="how it works img"
            width={643}
            height={645}
            className="z-0 size-full object-contain"
          />
        </Parallax>
        <Parallax speed={2} className="absolute left-[-18%] top-[-17%] z-0 w-[65vw]">
          <Image
            src="/assets/images/how-it-works-elipse-2.webp"
            alt="how it works img"
            width={645}
            height={645}
            className="z-0 size-full object-contain"
          />
        </Parallax>

        <div className="relative z-10 mx-auto flex w-[90%] flex-col items-center justify-center gap-5 pb-[15%] pt-[20%] sm:w-full sm:flex-row">
          <div className="card-gradient flex max-w-[38ch] flex-1 flex-col items-center justify-center gap-5 rounded-[6.25rem] p-10 pb-16 text-center text-sm text-white sm:mt-[-30%]">
            <div>
              <Image src="/assets/images/how-it-works-card-1.webp" alt="how it works img" width={239} height={216} />
            </div>
            <h4 className="sm:h4 pt-5 text-xl">Purchase Virtual Office Spaces</h4>
            <p className="h6">
              Create an account on our platform, and choose from a range of virtual office spaces tailored to your
              investment goals.
            </p>
          </div>
          <div className="card-gradient flex max-w-[38ch] flex-1 flex-col items-center justify-center gap-5 rounded-[6.25rem] p-10 pb-16 text-center text-sm text-white sm:mt-[-15%]">
            <div>
              <Image src="/assets/images/how-it-works-card-2.webp" alt="how it works img" width={184} height={214} />
            </div>
            <h4 className="sm:h4 pt-5 text-xl">Seamless Onboarding</h4>
            <p className="h6">
              Complete a streamlined onboarding process with options to use Crypto or SEPA for transactions, and gain
              access to live transaction tracking for transparency and security.
            </p>
          </div>
          <div className="card-gradient flex max-w-[38ch] flex-1 flex-col items-center justify-center gap-5 rounded-[6.25rem] p-10 pb-16 text-center text-sm text-white">
            <div>
              <Image src="/assets/images/how-it-works-card-3.webp" alt="how it works img" width={189} height={204} />
            </div>
            <h4 className="sm:h4 pt-5 text-xl">Lease to Businesses</h4>
            <p className="h6">
              Offer your virtual office spaces to businesses through flexible subscription plans, providing secure and
              innovative work environments for meetings, events, and daily operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
