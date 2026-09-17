import dynamic from "next/dynamic";
import Header from "@/components/header";

const About = dynamic(() => import("@/components/about"));
const Project = dynamic(() => import("@/components/project"));
const Opportunity = dynamic(() => import("@/components/opportunity"));
const HowItWorks = dynamic(() => import("@/components/how-it-works"));
const Technology = dynamic(() => import("@/components/technology"));
const Team = dynamic(() => import("@/components/team"));
const GlobalReach = dynamic(() => import("@/components/global-reach"));
const TechnologicalPartners = dynamic(
  () => import("@/components/technological-partners")
);
const Partnership = dynamic(() => import("@/components/partnership"));
const GetStarted = dynamic(() => import("@/components/get-started"));
const ContactUs = dynamic(() => import("@/components/contact-us"));
const Footer = dynamic(() => import("@/components/footer"));
const CookiesManagement = dynamic(
  () => import("@/components/cookies/cookies-management")
);

export default function Home() {
  return (
    <main className="size-full bg-primary font-nexa1 text-white">
      <Header />
      <About />
      <Project />
      <Opportunity />
      <HowItWorks />
      <Technology />
      <GlobalReach />
      <Team />
      <TechnologicalPartners />
      <Partnership />
      <GetStarted />
      <ContactUs />
      <Footer />
      <CookiesManagement />
    </main>
  );
}
