"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

const GetStarted: React.FC = () => {
  return (
    <section
      id="getstarted"
      className="min-h-[100dvh] sm:min-h-[80dvh] w-full relative my-[10%]"
    >
      <div className="absolute top-0 h-full w-[100vw] left-[50%] translate-x-[-50%] z-0  flex flex-col justify-center items-center">
        <Image
          src="/assets/images/get-started-bg.webp"
          width={670}
          height={417}
          loading="lazy"
          alt="Get started with RentalVerse"
          className="hidden sm:block w-[90%] mx-auto object-contain"
        />
        <Image
          src="/assets/images/get-started-bg-mobile.webp"
          width={320}
          height={611}
          loading="lazy"
          alt="Get started with RentalVerse"
          className="sm:hidden w-[90%] h-full mx-auto object-contain"
        />
        <div className="h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 content text-white text-center w-full max-w-[75%] sm:max-w-[55ch] flex flex-col justify-center items-center">
          <h2 className="h2">Get Started Today</h2>
          <h3 className="h4 pt-10 py-8">
            Unlock New Business Opportunities Ready to revolutionize your
            business operations?
          </h3>
          <div className="flex flex-col gap-3">
            <p>
              Explore RentalVerse and discover the perfect virtual office
              solution tailored to your needs.
            </p>
            <p>
              Sign up today to start experiencing the benefits of secure,
              innovative, and customized virtual workspaces. Join us and be part
              of the future of work.
            </p>
          </div>

          <Link
            href="https://rentalverse-app.vercel.app/auth/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              className="mt-5 md:mt-10 text-xs md:text-xl py-2 px-4 md:py-4 md:px-10"
            >
              Sign Up Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
