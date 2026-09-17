import localFont from "next/font/local";

export const kanit = localFont({
  src: "../public/fonts/kanit/Kanit-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-kanit",
  display: "swap",
  preload: true,
});

export const nexaRegular = localFont({
  src: "../public/fonts/nexa/Nexa-Regular.otf",
  weight: "400",
  style: "normal",
  variable: "--font-nexa-regular",
  display: "swap",
  preload: true,
});

export const nexaLight = localFont({
  src: "../public/fonts/nexa/Nexa-Light.otf",
  weight: "100",
  style: "normal",
  variable: "--font-nexa-light",
  display: "swap",
  preload: false,
});

export const nexaHeavy = localFont({
  src: "../public/fonts/nexa/Nexa-Heavy.otf",
  weight: "900",
  style: "normal",
  variable: "--font-nexa-heavy",
  display: "swap",
  preload: false,
});
