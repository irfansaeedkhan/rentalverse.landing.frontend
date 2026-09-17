// pages/cookie-policy.tsx

"use client";

import React from "react";

const LegalNotice = () => {
  return (
    <div className="bg-primary p-10 text-gray-100">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-bold">Legal Notice</h1>
        <div className="flex flex-col gap-2">
          <p>
            This document informs Users about the technologies that help this Application to achieve the purposes
            described below. Such technologies allow the Owner to access and store information (for example by using a
            Cookie) or use resources (for example by running a script) on a User&apos;s device as they interact with
            this Application.
          </p>
          <p>
            For simplicity, all such technologies are defined as &quot;Trackers&quot; within this document – unless
            there is a reason to differentiate.
          </p>
          <p>
            For example, while Cookies can be used on both web and mobile browsers, it would be inaccurate to talk about
            Cookies in the context of mobile apps as they are a browser-based Tracker. For this reason, within this
            document, the term Cookies is only used where it is specifically meant to indicate that particular type of
            Tracker.
          </p>
          <p>
            Some of the purposes for which Trackers are used may also require the User&apos;s consent. Whenever consent
            is given, it can be freely withdrawn at any time following the instructions provided in this document.
          </p>
          <p>
            This Application uses Trackers managed directly by the Owner (so-called “first-party” Trackers) and Trackers
            that enable services provided by a third party (so-called “third-party” Trackers). Unless otherwise
            specified within this document, third-party providers may access the Trackers managed by them.
          </p>
          <p>
            The validity and expiration periods of Cookies and other similar Trackers may vary depending on the lifetime
            set by the Owner or the relevant provider. Some of them expire upon termination of the User&apos;s browsing
            session.
          </p>
          <p>
            In addition to what&apos;s specified in the descriptions within each of the categories below, Users may find
            more precise and updated information regarding lifetime specification as well as any other relevant
            information — such as the presence of other Trackers — in the linked privacy policies of the respective
            third-party providers or by contacting the Owner.
          </p>
        </div>
        <h1 className="my-8 text-4xl font-bold text-yellow">How this Application uses Trackers</h1>
        <h3 className="mt-4 text-xl font-medium">Necessary</h3>
        <div className="flex flex-col gap-2">
          <p>
            This Application uses so-called “technical” Cookies and other similar Trackers to carry out activities that
            are strictly necessary for the operation or delivery of the Service.
          </p>
        </div>
        <h3 className="mt-4 text-xl font-medium">Marketing</h3>
        <div className="flex flex-col gap-2">
          <p>
            This Application uses Trackers to deliver personalized ads or marketing content, and to measure their
            performance.
          </p>
          <p>
            Some of the advertising services used by the Owner adhere to the IAB Transparency and Consent Framework, an
            initiative that facilitates responsible privacy practices across the digital advertising industry -
            providing Users with enhanced transparency and control over how their data are used for advertising tracking
            purposes. Users can customize their advertising preferences at any time by accessing the advertising
            preferences panel from within the cookie notice or via the relevant link on this Application.
          </p>
          <p>
            This Application participates in the IAB Europe Transparency & Consent Framework and complies with its
            Specifications and Policies. This Application uses iubenda (identification number 123) as a Consent
            Management Platform.
          </p>
        </div>
        <h1 className="my-8 text-4xl font-bold text-yellow">Trackers managed by third parties</h1>
        <h3 className="mt-4 text-xl font-medium">wetter.com (wetter.com GmbH)</h3>
        <div className="flex flex-col gap-2">
          <p>wetter.com is an advertising service provided by wetter.com GmbH.</p>
          <p>Personal Data processed: Trackers and Usage Data.</p>
          <p>Place of processing: Germany – Privacy Policy – Opt out.</p>
        </div>
        <ul className="ml-5 list-disc">
          <li>id: indefinite</li>
        </ul>
        <h1 className="my-8 text-4xl font-bold text-yellow">
          How to manage preferences and provide or withdraw consent on this Application
        </h1>
        <div className="flex flex-col gap-2">
          <p>
            Whenever the use of Trackers is based on consent, users can provide or withdraw such consent by setting or
            updating their preferences via the relevant privacy choices panel available on this Application.
          </p>
          <p>
            With regard to any third-party Trackers, Users can manage their preferences via the related opt-out link
            (where provided), by using the means indicated in the third party&apos;s privacy policy, or by contacting
            the third party.
          </p>
        </div>
        <h3 className="mt-4 text-xl font-medium">
          How to control or delete Cookies and similar technologies via your device settings
        </h3>
        <p className="mt-2">Users may use their own browser settings to:</p>
        <ul className="ml-5 list-disc">
          <li>See what Cookies or other similar technologies have been set on the device</li>
          <li>Block Cookies or similar technologies</li>
          <li>Clear Cookies or similar technologies from the browser</li>
        </ul>
        <div className="mt-2 flex flex-col gap-2">
          <p>The browser settings, however, do not allow granular control of consent by category.</p>
          <p>
            Users can, for example, find information about how to manage Cookies in the most commonly used browsers at
            the following addresses:
          </p>
        </div>
        <ul className="ml-5 list-disc">
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Apple Safari</li>
          <li>Microsoft Internet Explorer</li>
          <li>Microsoft Edge</li>
          <li>Brave</li>
          <li>Opera</li>
        </ul>
        <p className="mt-3">
          Users may also manage certain categories of Trackers used on mobile apps by opting out through relevant device
          settings such as the device advertising settings for mobile devices, or tracking settings in general (Users
          may open the device settings and look for the relevant setting).
        </p>

        <h3 className="mt-4 text-xl font-medium">How to opt out of interest-based advertising</h3>
        <div className="flex flex-col gap-2">
          <p>
            Users may follow the instructions provided by YourOnlineChoices (EU and UK), the Network Advertising
            Initiative (US) and the Digital Advertising Alliance (US), DAAC (Canada), DDAI (Japan) or other similar
            services. Such initiatives allow Users to select their tracking preferences for most of the advertising
            tools. The Owner thus recommends that Users make use of these resources in addition to the information
            provided in this document.
          </p>
          <p>
            The Digital Advertising Alliance offers an application called AppChoices that helps Users to control
            interest-based advertising on mobile apps.
          </p>
        </div>

        <h3 className="mt-4 text-xl font-medium">Consequences of denying the use of Trackers</h3>
        <div className="flex flex-col gap-2">
          <p>
            Users are free to decide whether or not to allow the use of Trackers. However, please note that Trackers
            help this Application to provide a better experience and advanced functionalities to Users (in line with the
            purposes outlined in this document). Therefore, if the User chooses to block the use of Trackers, the Owner
            may be unable to provide related features.
          </p>
        </div>

        <h1 className="my-8 text-4xl font-bold text-yellow">Owner and Data Controller</h1>
        <h3 className="mt-4 text-xl font-medium">
          Apex Order Ltd <br /> Headquarters: Cor. Of Shirley and Charlotte Street <br />
          P.O. Box N 532 Nassau,
          <br /> New Providence The Bahamas <br />
          Licence Number: 1500159
        </h3>
        <p className="pt-1">
          {" "}
          <strong>Owner contact email:</strong>{" "}
          <a href="mailto:finance@apexorder.xyz" className="text-green underline">
            finance@apexorder.xyz
          </a>
        </p>
        <p className="pt-3">
          {" "}
          Since the use of third-party Trackers through this Application cannot be fully controlled by the Owner, any
          specific references to third-party Trackers are to be considered indicative. In order to obtain complete
          information, Users are kindly requested to consult the privacy policies of the respective third-party services
          listed in this document.
        </p>
        <p>
          Given the objective complexity surrounding tracking technologies, Users are encouraged to contact the Owner
          should they wish to receive any further information on the use of such technologies by this Application.
        </p>

        <h1 className="my-8 text-4xl font-bold text-yellow">Definitions and legal references</h1>
        <h3 className="mt-4 text-xl font-medium">Personal Data (or Data)</h3>
        <p>
          Any information that directly, indirectly, or in connection with other information — including a personal
          identification number — allows for the identification or identifiability of a natural person.
        </p>
        <h3 className="mt-4 text-xl font-medium">Usage Data</h3>
        <p>
          Information collected automatically through this Application (or third-party services employed in this
          Application), which can include: the IP addresses or domain names of the computers utilized by the Users who
          use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method
          utilized to submit the request to the server, the size of the file received in response, the numerical code
          indicating the status of the server&apos;s answer (successful outcome, error, etc.), the country of origin,
          the features of the browser and the operating system utilized by the User, the various time details per visit
          (e.g., the time spent on each page within the Application) and the details about the path followed within the
          Application with special reference to the sequence of pages visited, and other parameters about the device
          operating system and/or the User&apos;s IT environment.
        </p>

        <h3 className="mt-4 text-xl font-medium">User</h3>
        <p>The individual using this Application who, unless otherwise specified, coincides with the Data Subject.</p>

        <h3 className="mt-4 text-xl font-medium">Data Subject</h3>
        <p>The natural person to whom the Personal Data refers.</p>

        <h3 className="mt-4 text-xl font-medium">Data Processor (or Processor)</h3>
        <p>
          The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of
          the Controller, as described in this privacy policy.
        </p>

        <h3 className="mt-4 text-xl font-medium">Data Controller (or Owner)</h3>
        <p>
          The natural or legal person, public authority, agency or other body which, alone or jointly with others,
          determines the purposes and means of the processing of Personal Data, including the security measures
          concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the
          Owner of this Application.
        </p>

        <h3 className="mt-4 text-xl font-medium">This Application</h3>
        <p>The means by which the Personal Data of the User is collected and processed.</p>

        <h3 className="mt-4 text-xl font-medium">Service</h3>
        <p>
          The service provided by this Application as described in the relative terms (if available) and on this
          site/application.
        </p>

        <h3 className="mt-4 text-xl font-medium">European Union (or EU)</h3>
        <p>
          Unless otherwise specified, all references made within this document to the European Union include all current
          member states to the European Union and the European Economic Area.
        </p>

        <h3 className="mt-4 text-xl font-medium">Cookie</h3>
        <p>Cookies are Trackers consisting of small sets of data stored in the User&apos;s browser.</p>

        <h3 className="mt-4 text-xl font-medium">Tracker</h3>
        <p>
          Tracker indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts, e-tags and
          fingerprinting - that enables the tracking of Users, for example by accessing or storing information on the
          User&apos;s device.
        </p>
      </div>
    </div>
  );
};

export default LegalNotice;
