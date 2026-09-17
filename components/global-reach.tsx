import Image from "next/image";
import React from "react";

const GlobalReach: React.FC = () => {
  return (
    <section id="globalreach" className="relative overflow-hidden pb-[20%] sm:pb-[10%]">
      <div className="max-container">
        <div className="flex flex-col items-center justify-center pt-10 text-center">
          <h2 className="h2 text-gradient">Global Reach, Performance and Sustainability</h2>
          <p className="h6 max-w-[77ch] py-6">
            Explore the global footprint and impact of Rental Miner. Our state-of-the-art mining operations span
            multiple locations, with a commitment to both business growth and environmental sustainability. Here&apos;s
            a quick overview of our performance and reach.
          </p>
        </div>
      </div>
      <div className="max-container z-10 mx-auto mb-[-5%] mt-[5%] flex w-[90%] flex-col items-center justify-center gap-5 sm:flex-row">
        <div className="globe-card-gradient flex max-w-[39ch] flex-1 flex-col items-center justify-center gap-5 px-5 py-4 text-center text-sm text-white">
          <div className="flex flex-col gap-3 text-center">
            <h3 className="sm:h5 text-xl">Our Global Presence</h3>
            <p className="h7">
              Discover our offices and mining hubs around the world. Each location represents a key part of our
              expansive operations.
            </p>
          </div>
        </div>
      </div>
      <div className="my-[10%] h-[60dvh] w-full bg-[url('/assets/images/globe-png.webp')] bg-cover bg-center bg-no-repeat sm:my-0 sm:h-dvh sm:bg-contain" />
      <div className="max-container z-10 mx-auto flex flex-col justify-center gap-5 md:flex-row">
        <div className="globe-card-gradient flex flex-1 flex-col items-center justify-center gap-5 px-5 py-4 text-left text-sm text-white">
          <div className="flex w-full items-center justify-between">
            <Image
              src="/assets/icons/globe-icon-1.png"
              alt="how it works img"
              width={48}
              height={48}
              className="shrink-0"
            />

            <div className="flex flex-col items-end justify-center gap-3">
              <div className="rounded-full border border-white px-2 py-px text-[8px] text-white">
                <span>LIVE</span>
              </div>
              <p className="h4 text-shadow-green font-kanit text-green">US$ 100,000</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <h3 className="sm:h5  text-xl">Total Sales</h3>
            <p className="h7 !text-left">
              Our impressive total business volume reflects the success and scale of Rental Miner&apos;s global
              activities.
            </p>
          </div>
        </div>
        <div className="globe-card-gradient flex flex-1 flex-col items-center justify-center gap-5 px-5 py-4 text-left text-sm text-white">
          <div className="flex w-full items-center justify-between">
            <Image
              src="/assets/icons/globe-icon-2.png"
              alt="how it works img"
              width={48}
              height={48}
              className="shrink-0"
            />

            <div className="flex flex-col items-end justify-center gap-3">
              <div className="rounded-full border border-white px-2 py-px text-[8px] text-white">
                <span>LIVE</span>
              </div>
              <p className="h4 text-shadow-green text-green">800,000 tRh</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <h3 className="sm:h5  text-xl">Total Rented Hours</h3>
            <p className="h7 !text-left">
              Our offices are constantly active. The total hours rented across our global network, demonstrating the
              high demand for our virtual workspaces.
            </p>
          </div>
        </div>
        <div className="globe-card-gradient flex flex-1 flex-col items-center justify-center gap-5 px-5 py-4 text-left text-sm text-white">
          <div className="flex w-full items-center justify-between">
            <Image
              src="/assets/icons/globe-icon-3.png"
              alt="how it works img"
              width={48}
              height={48}
              className="shrink-0"
            />

            <div className="flex flex-col items-end justify-center gap-3">
              <div className="rounded-full border border-white px-2 py-px text-[8px] text-white">
                <span>LIVE</span>
              </div>
              <p className="h4 text-shadow-green font-semibold text-green">1.3 mWh</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <h3 className="sm:h5 text-xl">Green Energy Impact</h3>
            <p className="h7 !text-left">
              We&apos;re committed to sustainability—highlighting our eco-friendly operations powered by green energy
              sources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
