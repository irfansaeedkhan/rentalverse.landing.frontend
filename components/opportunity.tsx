import Image from "next/image";
import React from "react";

const Opportunity: React.FC = () => {
  return (
    <section id="opportunity">
      <div className="max-container">
        <div className="flex flex-col-reverse items-center justify-between pt-10 sm:flex-row sm:pt-0">
          <div className="flex-1">
            <Image
              src="/assets/images/opportunity-1.webp"
              alt="about image"
              width={468}
              height={376}
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h2 className="h2 text-gradient sm:max-w-[16ch]">Secure Meetings and Events</h2>
            <h3 className="h4 py-6">High-Security Virtual Spaces for All Occasions</h3>
            <div className="h6 flex max-w-[56ch] flex-col gap-3 maxmobile:items-center">
              <p>
                RentalVerse ensures that all virtual office spaces are equipped with top-notch security features,
                providing a safe and private environment for meetings and events.
              </p>
              <p>
                Whether hosting a confidential board meeting or a large-scale virtual conference, businesses can trust
                RentalVerse to deliver a secure and reliable experience.
              </p>
              <p>
                Our encrypted and state-of-the-art virtual spaces are designed to meet the highest standards of
                security, giving companies the confidence to operate without concerns about privacy or data breaches.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-10 sm:flex-row sm:pt-0">
          <div className="flex flex-col gap-3  text-center sm:text-left">
            <h2 className="h2 text-gradient sm:max-w-[16ch]">Join the Visionaries</h2>
            <h3 className="h4 py-6">Leading the Future of Workspaces</h3>
            <div className="h6 flex max-w-[56ch] flex-col gap-3 maxmobile:items-center">
              <p>RentalVerse is designed for visionaries who recognize the potential of virtual workspaces.</p>
              <p>
                By joining our platform, businesses can leverage the growing market for virtual office spaces and
                position themselves at the forefront of innovation.
              </p>
              <p>
                RentalVerse provides the tools and environment needed to excel in the digital age, making it an
                essential partner for forward-thinking companies.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/images/opportunity-2.webp"
              alt="about image"
              width={468}
              height={376}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
