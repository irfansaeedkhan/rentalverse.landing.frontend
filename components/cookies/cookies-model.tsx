"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ModalContainer from "../modal-container";
import { CustomButton } from "../ui/custom-button";
import StoredInformationToggle from "./cookies-information-toggle";
import ToggleSection from "./toggle-section";
import ToggleOption from "./toggle-option";
import { toast } from "react-toastify";
import { copyText } from "../copy-text";
import { Copy, X } from "lucide-react";
import { getPreferences, savePreferences } from "./storage-utils";

interface Props {
  open: boolean;
  onClose: () => void;
}

export interface StoredInfoItem {
  name: string;
  description?: string;
  type: string;
  duration?: string;
  domain?: string;
}

const googleAnalyticsData: StoredInfoItem[] = [
  {
    name: "__utmb",
    description: "This cookie is used to track the time of the visit.",
    type: "cookie",
    duration: "Session",
  },
  {
    name: "_ga",
    description: "This cookie is used to distinguish between users.",
    type: "cookie",
    duration: "2 years",
  },
  { name: "_gid", description: "This cookie is used to identify the user.", type: "cookie", duration: "1 day" },
  {
    name: "__utma",
    description:
      "This cookie is used to record the time and date of the first visit, the total number of visits and the start time of the current visit.",
    type: "cookie",
    duration: "Session",
  },
  {
    name: "__utmz",
    description: "This cookie is used to record where the visitor came from.",
    type: "cookie",
    duration: "Session",
  },
  { name: "IDE", description: "This is used to show personalised ads.", type: "cookie", duration: "1 year, 1 month" },
  {
    name: "CONSENT",
    description: "This is used to store the consent choices of the user.",
    type: "cookie",
    duration: "2 years",
  },
  { name: "__utmt", description: "This is used to throttle the request rate.", type: "cookie", duration: "10 minutes" },
  {
    name: "_gat",
    description: "This is used to read and filter requests from bots.",
    type: "cookie",
    duration: "1 minute",
  },
  {
    name: "__utmc",
    description: "This is used to store the time of the visit.",
    type: "cookie",
    duration: "30 minutes",
  },
  {
    name: "FPID",
    description: "This is used to store a value used for setting the Client ID in the request to Google's servers.",
    type: "cookie",
    duration: "2 years",
  },
  {
    name: "FPLC",
    description:
      "This is used to register a unique ID that is used to generate statistical data about how the visitor uses the website.",
    type: "cookie",
    duration: "20 hours",
  },
];

const defaultPreferences = {
  "Facebook Pixel": true,
  "Google Tag Manager": true,
  "Site Analytics": true,
  "Site Personalization": true,
  reCAPTCHA: true,
  "FBCDN Facebook": true,
  "Facebook Social Plugins": true,
  "Google Analytics": true,
  "Usercentrics Consent Management Platform": true,
  "cloudfront.net": true,
  "gstatic.com": true,
};

export const CookiesModal: React.FC<Props> = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState("categories");
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [preferences, setPreferences] = useState<Record<string, boolean>>(defaultPreferences);
  // Centralized storage for refs
  const sectionRefs = useRef<Record<string, React.RefObject<HTMLDivElement | null>>>({});

  // Helper to get or create a ref dynamically
  const getOrCreateRef = (sectionName: string): React.RefObject<HTMLDivElement | null> => {
    if (!sectionRefs.current[sectionName]) {
      sectionRefs.current[sectionName] = React.createRef<HTMLDivElement>();
    }
    return sectionRefs.current[sectionName];
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, sectionName: string) => {
    setActiveTab("service"); // Switch to the service tab
    setOpenSection(sectionName); // Open the specific section

    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Ensure tab switch completes before scrolling
  };

  // Load preferences from local storage or set all to true on first load
  useEffect(() => {
    const savedPreferences = getPreferences();
    if (savedPreferences) {
      setPreferences(savedPreferences);
    } else {
      // Save default preferences to local storage if not already saved
      savePreferences(defaultPreferences);
    }
  }, []);

  const handleToggleChange = (option: string, value: boolean) => {
    const updatedPreferences = { ...preferences, [option]: value };
    setPreferences(updatedPreferences);
    savePreferences(updatedPreferences); // Save to local storage
  };

  return (
    <ModalContainer
      modalId="create-order-modal"
      isOpen={open}
      onClose={onClose}
      modalContentClassName="h-auto rounded-xl max-w-[750px] mx-4 custom-scrollbar"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className="flex w-full flex-col gap-4 font-normal">
        <div className="flex flex-col gap-4 px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base text-white">Privacy Settings</h3>
            {/* add close icon */}
            <button type="button" aria-label="Close privacy settings" onClick={onClose}>
              <X className="size-8 shrink-0 text-white" aria-hidden />
            </button>
          </div>
          <p className="text-xs text-white">
            This tool helps you to select and deactivate various tags / trackers / analytic tools used on this website.
          </p>
          <div className="flex gap-10">
            <Link
              href="/privacy-policy"
              target="_blank"
              className="text-xs text-green transition-all duration-300 hover:text-green/80"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal-notice"
              target="_blank"
              className="text-xs text-green transition-all duration-300 hover:text-green/80"
            >
              Legal Notice
            </Link>
          </div>
        </div>

        <div className="flex justify-center gap-10 bg-primary-dark">
          <button
            className={`px-[10%] py-2 text-base ${
              activeTab === "categories" ? "border-b-2 border-green text-green" : "text-white"
            }`}
            onClick={() => setActiveTab("categories")}
          >
            Categories
          </button>
          <button
            className={`px-[10%] py-2 text-base ${
              activeTab === "service" ? "border-b-2 border-green text-green" : "text-white"
            }`}
            onClick={() => setActiveTab("service")}
          >
            Service
          </button>
        </div>
        <div className="overflow-y-auto scroll-smooth">
          <div className="mt-6 px-4 text-white sm:px-7">
            {activeTab === "categories" && (
              <>
                {/* Marketing Category */}
                <ToggleSection
                  title="Marketing"
                  description="These technologies are used by advertisers to serve ads that are relevant to your interests."
                  isOpen={openSection === "Facebook Pixel"}
                >
                  <ToggleOption
                    title="Facebook Pixel"
                    handleRedirectFunc={() => scrollToSection(getOrCreateRef("Facebook Pixel"), "Facebook Pixel")}
                    isEnabled={preferences["Facebook Pixel"]}
                    onToggle={(value) => handleToggleChange("Facebook Pixel", value)}
                  />
                </ToggleSection>

                {/* Functional Category */}
                <ToggleSection
                  title="Functional"
                  description="These technologies enable us to analyse the use of the website in order to measure and improve performance."
                >
                  <ToggleOption
                    title="Google Tag Manager"
                    handleRedirectFunc={() =>
                      scrollToSection(getOrCreateRef("Google Tag Manager"), "Google Tag Manager")
                    }
                    isEnabled={preferences["Google Tag Manager"]}
                    onToggle={(value) => handleToggleChange("Google Tag Manager", value)}
                  />
                  <ToggleOption
                    title="Site Analytics"
                    handleRedirectFunc={() => scrollToSection(getOrCreateRef("Site Analytics"), "Site Analytics")}
                    isEnabled={preferences["Site Analytics"]}
                    onToggle={(value) => handleToggleChange("Site Analytics", value)}
                  />
                  <ToggleOption
                    title="Site Personalization"
                    handleRedirectFunc={() =>
                      scrollToSection(getOrCreateRef("Site Personalization"), "Site Personalization")
                    }
                    isEnabled={preferences["Site Personalization"]}
                    onToggle={(value) => handleToggleChange("Site Personalization", value)}
                  />
                  <ToggleOption
                    title="reCAPTCHA"
                    handleRedirectFunc={() => scrollToSection(getOrCreateRef("reCAPTCHA"), "reCAPTCHA")}
                    isEnabled={preferences.reCAPTCHA}
                    onToggle={(value) => handleToggleChange("reCAPTCHA", value)}
                  />
                </ToggleSection>

                {/* Essential Category */}
                <ToggleSection
                  title="Essential"
                  description="These technologies are required to activate the core functionality of the website."
                  disabled
                >
                  <ToggleOption
                    title="FBCDN Facebook"
                    handleRedirectFunc={() => scrollToSection(getOrCreateRef("FBCDN Facebook"), "FBCDN Facebook")}
                    isEnabled={preferences["FBCDN Facebook"]}
                    onToggle={(value) => handleToggleChange("FBCDN Facebook", value)}
                    disabled
                  />
                  <ToggleOption
                    title="Facebook Social Plugins"
                    handleRedirectFunc={() =>
                      scrollToSection(getOrCreateRef("Facebook Social Plugins"), "Facebook Social Plugins")
                    }
                    isEnabled={preferences["Facebook Social Plugins"]}
                    onToggle={(value) => handleToggleChange("Facebook Social Plugins", value)}
                    disabled
                  />
                  <ToggleOption
                    title="Google Analytics"
                    handleRedirectFunc={() => scrollToSection(getOrCreateRef("Google Analytics"), "Google Analytics")}
                    isEnabled={preferences["Google Analytics"]}
                    onToggle={(value) => handleToggleChange("Google Analytics", value)}
                    disabled
                  />
                  <ToggleOption
                    title="Usercentrics Consent Management Platform"
                    handleRedirectFunc={() =>
                      scrollToSection(
                        getOrCreateRef("Usercentrics Consent Management Platform"),
                        "Usercentrics Consent Management Platform"
                      )
                    }
                    isEnabled={preferences["Usercentrics Consent Management Platform"]}
                    onToggle={(value) => handleToggleChange("Usercentrics Consent Management Platform", value)}
                    disabled
                  />
                  <ToggleOption
                    title="cloudfront.net"
                    handleRedirectFunc={() => scrollToSection(getOrCreateRef("cloudfront.net"), "cloudfront.net")}
                    isEnabled={preferences["cloudfront.net"]}
                    onToggle={(value) => handleToggleChange("cloudfront.net", value)}
                    disabled
                  />
                  <ToggleOption
                    title="gstatic.com"
                    handleRedirectFunc={() => scrollToSection(getOrCreateRef("gstatic.com"), "gstatic.com")}
                    isEnabled={preferences["gstatic.com"]}
                    onToggle={(value) => handleToggleChange("gstatic.com", value)}
                    disabled
                  />
                </ToggleSection>
              </>
            )}

            {activeTab === "service" && (
              <>
                <div ref={getOrCreateRef("Cloudfront.net")}>
                  <ToggleSection
                    title="Cloudfront.net"
                    description="Essential"
                    isOpen={openSection === "Cloudfront.net"}
                  >
                    <div className="flex flex-col gap-4 text-xs">
                      {/* Description of Service */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Description of Service</h6>
                        <p>
                          This is a content delivery network provided by Amazon. The use of a CDN enables the user to
                          make content available to you for retrieval more quickly with the help of regionally or
                          internationally distributed servers. When you access this content, a connection is established
                          between you and the respective servers of the CDN, whereby personal data may be transmitted.
                        </p>
                      </div>

                      {/* Processing Company */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Processing Company</h6>
                        <p>
                          Amazon Web Services EMEA SARL <br />
                          38 Avenue John F. Kennedy, L-1855 Luxemburg
                        </p>
                      </div>

                      {/* Data Purposes */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Purposes</h6>
                        <p>This list represents the purposes of the data collection and processing.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Content Delivery"
                        />
                      </div>

                      {/* Technologies Used */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Technologies Used</h6>
                        <p>
                          This list represents all technologies this service uses to collect data. Typical technologies
                          are Cookies and Pixels that are placed in the browser.
                        </p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Scripts"
                        />
                      </div>

                      {/* Data Collected */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Collected</h6>
                        <p>
                          This list represents all (personal) data that is collected by or through the use of this
                          service.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "User agent data",
                            "Usage data",
                            "Device operating system",
                            "Device information",
                            "IP address",
                            "Browser information",
                          ].map((data) => (
                            <CustomButton
                              key={data}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={data}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Legal Basis */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Legal Basis</h6>
                        <p>In the following the required legal basis for the processing of data is listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Art. 6 para. 1 s. 1 lit. f GDPR"
                        />
                      </div>

                      {/* Location of Processing */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Location of Processing</h6>
                        <p>
                          This is the primary location where the collected data is being processed. If the data is also
                          processed in other countries, you are informed separately.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>Worldwide</li>
                        </ul>
                      </div>

                      {/* Retention Period */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Retention Period</h6>
                        <p>
                          The retention period is the time span the collected data is saved for the processing purposes.
                          The data needs to be deleted as soon as it is no longer needed for the stated processing
                          purposes.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>
                            The data will be deleted as soon as they are no longer needed for the processing purposes.
                          </li>
                        </ul>
                      </div>

                      {/* Transfer to Third Countries */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Transfer to Third Countries</h6>
                        <p>
                          This service may forward the collected data to a different country. Please note that this
                          service might transfer the data to a country without the required data protection standards.
                          Below you can find a list of countries to which the data is being transferred. For more
                          information regarding safeguards please refer to the provider&apos;s privacy policy or contact
                          the provider directly.
                        </p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Worldwide"
                        />
                      </div>

                      {/* Data Recipients */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Recipients</h6>
                        <p>In the following the recipients of the data collected are listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Amazon Web Services EMEA SARL"
                        />
                      </div>

                      {/* Links to Policies */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Policies of the data processor</h6>
                        <div className="flex flex-col gap-2 pt-3">
                          {/* Privacy Policy */}
                          <div className="flex flex-col">
                            <p className="text-xs text-white">
                              Click here to read the privacy policy of the data processor:
                            </p>
                            <Link
                              href="https://aws.amazon.com/privacy/"
                              target="_blank"
                              className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                            >
                              Privacy Policy
                            </Link>
                          </div>

                          {/* Cookie Policy */}
                          <div className="flex flex-col">
                            <p className="text-xs text-white">
                              Click here to read the cookie policy of the data processor:
                            </p>
                            <Link
                              href="https://aws.amazon.com/privacy/"
                              target="_blank"
                              className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                            >
                              Cookie Policy
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* history table */}
                      <div className="mt-1">
                        <h6 className="mb-2 font-nexaheavy text-sm text-white">History</h6>
                        <div className="overflow-hidden rounded-lg border border-primary-dark">
                          <table className="w-full border-collapse text-left text-sm text-white">
                            <thead>
                              <tr className="bg-primary-light">
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Decision</th>
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Date</th>
                              </tr>
                            </thead>
                            <tbody className="text-xs">
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>yes (website default)</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">14.10.2024, 17:42</td>
                              </tr>
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>yes</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">15.10.2024, 13:29</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </ToggleSection>
                </div>
                <div ref={getOrCreateRef("Facebook Social Plugins")}>
                  <ToggleSection
                    title="Facebook Social Plugins"
                    description="Essential"
                    isOpen={openSection === "Facebook Social Plugins"}
                  >
                    <div className="flex flex-col gap-4 text-xs">
                      {/* Description of Service */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Description of Service</h6>
                        <p>
                          This is a social plug-in from Facebook, which allows the user to connect their website with
                          the social network Facebook.
                        </p>
                      </div>

                      {/* Processing Company */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Processing Company</h6>
                        <p>
                          Meta Platforms Ireland Ltd. <br />4 Grand Canal Square, Grand Canal Harbour, Dublin, D02,
                          Ireland
                        </p>
                      </div>

                      {/* Data Protection Officer */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Protection Officer of Processing Company</h6>
                        <p>
                          Below you can find the email address of the data protection officer of the processing company.
                        </p>
                        <Link
                          href="https://www.facebook.com/help/contact/540977946302970"
                          target="_blank"
                          className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                        >
                          Contact Data Protection Officer
                        </Link>
                      </div>

                      {/* Data Purposes */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Purposes</h6>
                        <p>This list represents the purposes of the data collection and processing.</p>
                        <div className="flex flex-wrap gap-2">
                          {["Integration of Facebook functions", "Optimization", "Marketing"].map((purpose) => (
                            <CustomButton
                              key={purpose}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={purpose}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Technologies Used */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Technologies Used</h6>
                        <p>
                          This list represents all technologies this service uses to collect data. Typical technologies
                          are Cookies and Pixels that are placed in the browser.
                        </p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Cookies"
                        />
                      </div>

                      {/* Data Collected */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Collected</h6>
                        <p>
                          This list represents all (personal) data that is collected by or through the use of this
                          service.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Browser information",
                            "Date and time of visit",
                            "Facebook user ID",
                            "Websites visited",
                            "HTTP-header",
                            "Interaction data",
                            "Browser type",
                            "IP address",
                          ].map((data) => (
                            <CustomButton
                              key={data}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={data}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Legal Basis */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Legal Basis</h6>
                        <p>In the following the required legal basis for the processing of data is listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Art. 6 para. 1 s. 1 lit. a GDPR"
                        />
                      </div>

                      {/* Location of Processing */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Location of Processing</h6>
                        <p>
                          This is the primary location where the collected data is being processed. If the data is also
                          processed in other countries, you are informed separately.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>European Union</li>
                        </ul>
                      </div>

                      {/* Retention Period */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Retention Period</h6>
                        <p>
                          The retention period is the time span the collected data is saved for the processing purposes.
                          The data needs to be deleted as soon as it is no longer needed for the stated processing
                          purposes.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>
                            The data will be deleted as soon as they are no longer needed for the processing purposes.
                          </li>
                        </ul>
                      </div>

                      {/* Transfer to Third Countries */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Transfer to Third Countries</h6>
                        <p>
                          This service may forward the collected data to a different country. Please note that this
                          service might transfer the data to a country without the required data protection standards.
                          Below you can find a list of countries to which the data is being transferred. For more
                          information regarding safeguards please refer to the provider&apos;s privacy policy or contact
                          the provider directly.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["United States of America", "Singapore"].map((country) => (
                            <CustomButton
                              key={country}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={country}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Data Recipients */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Recipients</h6>
                        <p>In the following the recipients of the data collected are listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Meta Platforms Ireland Ltd., Meta Platforms Inc."
                        />
                      </div>

                      {/* Links to Policies */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Policies and Opt-out Information</h6>
                        <div className="flex flex-col gap-2 pt-3">
                          {/* Privacy Policy */}
                          <div className="flex flex-col">
                            <p className="text-xs text-white">
                              Click here to read the privacy policy of the data processor:
                            </p>
                            <Link
                              href="https://www.facebook.com/privacy/explanation"
                              target="_blank"
                              className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                            >
                              Privacy Policy
                            </Link>
                          </div>

                          {/* Cookie Policy */}
                          <div className="flex flex-col">
                            <p className="text-xs text-white">
                              Click here to read the cookie policy of the data processor:
                            </p>
                            <Link
                              href="https://www.facebook.com/policies/cookies/"
                              target="_blank"
                              className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                            >
                              Cookie Policy
                            </Link>
                          </div>

                          {/* Opt-out from Processor */}
                          <div className="flex flex-col">
                            <p className="text-xs text-white">
                              Click here to opt out from this processor across all domains:
                            </p>
                            <Link
                              href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen"
                              target="_blank"
                              className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                            >
                              Opt-out from Processor
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* History Table */}
                      <div className="mt-1">
                        <h6 className="mb-2 font-nexaheavy text-sm text-white">History</h6>
                        <div className="overflow-hidden rounded-lg border border-primary-dark">
                          <table className="w-full border-collapse text-left text-sm text-white">
                            <thead>
                              <tr className="bg-primary-light">
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Decision</th>
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Date</th>
                              </tr>
                            </thead>
                            <tbody className="text-xs">
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>yes (website default)</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">14.10.2024, 17:42</td>
                              </tr>
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>yes</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">15.10.2024, 13:29</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </ToggleSection>
                </div>
                <div ref={getOrCreateRef("FBCDN Facebook")}>
                  <ToggleSection
                    title="FBCDN Facebook"
                    description="Essential"
                    isOpen={openSection === "FBCDN Facebook"}
                  >
                    <div className="flex flex-col gap-4 text-xs">
                      {/* Description of Service */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Description of Service</h6>
                        <p>This is a content delivery network from Facebook.</p>
                      </div>

                      {/* Processing Company */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Processing Company</h6>
                        <p>
                          Meta Platforms Ireland Ltd. <br />4 Grand Canal Square, Grand Canal Harbour, Dublin, D02,
                          Ireland
                        </p>
                      </div>

                      {/* Data Protection Officer */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Protection Officer of Processing Company</h6>
                        <p>
                          Below you can find the email address of the data protection officer of the processing company.
                        </p>
                        <Link
                          href="https://www.facebook.com/help/contact/540977946302970"
                          target="_blank"
                          className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                        >
                          Contact Data Protection Officer
                        </Link>
                      </div>

                      {/* Data Purposes */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Purposes</h6>
                        <p>This list represents the purposes of the data collection and processing.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Content delivery network (CDN)"
                        />
                      </div>

                      {/* Technologies Used */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Technologies Used</h6>
                        <p>
                          This list represents all technologies this service uses to collect data. Typical technologies
                          are Cookies and Pixels that are placed in the browser.
                        </p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Cookies"
                        />
                      </div>

                      {/* Data Collected */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Collected</h6>
                        <p>
                          This list represents all (personal) data that is collected by or through the use of this
                          service.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Browser information",
                            "Browser version",
                            "Browser language",
                            "Screen resolution",
                            "Device operating system",
                            "Name of website",
                            "User agent",
                            "IP address",
                          ].map((data) => (
                            <CustomButton
                              key={data}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={data}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Legal Basis */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Legal Basis</h6>
                        <p>In the following the required legal basis for the processing of data is listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Art. 6 para. 1 s. 1 lit. a GDPR"
                        />
                      </div>

                      {/* Location of Processing */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Location of Processing</h6>
                        <p>
                          This is the primary location where the collected data is being processed. If the data is also
                          processed in other countries, you are informed separately.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>European Union</li>
                        </ul>
                      </div>

                      {/* Retention Period */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Retention Period</h6>
                        <p>
                          The retention period is the time span the collected data is saved for the processing purposes.
                          The data needs to be deleted as soon as it is no longer needed for the stated processing
                          purposes.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>
                            The data will be deleted as soon as they are no longer needed for the processing purposes.
                          </li>
                        </ul>
                      </div>

                      {/* Transfer to Third Countries */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Transfer to Third Countries</h6>
                        <p>
                          This service may forward the collected data to a different country. Please note that this
                          service might transfer the data to a country without the required data protection standards.
                          Below you can find a list of countries to which the data is being transferred. For more
                          information regarding safeguards please refer to the provider&apos;s privacy policy or contact
                          the provider directly.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Singapore", "United States of America", "United Kingdom"].map((country) => (
                            <CustomButton
                              key={country}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={country}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Data Recipients */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Recipients</h6>
                        <p>In the following the recipients of the data collected are listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Meta Platforms Ireland Ltd., Meta Platforms Inc."
                        />
                      </div>

                      {/* Links to Policies */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Policies</h6>
                        <div className="flex flex-col gap-2 pt-3">
                          <p className="text-xs text-white">
                            Click here to read the privacy policy of the data processor:
                          </p>
                          <Link
                            href="https://www.facebook.com/privacy/explanation"
                            target="_blank"
                            className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                          >
                            Privacy Policy
                          </Link>
                          <p className="text-xs text-white">
                            Click here to read the cookie policy of the data processor:
                          </p>
                          <Link
                            href="https://www.facebook.com/privacy/explanation"
                            target="_blank"
                            className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                          >
                            Cookie Policy
                          </Link>
                        </div>
                      </div>

                      {/* History Table */}
                      <div className="mt-1">
                        <h6 className="mb-2 font-nexaheavy text-sm text-white">History</h6>
                        <div className="overflow-hidden rounded-lg border border-primary-dark">
                          <table className="w-full border-collapse text-left text-sm text-white">
                            <thead>
                              <tr className="bg-primary-light">
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Decision</th>
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Date</th>
                              </tr>
                            </thead>
                            <tbody className="text-xs">
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>yes (website default)</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">14.10.2024, 17:42</td>
                              </tr>
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>yes</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">15.10.2024, 13:29</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </ToggleSection>
                </div>
                <div ref={getOrCreateRef("Google Analytics")}>
                  <ToggleSection
                    title="Google Analytics"
                    description="Essential"
                    isOpen={openSection === "Google Analytics"}
                  >
                    <div className="flex flex-col gap-4 text-xs">
                      {/* Description of Service */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Description of Service</h6>
                        <p>
                          This is a web analytics service. With this, the user can measure the advertising return on
                          investment &quot;ROI&quot; as well as track user behavior with flash, video, websites, and
                          applications.
                        </p>
                      </div>

                      {/* Processing Company */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Processing Company</h6>
                        <p>
                          Google Ireland Limited <br />
                          Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland
                        </p>
                      </div>

                      {/* Data Protection Officer */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Protection Officer of Processing Company</h6>
                        <p>
                          Below you can find the email address of the data protection officer of the processing company.
                        </p>
                        <Link
                          href="https://support.google.com/policies/contact/general_privacy_form"
                          target="_blank"
                          className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                        >
                          Contact Data Protection Officer
                        </Link>
                      </div>

                      {/* Data Purposes */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Purposes</h6>
                        <p>This list represents the purposes of the data collection and processing.</p>
                        <div className="flex flex-wrap gap-2">
                          {["Marketing", "Analytics"].map((purpose) => (
                            <CustomButton
                              key={purpose}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={purpose}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Technologies Used */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Technologies Used</h6>
                        <p>
                          This list represents all technologies this service uses to collect data. Typical technologies
                          are Cookies and Pixels that are placed in the browser.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Cookies", "Pixel", "JavaScript"].map((tech) => (
                            <CustomButton
                              key={tech}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={tech}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Data Collected */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Collected</h6>
                        <p>
                          This list represents all (personal) data that is collected by or through the use of this
                          service.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Click path",
                            "Date and time of visit",
                            "Device information",
                            "Location information",
                            "IP address",
                            "Pages visited",
                            "Referrer URL",
                            "Browser information",
                            "Hostname",
                            "Browser language",
                            "Browser type",
                            "Screen resolution",
                            "Device operating system",
                            "Interaction data",
                            "User behaviour",
                            "Visited URL",
                            "Cookie ID",
                          ].map((data) => (
                            <CustomButton
                              key={data}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={data}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Legal Basis */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Legal Basis</h6>
                        <p>In the following the required legal basis for the processing of data is listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Art. 6 para. 1 s. 1 lit. a GDPR"
                        />
                      </div>

                      {/* Location of Processing */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Location of Processing</h6>
                        <p>
                          This is the primary location where the collected data is being processed. If the data is also
                          processed in other countries, you are informed separately.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>European Union</li>
                        </ul>
                      </div>

                      {/* Retention Period */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Retention Period</h6>
                        <p>
                          The retention period is the time span the collected data is saved for the processing purposes.
                          The data needs to be deleted as soon as it is no longer needed for the stated processing
                          purposes.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>
                            The retention period depends on the type of the saved data. Each user can choose how long
                            Google Analytics retains data before automatically deleting it.
                          </li>
                        </ul>
                      </div>

                      {/* Transfer to Third Countries */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Transfer to Third Countries</h6>
                        <p>
                          This service may forward the collected data to a different country. Please note that this
                          service might transfer the data to a country without the required data protection standards.
                          Below you can find a list of countries to which the data is being transferred.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["United States of America", "Singapore", "Chile", "Taiwan"].map((country) => (
                            <CustomButton
                              key={country}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={country}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Data Recipients */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Recipients</h6>
                        <p>In the following the recipients of the data collected are listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Google Ireland Limited, Alphabet Inc., Google LLC"
                        />
                      </div>

                      {/* Links to Policies */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Policies and Opt-out Information</h6>
                        <div className="flex flex-col gap-2 pt-3">
                          <p className="text-xs text-white">
                            Click here to read the privacy policy of the data processor:
                          </p>
                          <Link
                            href="https://business.safety.google/privacy/?hl=en"
                            target="_blank"
                            className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                          >
                            Privacy Policy
                          </Link>
                          <p className="text-xs text-white">
                            Click here to read the cookie policy of the data processor:
                          </p>
                          <Link
                            href="https://policies.google.com/technologies/cookies?hl=en"
                            target="_blank"
                            className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                          >
                            Cookie Policy
                          </Link>
                          <p className="text-xs text-white">
                            Click here to opt out from this processor across all domains:
                          </p>
                          <Link
                            href="https://tools.google.com/dlpage/gaoptout?hl=de"
                            target="_blank"
                            className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                          >
                            Opt-out from Processor
                          </Link>
                        </div>
                      </div>

                      {/* Storage Information */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Storage Information</h6>
                        <ul className="list-disc pl-4 pt-1">
                          <li>Maximum age of cookie storage: 2 years</li>
                          <li>Non-cookie storage: no</li>
                        </ul>
                      </div>
                      {/* storage information */}
                      <StoredInformationToggle title="Stored Information" data={googleAnalyticsData} />
                      {/* History Table */}
                      <div className="mt-1">
                        <h6 className="mb-2 font-nexaheavy text-sm text-white">History</h6>
                        <div className="overflow-hidden rounded-lg border border-primary-dark">
                          <table className="w-full border-collapse text-left text-sm text-white">
                            <thead>
                              <tr className="bg-primary-light">
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Decision</th>
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Date</th>
                              </tr>
                            </thead>
                            <tbody className="text-xs">
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>yes (website default)</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">14.10.2024, 17:42</td>
                              </tr>
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>yes</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">15.10.2024, 13:29</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </ToggleSection>
                </div>
                <div ref={getOrCreateRef("gstatic.com")}>
                  <ToggleSection title="gstatic.com" description="Essential" isOpen={openSection === "gstatic.com"}>
                    <div className="flex flex-col gap-4 text-xs">
                      {/* Description of Service */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Description of Service</h6>
                        <p>
                          This is a domain used by Google to off-load static content to a different domain name in an
                          effort to reduce bandwidth usage and increase network performance for the end user.
                        </p>
                      </div>

                      {/* Processing Company */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Processing Company</h6>
                        <p>
                          Alphabet Inc. <br />
                          1600 Amphitheatre Parkway, Mountain View, CA 94043-1351, United States of America
                        </p>
                      </div>

                      {/* Data Protection Officer */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Protection Officer of Processing Company</h6>
                        <p>
                          Below you can find the email address of the data protection officer of the processing company.
                        </p>
                        <Link
                          href="https://support.google.com/policies/contact/general_privacy_form"
                          target="_blank"
                          className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                        >
                          Contact Data Protection Officer
                        </Link>
                      </div>

                      {/* Data Purposes */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Purposes</h6>
                        <p>This list represents the purposes of the data collection and processing.</p>
                        <div className="flex flex-wrap gap-2">
                          {["Increasing network performance", "Reducing bandwidth usage"].map((purpose) => (
                            <CustomButton
                              key={purpose}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={purpose}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Technologies Used */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Technologies Used</h6>
                        <p>
                          This list represents all technologies this service uses to collect data. Typical technologies
                          are Cookies and Pixels that are placed in the browser.
                        </p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="JavaScript"
                        />
                      </div>

                      {/* Data Collected */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Collected</h6>
                        <p>
                          This list represents all (personal) data that is collected by or through the use of this
                          service.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Images", "CSS"].map((data) => (
                            <CustomButton
                              key={data}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={data}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Legal Basis */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Legal Basis</h6>
                        <p>In the following the required legal basis for the processing of data is listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Art. 6 para. 1 s. 1 lit. f GDPR"
                        />
                      </div>

                      {/* Location of Processing */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Location of Processing</h6>
                        <p>
                          This is the primary location where the collected data is being processed. If the data is also
                          processed in other countries, you are informed separately.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>United States of America</li>
                        </ul>
                      </div>

                      {/* Retention Period */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Retention Period</h6>
                        <p>
                          The retention period is the time span the collected data is saved for the processing purposes.
                          The data needs to be deleted as soon as it is no longer needed for the stated processing
                          purposes.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>
                            Requests for CSS assets are cached for 1 day, font files are cached for one year. Some
                            information is retained until removed by the user, some expires after a specific period of
                            time, and some is retained until the user&apos;s Google Account is deleted.
                          </li>
                        </ul>
                      </div>

                      {/* Transfer to Third Countries */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Transfer to Third Countries</h6>
                        <p>
                          This service may forward the collected data to a different country. Please note that this
                          service might transfer the data to a country without the required data protection standards.
                          Below you can find a list of countries to which the data is being transferred. For more
                          information regarding safeguards please refer to the provider&apos;s privacy policy or contact
                          the provider directly.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["United States of America", "China", "Taiwan", "Singapore"].map((country) => (
                            <CustomButton
                              key={country}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={country}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Data Recipients */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Recipients</h6>
                        <p>In the following the recipients of the data collected are listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Alphabet Inc., Google LLC, Google Ireland Limited"
                        />
                      </div>

                      {/* Links to Policies */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Policies and Opt-out Information</h6>
                        <div className="flex flex-col gap-2 pt-3">
                          <p className="text-xs text-white">
                            Click here to read the privacy policy of the data processor:
                          </p>
                          <Link
                            href="http://www.google.com/intl/de/policies/privacy/"
                            target="_blank"
                            className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                          >
                            Privacy Policy
                          </Link>
                          <p className="text-xs text-white">
                            Click here to read the cookie policy of the data processor:
                          </p>
                          <Link
                            href="https://policies.google.com/technologies/cookies?hl=en"
                            target="_blank"
                            className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                          >
                            Cookie Policy
                          </Link>
                          <p className="text-xs text-white">
                            Click here to opt out from this processor across all domains:
                          </p>
                          <Link
                            href="https://safety.google/privacy/privacy-controls/"
                            target="_blank"
                            className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                          >
                            Opt-out from Processor
                          </Link>
                        </div>
                      </div>

                      {/* Storage Information */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Storage Information</h6>
                        <p>
                          Below you can see the longest potential duration for storage on a device, as set when using
                          the cookie method of storage and if there are any other methods used.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>Maximum age of cookie storage: Session</li>
                          <li>Non-cookie storage: no</li>
                        </ul>
                      </div>

                      {/* History Table */}
                      <div className="mt-1">
                        <h6 className="mb-2 font-nexaheavy text-sm text-white">History</h6>
                        <div className="overflow-hidden rounded-lg border border-primary-dark">
                          <table className="w-full border-collapse text-left text-sm text-white">
                            <thead>
                              <tr className="bg-primary-light">
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Decision</th>
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Date</th>
                              </tr>
                            </thead>
                            <tbody className="text-xs">
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>yes (website default)</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">14.10.2024, 17:42</td>
                              </tr>
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>yes</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">15.10.2024, 13:29</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </ToggleSection>
                </div>
                <div ref={getOrCreateRef("Usercentrics Consent Management Platform")}>
                  <ToggleSection
                    title="Usercentrics Consent Management Platform"
                    description="Essential"
                    isOpen={openSection === "Usercentrics Consent Management Platform"}
                  >
                    <div className="flex flex-col gap-4 text-xs">
                      {/* Description of Service */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Description of Service</h6>
                        <p>
                          This is a consent management service. Usercentrics GmbH is used on websites and apps as a
                          processor for the purpose of consent management.
                        </p>
                      </div>

                      {/* Processing Company */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Processing Company</h6>
                        <p>
                          Usercentrics GmbH <br />
                          Sendlinger Str. 7, 80331 Munich, Germany
                        </p>
                      </div>

                      {/* Data Protection Officer */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Protection Officer of Processing Company</h6>
                        <p>
                          Below you can find the email address of the data protection officer of the processing company.
                        </p>
                        <Link
                          className="text-xs text-green underline"
                          href="mailto:datenschutz@usercentrics.com"
                          target="_blank"
                        >
                          datenschutz@usercentrics.com
                        </Link>
                      </div>

                      {/* Data Purposes */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Purposes</h6>
                        <p>This list represents the purposes of the data collection and processing.</p>
                        <div className="flex flex-wrap gap-2">
                          {["Compliance with legal obligations", "Consent storage"].map((purpose) => (
                            <CustomButton
                              key={purpose}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={purpose}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Technologies Used */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Technologies Used</h6>
                        <p>
                          This list represents all technologies this service uses to collect data. Typical technologies
                          are Cookies and Pixels that are placed in the browser.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Local storage", "Pixel"].map((tech) => (
                            <CustomButton
                              key={tech}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={tech}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Data Collected */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Collected</h6>
                        <p>
                          This list represents all (personal) data that is collected by or through the use of this
                          service.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Opt-in and opt-out data",
                            "Referrer URL",
                            "User agent",
                            "User settings",
                            "Consent ID",
                            "Time of consent",
                            "Consent type",
                            "Template version",
                            "Banner language",
                            "IP address",
                            "Geographic location",
                          ].map((data) => (
                            <CustomButton
                              key={data}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={data}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Legal Basis */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Legal Basis</h6>
                        <p>In the following the required legal basis for the processing of data is listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Art. 6 para. 1 s. 1 lit. c GDPR"
                        />
                      </div>

                      {/* Location of Processing */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Location of Processing</h6>
                        <p>
                          This is the primary location where the collected data is being processed. If the data is also
                          processed in other countries, you are informed separately.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>European Union</li>
                        </ul>
                      </div>

                      {/* Retention Period */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Retention Period</h6>
                        <p>
                          The retention period is the time span the collected data is saved for the processing purposes.
                          The data needs to be deleted as soon as it is no longer needed for the stated processing
                          purposes.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>
                            The consent data (given consent and revocation of consent) are stored for one year. The data
                            will then be deleted immediately.
                          </li>
                        </ul>
                      </div>

                      {/* Data Recipients */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Recipients</h6>
                        <p>In the following the recipients of the data collected are listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Usercentrics GmbH"
                        />
                      </div>

                      {/* Links to Policies */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Policies and Opt-out Information</h6>
                        <Link
                          href="https://usercentrics.com/privacy-policy/"
                          target="_blank"
                          className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                        >
                          Privacy Policy
                        </Link>
                      </div>

                      {/* Stored Information */}
                      <StoredInformationToggle
                        title="Stored Information"
                        data={[
                          {
                            name: "uc_settings and/or ucString",
                            description:
                              "Holds ControllerID, SettingsID, language, settings version, and consent history.",
                            type: "web",
                            domain: "usercentrics.com",
                          },
                          {
                            name: "uc_user_interaction",
                            description: "Signals if the user has already given consent.",
                            type: "web",
                          },
                          {
                            name: "ucData (optional)",
                            description: "Holds information about Google Consent Mode.",
                            type: "web",
                          },
                          {
                            name: "uc_ui_version",
                            description: "States the UI version used by the clients.",
                            type: "web",
                          },
                          {
                            name: "uc_user_country",
                            description: "Recognizes the location of the user and shows the correct CMP version.",
                            type: "web",
                          },
                        ]}
                      />

                      {/* History Table */}
                      <div className="mt-1">
                        <h6 className="mb-2 font-nexaheavy text-sm text-white">History</h6>
                        <div className="overflow-hidden rounded-lg border border-primary-dark">
                          <table className="w-full border-collapse text-left text-sm text-white">
                            <thead>
                              <tr className="bg-primary-light">
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Decision</th>
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Date</th>
                              </tr>
                            </thead>
                            <tbody className="text-xs">
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>yes (website default)</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">14.10.2024, 17:42</td>
                              </tr>
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>yes</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">15.10.2024, 13:29</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </ToggleSection>
                </div>
                <div ref={getOrCreateRef("Facebook Pixel")}>
                  <ToggleSection
                    title="Facebook Pixel"
                    description="Marketing"
                    isOpen={openSection === "Facebook Pixel"}
                  >
                    <div className="flex flex-col gap-4 text-xs">
                      {/* Description of Service */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Description of Service</h6>
                        <p>
                          This is a Tracking technology offered by Facebook and used by other Facebook services. It is
                          used to track interactions of visitors with websites (&quot;Events&quot;) after they have
                          clicked on an ad placed on Facebook or other services provided by Meta
                          (&quot;Conversion&quot;).
                        </p>
                      </div>

                      {/* Processing Company */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Processing Company</h6>
                        <p>
                          Meta Platforms Ireland Ltd. <br />4 Grand Canal Square, Grand Canal Harbour, Dublin, D02,
                          Ireland
                        </p>
                      </div>

                      {/* Data Protection Officer */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Protection Officer of Processing Company</h6>
                        <p>
                          Below you can find the email address of the data protection officer of the processing company.
                        </p>
                        <Link
                          href="https://www.facebook.com/help/contact/1650115808681298"
                          target="_blank"
                          className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                        >
                          Contact Data Protection Officer
                        </Link>
                      </div>

                      {/* Data Purposes */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Purposes</h6>
                        <p>This list represents the purposes of the data collection and processing.</p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Analytics",
                            "Marketing",
                            "Retargeting",
                            "Advertisement",
                            "Conversion Tracking",
                            "Personalisation",
                          ].map((purpose) => (
                            <CustomButton
                              key={purpose}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={purpose}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Technologies Used */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Technologies Used</h6>
                        <p>
                          This list represents all technologies this service uses to collect data. Typical technologies
                          are Cookies and Pixels that are placed in the browser.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Cookies", "Pixel"].map((tech) => (
                            <CustomButton
                              key={tech}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={tech}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Data Collected */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Collected</h6>
                        <p>
                          This list represents all (personal) data that is collected by or through the use of this
                          service.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Ads viewed",
                            "Content viewed",
                            "Device information",
                            "Geographic location",
                            "HTTP-header",
                            "Interactions with advertisement, services, and products",
                            "IP address",
                            "Items clicked",
                            "Marketing information",
                            "Pages visited",
                            "Pixel ID",
                            "Referrer URL",
                            "Usage data",
                            "User behaviour",
                            "Facebook cookie information",
                            "Facebook user ID",
                            "Usage/click behaviour",
                            "Browser information",
                            "Device operating system",
                            "Device ID",
                            "User agent",
                            "Browser type",
                          ].map((data) => (
                            <CustomButton
                              key={data}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={data}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Legal Basis */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Legal Basis</h6>
                        <p>In the following the required legal basis for the processing of data is listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Art. 6 para. 1 s. 1 lit. a GDPR"
                        />
                      </div>

                      {/* Location of Processing */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Location of Processing</h6>
                        <ul className="list-disc pl-4 pt-1">
                          <li>European Union</li>
                        </ul>
                      </div>

                      {/* Retention Period */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Retention Period</h6>
                        <ul className="list-disc pl-4 pt-1">
                          <li>
                            User’s interactions tracked on websites will not be stored longer than for two years.
                            However, the data will be deleted as soon as they are no longer needed for the processing
                            purposes.
                          </li>
                        </ul>
                      </div>

                      {/* Transfer to Third Countries */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Transfer to Third Countries</h6>
                        <p>
                          This service may forward the collected data to a different country. Please note that this
                          service might transfer the data to a country without the required data protection standards.
                          Below you can find a list of countries to which the data is being transferred. For more
                          information regarding safeguards please refer to the provider&apos;s privacy policy or contact
                          the provider directly.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Singapore", "United States of America", "United Kingdom"].map((country) => (
                            <CustomButton
                              key={country}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={country}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Data Recipients */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Recipients</h6>
                        <p>In the following the recipients of the data collected are listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Meta Platforms Ireland Ltd., Meta Platforms Inc."
                        />
                      </div>

                      {/* Links to Policies */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Policies and Opt-out Information</h6>
                        <Link
                          href="https://www.facebook.com/privacy/explanation"
                          target="_blank"
                          className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                        >
                          Privacy Policy
                        </Link>
                        <Link
                          href="https://www.facebook.com/policies/cookies"
                          target="_blank"
                          className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                        >
                          Cookie Policy
                        </Link>
                      </div>
                      {/* Storage Information */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Storage Information</h6>
                        <p>
                          Below you can see the longest potential duration for storage on a device, as set when using
                          the cookie method of storage and if there are any other methods used.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>Maximum age of cookie storage: 1 year</li>
                          <li>Non-cookie storage: no</li>
                        </ul>
                      </div>

                      {/* Stored Information */}
                      <StoredInformationToggle
                        title="Stored Information"
                        data={[
                          { name: "messaging_plugin_#", type: "cookie", duration: "-" },
                          { name: "fr", type: "cookie", duration: "-" },
                          { name: "_fbp", type: "cookie", duration: "-" },
                          { name: "pxcelBcnLcy", type: "cookie", duration: "-" },
                          { name: "_fbp", type: "web" },
                        ]}
                      />

                      {/* History Table */}
                      <div className="mt-1">
                        <h6 className="mb-2 font-nexaheavy text-sm text-white">History</h6>
                        <div className="overflow-hidden rounded-lg border border-primary-dark">
                          <table className="w-full border-collapse text-left text-sm text-white">
                            <thead>
                              <tr className="bg-primary-light">
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Decision</th>
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Date</th>
                              </tr>
                            </thead>
                            <tbody className="text-xs">
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>no (website default)</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">14.10.2024, 17:42</td>
                              </tr>
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>no</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">15.10.2024, 13:29</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </ToggleSection>
                </div>
                <div ref={getOrCreateRef("Google Tag Manager")}>
                  <ToggleSection
                    title="Google Tag Manager"
                    description="Functional"
                    isOpen={openSection === "Google Tag Manager"}
                  >
                    <div className="flex flex-col gap-4 text-xs">
                      {/* Description of Service */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Description of Service</h6>
                        <p>
                          This is a tag management system. Via Google Tag Manager, tags can be integrated centrally via
                          a user interface. Tags are small sections of code that can track activities. Script codes of
                          other tools are integrated via the Google Tag Manager. The Tag Manager allows controlling when
                          a particular tag is triggered.
                        </p>
                      </div>

                      {/* Processing Company */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Processing Company</h6>
                        <p>
                          Google Ireland Limited <br />
                          Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland
                        </p>
                      </div>

                      {/* Data Protection Officer */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Protection Officer of Processing Company</h6>
                        <p>
                          Below you can find the email address of the data protection officer of the processing company.
                        </p>
                        <Link
                          href="https://support.google.com/policies/contact/general_privacy_form"
                          target="_blank"
                          className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                        >
                          Contact Data Protection Officer
                        </Link>
                      </div>

                      {/* Data Purposes */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Purposes</h6>
                        <p>This list represents the purposes of the data collection and processing.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Tag Management"
                        />
                      </div>

                      {/* Technologies Used */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Technologies Used</h6>
                        <p>
                          This list represents all technologies this service uses to collect data. Typical technologies
                          are Cookies and Pixels that are placed in the browser.
                        </p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Website tags"
                        />
                      </div>

                      {/* Data Collected */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Collected</h6>
                        <p>
                          This list represents all (personal) data that is collected by or through the use of this
                          service.
                        </p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Aggregated data about tag firing"
                        />
                      </div>

                      {/* Legal Basis */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Legal Basis</h6>
                        <p>In the following the required legal basis for the processing of data is listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Art. 6 para. 1 s. 1 lit. a GDPR"
                        />
                      </div>

                      {/* Location of Processing */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Location of Processing</h6>
                        <p>
                          This is the primary location where the collected data is being processed. If the data is also
                          processed in other countries, you are informed separately.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>European Union</li>
                        </ul>
                      </div>

                      {/* Retention Period */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Retention Period</h6>
                        <p>
                          The retention period is the time span the collected data is saved for the processing purposes.
                          The data needs to be deleted as soon as it is no longer needed for the stated processing
                          purposes.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>
                            The data will be deleted as soon as they are no longer needed for the processing purposes.
                          </li>
                        </ul>
                      </div>

                      {/* Transfer to Third Countries */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Transfer to Third Countries</h6>
                        <p>
                          This service may forward the collected data to a different country. Please note that this
                          service might transfer the data to a country without the required data protection standards.
                          Below you can find a list of countries to which the data is being transferred. For more
                          information regarding safeguards please refer to the provider&apos;s privacy policy or contact
                          the provider directly.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Singapore", "Taiwan", "Chile", "United States of America"].map((country) => (
                            <CustomButton
                              key={country}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={country}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Data Recipients */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Recipients</h6>
                        <p>n the following the recipients of the data collected are listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Alphabet Inc., Google LLC, Google Ireland Limited"
                        />
                      </div>

                      {/* Links to Policies */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Policies of the data processor</h6>
                        <div className="flex flex-col gap-2 pt-3">
                          {/* Privacy Policy */}
                          <div className="flex flex-col">
                            <p className="text-xs text-white">
                              Click here to read the privacy policy of the data processor:
                            </p>
                            <Link
                              href="https://business.safety.google/privacy/?hl=en"
                              target="_blank"
                              className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                            >
                              Privacy Policy
                            </Link>
                          </div>

                          {/* Cookie Policy */}
                          <div className="flex flex-col">
                            <p className="text-xs text-white">
                              Click here to read the cookie policy of the data processor:
                            </p>
                            <Link
                              href="https://policies.google.com/technologies/cookies?hl=en"
                              target="_blank"
                              className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                            >
                              Cookie Policy
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* History Table */}
                      <div className="mt-1">
                        <h6 className="mb-2 font-nexaheavy text-sm text-white">History</h6>
                        <div className="overflow-hidden rounded-lg border border-primary-dark">
                          <table className="w-full border-collapse text-left text-sm text-white">
                            <thead>
                              <tr className="bg-primary-light">
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Decision</th>
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Date</th>
                              </tr>
                            </thead>
                            <tbody className="text-xs">
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>no (website default)</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">14.10.2024, 17:42</td>
                              </tr>
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>no</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">15.10.2024, 13:29</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </ToggleSection>
                </div>

                <div ref={getOrCreateRef("reCAPTCHA")}>
                  <ToggleSection
                    title="reCAPTCHA"
                    description="Bot and Fraud Prevention"
                    isOpen={openSection === "reCAPTCHA"}
                  >
                    <div className="flex flex-col gap-4 text-xs">
                      {/* Description of Service */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Description of Service</h6>
                        <p>
                          This is a service that checks whether data is entered by a human or by an automated program.
                        </p>
                      </div>

                      {/* Processing Company */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Processing Company</h6>
                        <p>
                          Google Ireland Limited <br />
                          Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland
                        </p>
                      </div>

                      {/* Data Protection Officer */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Protection Officer of Processing Company</h6>
                        <p>
                          Below you can find the email address of the data protection officer of the processing company.
                        </p>
                        <Link
                          href="https://support.google.com/policies/contact/general_privacy_form"
                          target="_blank"
                          className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                        >
                          Contact Data Protection Officer
                        </Link>
                      </div>

                      {/* Data Purposes */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Purposes</h6>
                        <p>This list represents the purposes of the data collection and processing.</p>
                        <div className="flex flex-wrap gap-2">
                          {["Bot Protection", "Spam prevention", "Fraud detection"].map((purpose) => (
                            <CustomButton
                              key={purpose}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={purpose}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Technologies Used */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Technologies Used</h6>
                        <p>
                          This list represents all technologies this service uses to collect data. Typical technologies
                          are Cookies and Pixels that are placed in the browser.
                        </p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Scripts"
                        />
                      </div>

                      {/* Data Collected */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Collected</h6>
                        <p>
                          This list represents all (personal) data that is collected by or through the use of this
                          service.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Browser language",
                            "Browser plug-ins",
                            "Click path",
                            "Date and time of visit",
                            "IP address",
                            "User behaviour",
                            "Amount of time spent on a page",
                            "User input",
                            "Device information",
                            "Mouse movements",
                            "Geographic location",
                            "Device operating system",
                          ].map((data) => (
                            <CustomButton
                              key={data}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={data}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Legal Basis */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Legal Basis</h6>
                        <p>In the following the required legal basis for the processing of data is listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Art. 6 para. 1 s. 1 lit. a GDPR"
                        />
                      </div>

                      {/* Location of Processing */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Location of Processing</h6>
                        <p>
                          This is the primary location where the collected data is being processed. If the data is also
                          processed in other countries, you are informed separately.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>European Union</li>
                        </ul>
                      </div>

                      {/* Retention Period */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Retention Period</h6>
                        <p>
                          The retention period is the time span the collected data is saved for the processing purposes.
                          The data needs to be deleted as soon as it is no longer needed for the stated processing
                          purposes.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>
                            Data will be deleted as soon as they are no longer needed for the processing purposes.
                          </li>
                        </ul>
                      </div>

                      {/* Transfer to Third Countries */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Transfer to Third Countries</h6>
                        <p>
                          This service may forward the collected data to a different country. Please note that this
                          service might transfer the data to a country without the required data protection standards.
                          Below you can find a list of countries to which the data is being transferred. For more
                          information regarding safeguards please refer to the provider&apos;s privacy policy or contact
                          the provider directly.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["United States of America", "Singapore", "Taiwan", "Chile"].map((country) => (
                            <CustomButton
                              key={country}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={country}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Data Recipients */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Recipients</h6>
                        <p>In the following the recipients of the data collected are listed.</p>
                        <div className="flex flex-wrap gap-2">
                          {["Alphabet Inc.", "Google LLC", "Google Ireland Limited"].map((recipient) => (
                            <CustomButton
                              key={recipient}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={recipient}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Policies */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Policies of the data processor</h6>
                        <div className="flex flex-col gap-2 pt-3">
                          <div className="flex flex-col">
                            <p className="text-xs text-white">
                              Click here to read the privacy policy of the data processor:
                            </p>
                            <Link
                              href="https://business.safety.google/privacy/?hl=en"
                              target="_blank"
                              className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                            >
                              Privacy Policy
                            </Link>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-xs text-white">
                              Click here to read the cookie policy of the data processor:
                            </p>
                            <Link
                              href="https://policies.google.com/technologies/cookies?hl=en"
                              target="_blank"
                              className="text-xs text-green underline transition-all duration-300 hover:text-green/80"
                            >
                              Cookie Policy
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* Storage Information */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Storage Information</h6>
                        <p>
                          Below you can see the longest potential duration for storage on a device, as set when using
                          the cookie method of storage and if there are any other methods used.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>Maximum age of cookie storage: 5 months, 27 days</li>
                          <li>Non-cookie storage: no</li>
                        </ul>
                      </div>
                      {/* Stored Information */}

                      <StoredInformationToggle
                        title="Stored Information"
                        data={[
                          {
                            name: "_GRECAPTCHA",
                            description:
                              "This cookie is set so that Google can provide risk analyses about the activities observed by Google reCAPTCHA",
                            type: "cookie",
                            duration: "5 months, 27 days",
                            domain: "google.com",
                          },
                        ]}
                      />
                      {/* History Table */}
                      <div className="mt-1">
                        <h6 className="mb-2 font-nexaheavy text-sm text-white">History</h6>
                        <div className="overflow-hidden rounded-lg border border-primary-dark">
                          <table className="w-full border-collapse text-left text-sm text-white">
                            <thead>
                              <tr className="bg-primary-light">
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Decision</th>
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Date</th>
                              </tr>
                            </thead>
                            <tbody className="text-xs">
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>no (website default)</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">14.10.2024, 17:42</td>
                              </tr>
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>no</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">15.10.2024, 13:29</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </ToggleSection>
                </div>
                <div ref={getOrCreateRef("Site Analytics")}>
                  <ToggleSection
                    title="Site Analytics"
                    description="Functional"
                    isOpen={openSection === "Site Analytics"}
                  >
                    <div className="flex flex-col gap-4 text-xs">
                      {/* Description of Service */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Description of Service</h6>
                        <p>Web Analytics built into the core of the website.</p>
                      </div>

                      {/* Processing Company */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Processing Company</h6>
                        <p>Website owner</p>
                      </div>

                      {/* Data Purposes */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Purposes</h6>
                        <p>This list represents the purposes of the data collection and processing.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Analytics"
                        />
                      </div>

                      {/* Technologies Used */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Technologies Used</h6>
                        <p>
                          This list represents all technologies this service uses to collect data. Typical technologies
                          are Cookies and Pixels that are placed in the browser.
                        </p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Cookies"
                        />
                      </div>

                      {/* Data Collected */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Collected</h6>
                        <p>
                          This list represents all (personal) data that is collected by or through the use of this
                          service.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Browser information",
                            "Browser language",
                            "Date and time of visit",
                            "Device information",
                            "IP address",
                            "JavaScript support",
                            "Pages visited",
                            "Referrer URL",
                            "Screen resolution",
                            "Time zone",
                            "Usage data",
                          ].map((data) => (
                            <CustomButton
                              key={data}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={data}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Legal Basis */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Legal Basis</h6>
                        <p>In the following the required legal basis for the processing of data is listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Art. 6 para. 1 s. 1 lit. a GDPR"
                        />
                      </div>

                      {/* Location of Processing */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Location of Processing</h6>
                        <p>
                          This is the primary location where the collected data is being processed. If the data is also
                          processed in other countries, you are informed separately.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>United States of America</li>
                        </ul>
                      </div>

                      {/* Retention Period */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Retention Period</h6>
                        <p>
                          The retention period is the time span the collected data is saved for the processing purposes.
                          The data needs to be deleted as soon as it is no longer needed for the stated processing
                          purposes.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>
                            Data collected by our website analytics is kept indefinitely but does not contain personally
                            identifiable information. IP addresses are anonymized.
                          </li>
                        </ul>
                      </div>

                      {/* Transfer to Third Countries */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Transfer to Third Countries</h6>
                        <p>
                          This service may forward the collected data to a different country. Please note that this
                          service might transfer the data to a country without the required data protection standards.
                          Below you can find a list of countries to which the data is being transferred. For more
                          information regarding safeguards please refer to the provider&apos;s privacy policy or contact
                          the provider directly.
                        </p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Worldwide"
                        />
                      </div>

                      {/* Storage Information */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Storage Information</h6>
                        <p>
                          Below you can see the longest potential duration for storage on a device, as set when using
                          the cookie method of storage and if there are any other methods used.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>Maximum age of cookie storage: Session</li>
                          <li>Non-cookie storage: no</li>
                        </ul>
                      </div>

                      {/* History Table */}
                      <div className="mt-1">
                        <h6 className="mb-2 font-nexaheavy text-sm text-white">History</h6>
                        <div className="overflow-hidden rounded-lg border border-primary-dark">
                          <table className="w-full border-collapse text-left text-sm text-white">
                            <thead>
                              <tr className="bg-primary-light">
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Decision</th>
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Date</th>
                              </tr>
                            </thead>
                            <tbody className="text-xs">
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>no (website default)</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">14.10.2024, 17:42</td>
                              </tr>
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>no</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">15.10.2024, 13:29</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </ToggleSection>
                </div>
                <div ref={getOrCreateRef("Site Personalization")}>
                  <ToggleSection
                    title="Site Personalization"
                    description="Functional"
                    isOpen={openSection === "Site Personalization"}
                  >
                    <div className="flex flex-col gap-4 text-xs">
                      {/* Description of Service */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Description of Service</h6>
                        <p>Customization and personalization of the website experience for visitors.</p>
                      </div>

                      {/* Processing Company */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Processing Company</h6>
                        <p>Website Owner</p>
                      </div>

                      {/* Data Purposes */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Purposes</h6>
                        <p>This list represents the purposes of the data collection and processing.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Personalisation"
                        />
                      </div>

                      {/* Technologies Used */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Technologies Used</h6>
                        <p>
                          This list represents all technologies this service uses to collect data. Typical technologies
                          are Cookies and Pixels that are placed in the browser.
                        </p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Cookies"
                        />
                      </div>

                      {/* Data Collected */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Data Collected</h6>
                        <p>
                          This list represents all (personal) data that is collected by or through the use of this
                          service.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Date and time of visit", "Device information", "Number of visits"].map((data) => (
                            <CustomButton
                              key={data}
                              className={cookiesButtonDefaultStyles}
                              variant="outline"
                              outlineBG="primary-light"
                              title={data}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Legal Basis */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Legal Basis</h6>
                        <p>In the following the required legal basis for the processing of data is listed.</p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Art. 6 para. 1 s. 1 lit. a GDPR"
                        />
                      </div>

                      {/* Location of Processing */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Location of Processing</h6>
                        <p>
                          This is the primary location where the collected data is being processed. If the data is also
                          processed in other countries, you are informed separately.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>United States of America</li>
                        </ul>
                      </div>

                      {/* Retention Period */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Retention Period</h6>
                        <p>
                          The retention period is the time span the collected data is saved for the processing purposes.
                          The data needs to be deleted as soon as it is no longer needed for the stated processing
                          purposes.
                        </p>
                        <ul className="list-disc pl-4 pt-1">
                          <li>
                            Data is not retained by the website owner. Data stored in cookies expire after one year.
                          </li>
                        </ul>
                      </div>

                      {/* Transfer to Third Countries */}
                      <div className="flex flex-col">
                        <h6 className="font-nexaheavy text-yellow">Transfer to Third Countries</h6>
                        <p>
                          This service may forward the collected data to a different country. Please note that this
                          service might transfer the data to a country without the required data protection standards.
                          Below you can find a list of countries to which the data is being transferred. For more
                          information regarding safeguards please refer to the provider&apos;s privacy policy or contact
                          the provider directly.
                        </p>
                        <CustomButton
                          className={cookiesButtonDefaultStyles}
                          variant="outline"
                          outlineBG="primary-light"
                          title="Worldwide"
                        />
                      </div>

                      {/* History Table */}
                      <div className="mt-1">
                        <h6 className="mb-2 font-nexaheavy text-sm text-white">History</h6>
                        <div className="overflow-hidden rounded-lg border border-primary-dark">
                          <table className="w-full border-collapse text-left text-sm text-white">
                            <thead>
                              <tr className="bg-primary-light">
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Decision</th>
                                <th className="p-3 font-nexaheavy text-xs uppercase text-yellow">Date</th>
                              </tr>
                            </thead>
                            <tbody className="text-xs">
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>no (website default)</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">14.10.2024, 17:42</td>
                              </tr>
                              <tr className="border-t border-primary-dark">
                                <td className="flex items-center gap-2 px-1 py-2 sm:p-2">
                                  <span className="text-base sm:text-xl">🛡️</span>
                                  <span>no</span>
                                </td>
                                <td className="px-1 py-2 sm:p-2">15.10.2024, 13:29</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </ToggleSection>
                </div>
                <ToggleSection title="ID to request consent data" description="" toggleSwitch={false}>
                  <div className="flex flex-col gap-4 text-xs">
                    <div className="flex h-12 w-full items-center justify-between gap-8 rounded-xl bg-primary px-[18px] py-[14px]">
                      <p className="max-w-full overflow-hidden truncate text-xs font-medium text-white">
                        bf1d6a2e950b05fc035f147882d32c4467f152c89513f34b414846e2
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyText("bf1d6a2e950b05fc035f147882d32c4467f152c89513f34b414846e2");
                          toast.success("Copied to clipboard");
                        }}
                      >
                        <Copy className="size-6 shrink-0 cursor-pointer text-white hover:text-green" aria-hidden />
                      </button>
                    </div>
                  </div>
                </ToggleSection>
              </>
            )}
          </div>
          <hr className="border-t-2 border-white" />
          <div className="mt-6 flex flex-col justify-between gap-4 px-7 sm:flex-row sm:gap-6">
            <CustomButton
              className="w-full text-xs"
              variant="outline"
              outlineBG="primary-light"
              title="Save Preferences"
              onClick={onClose}
            />
            <CustomButton className="w-full text-xs" variant="primary" title="Deny" onClick={onClose} />
            <CustomButton className="w-full text-xs" variant="primary" title="Accept all" onClick={onClose} />
          </div>

          <p className="mt-4 text-center text-[10px] font-normal text-white">
            Powered by Usercentrics Consent Management
          </p>
        </div>
      </div>
    </ModalContainer>
  );
};

const cookiesButtonDefaultStyles = `mt-2 max-w-fit p-2 text-[9px] capitalize text-white md:p-2 [&>span>span]:font-nexa`;
