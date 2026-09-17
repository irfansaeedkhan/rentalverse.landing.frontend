// @ts-nocheck

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Footer: React.FC = () => {
  const lenis = useLenis(({ scroll }: any) => {});

  return (
    <footer>
      <div className="max-container relative flex w-full flex-col items-center justify-center gap-20 pb-10 pt-16 sm:gap-24">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/logo.svg"
            width={107}
            height={36}
            alt="RentalVerse"
            className="shrink-0"
          />
        </Link>

        <ul className="flex flex-col items-center gap-5 sm:flex-row sm:gap-6">
          <li>
            <button
              type="button"
              className={cn(buttonVariants({ variant: "tertiary" }), "min-h-11 px-5 py-3")}
              onClick={() => lenis?.scrollTo("#header", { lerp: 0.1 })}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              className={cn(buttonVariants({ variant: "tertiary" }), "min-h-11 px-5 py-3")}
              onClick={() => lenis?.scrollTo("#contact", { lerp: 0.1 })}
            >
              Contact
            </button>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className={cn(buttonVariants({ variant: "tertiary" }), "min-h-11 px-5 py-3")}
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/legal-notice"
              className={cn(buttonVariants({ variant: "tertiary" }), "min-h-11 px-5 py-3")}
            >
              Cookies Policy
            </Link>
          </li>
        </ul>

        <div className="flex w-full flex-col items-center justify-between gap-16 sm:flex-row sm:gap-0">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-10">
            <Link href="mailto:finance@apexorder.xyz" className="flex min-h-11 items-center gap-2">
              <Image
                src="/assets/icons/email.png"
                width={24}
                height={24}
                alt=""
                aria-hidden
                className="shrink-0"
              />
              <span className="h7 !font-kanit">finance@apexorder.xyz</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/apexorder?igsh=YmdhbmpzcGdjZWI1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-11 items-center justify-center"
            >
              <Image
                src="/assets/icons/social-icon-3.svg"
                width={24}
                height={24}
                alt=""
                aria-hidden
                className="shrink-0"
              />
            </Link>
            <Link
              href="https://bit.ly/ApexOrder-Telegram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex size-11 items-center justify-center"
            >
              <Image
                src="/assets/icons/social-icon-5.svg"
                width={24}
                height={24}
                alt=""
                aria-hidden
                className="shrink-0"
              />
            </Link>
            <Link
              href="https://youtu.be/Sdy8cHcIQys?si=2Yrvct8i8HHTASUv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex size-11 items-center justify-center"
            >
              <Image
                src="/assets/icons/social-icon-6.svg"
                width={24}
                height={24}
                alt=""
                aria-hidden
                className="shrink-0"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center bg-gradient-pattern">
        <p className="h7 py-3 !font-kanit text-primary">
          <span className="!font-serif">&copy;</span> RentalVerse 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
