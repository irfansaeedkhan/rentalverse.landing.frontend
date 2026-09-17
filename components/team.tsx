"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

type TeamMember = {
  image: string;
  name: string;
  title: string;
  responsibilities: string[];
};

const teamMembers: TeamMember[] = [
  {
    image: "/assets/images/mattia-ingenito.webp",
    name: "Mattia Ingenito",
    title: "Chief Blockchain Officer",
    responsibilities: [
      "Expert in decentralized technologies, he shares insights and passion for innovative solutions.",
      "Combines technical knowledge and storytelling, making complex concepts accessible to all.",
      "Visionary, he anticipates trends in the tech and cryptocurrency space.",
    ],
  },
  {
    image: "/assets/images/lucia.webp",
    name: "Lucia De Mojà",
    title: "Chief Project Management",
    responsibilities: [
      "Skilled in project planning and execution, ensuring timely and successful delivery.",
      "Expert in coordinating cross-functional teams for optimal collaboration.",
      "Proven track record of optimizing project workflows to enhance efficiency.",
    ],
  },
  {
    image: "/assets/images/sara.webp",
    name: "Sara Rosso",
    title: "Advisor Partner",
    responsibilities: [
      "Specialist in regulatory compliance and AML policies, ensuring stringent adherence.",
      "Expert in conducting audits and risk assessments to mitigate potential threats.",
      "Develops and implements comprehensive compliance training programs.",
    ],
  },
  {
    image: "/assets/images/antonio-monaco.webp",
    name: "Antonio Monaco",
    title: "Chief Metaverse Officer",
    responsibilities: [
      "Leader in digital space development and expansion, driving innovation.",
      "Ensures seamless virtual office experiences for users.",
      "Expert in identifying and leveraging trends in the digital space industry.",
    ],
  },
  {
    image: "/assets/images/filiberto.webp",
    name: "Filiberto Magnati",
    title: "Chief Executive Officer",
    responsibilities: [
      "Provides strategic leadership and vision for company growth.",
      "Expert in building and maintaining relationships with stakeholders.",
      "Oversees overall business operations with a focus on efficiency and success.",
    ],
  },
  {
    image: "/assets/images/lorenzo-campo.webp",
    name: "Lorenzo Campo",
    title: "Chief Technology Officer",
    responsibilities: [
      "Leader in technology development and innovation, ensuring cutting-edge solutions.",
      "Expert in creating scalable and secure technological infrastructures.",
      "Integrates the latest technological advancements to drive company success.",
    ],
  },
  {
    image: "/assets/images/marco-riccardi.webp",
    name: "Marco Riccardi",
    title: "Chief Vision Officer",
    responsibilities: [
      "Visionary in defining long-term company strategy and goals.",
      "Expert in identifying market trends and opportunities for growth.",
      "Aligns company vision with actionable and strategic plans.",
    ],
  },
  {
    image: "/assets/images/antonio-baldari.webp",
    name: "Antonio Baldari",
    title: "Chief Strategic Officer",
    responsibilities: [
      "Specialist in developing strategic initiatives for company expansion.",
      "Expert in conducting detailed market analysis and research.",
      "Ensures strategic alignment and coordination across all departments.",
    ],
  },
];

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
};

function NextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <button
      type="button"
      aria-label="Next team member"
      className={`${className ?? ""} nextArrow`}
      style={{ ...style, width: 48, height: 48 }}
      onClick={onClick}
    />
  );
}

function PrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <button
      type="button"
      aria-label="Previous team member"
      className={`${className ?? ""} prevArrow`}
      style={{ ...style, width: 48, height: 48 }}
      onClick={onClick}
    />
  );
}

const Team: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    lazyLoad: "ondemand" as const,
  };

  return (
    <section
      id="team"
      className="relative flex min-h-[100dvh] flex-col justify-center pb-20 sm:pb-0"
    >
      <div className="absolute inset-0 bg-[url('/assets/images/team-bg.webp')] bg-lightgray bg-cover bg-center bg-no-repeat sm:h-[100dvh]" />
      <div className="relative z-10 min-h-full">
        <div className="relative flex w-full flex-col items-center justify-center gap-14 pt-14 sm:max-container sm:h-[100vh] sm:flex-row sm:gap-[10%] sm:pt-0">
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
              <h2 className="h2 text-gradient md:max-w-[11ch]">Meet Our Expert Team</h2>
              <h3 className="h4 max-w-[26ch] py-6">Driving Innovation and Excellence</h3>
              <div className="h6 flex max-w-[43ch] flex-col gap-3 maxmobile:items-center">
                <p>
                  At RentalVerse, our team comprises industry leaders with diverse expertise, united
                  by a common goal: to revolutionize the virtual office space.
                </p>
                <p>
                  Each member brings a unique set of skills and a wealth of experience, ensuring that
                  we remain at the forefront of technological innovation and deliver exceptional
                  value.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full sm:max-w-[43%]">
            <Slider {...settings}>
              {teamMembers.map((member, index) => (
                <div key={index} className="px-5">
                  <div className="card-gradient flex h-[82dvh] max-h-[550px] flex-col items-center justify-center gap-5 rounded-[75px] px-5 pb-12 pt-6 text-sm text-white sm:h-[75dvh] sm:rounded-[6.25rem] sm:px-14">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={230}
                      height={230}
                      sizes="230px"
                      loading="lazy"
                    />
                    <h3 className="h4 text-center">{member.name}</h3>
                    <p className="thin-title -mt-1 text-center">{member.title}</p>
                    <ul className="h6 mx-auto flex w-full max-w-[37ch] list-disc flex-col justify-start gap-3 pl-5 pt-1 maxmobile:items-center">
                      {member.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
