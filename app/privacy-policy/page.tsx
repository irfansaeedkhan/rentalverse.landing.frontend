// pages/privacy-policy.tsx

"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-primary p-10 text-gray-100">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-bold">Privacy Policy</h1>
        <div className="flex flex-col gap-2">
          <p>
            This Application collects some Personal Data from its Users. This document can be printed for reference by
            using the print command in the settings of any browser.
          </p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-semibold text-yellow">Owner and Data Controller</h2>
          <p>
            Apex Order Ltd <br /> Headquarters: Cor. Of Shirley and Charlotte Street <br />
            P.O. Box N 532 Nassau,
            <br /> New Providence The Bahamas <br />
            Licence Number: 1500159
          </p>
          <p>
            <strong>Owner contact email:</strong>{" "}
            <a href="mailto:finance@apexorder.xyz" className="text-green underline">
              finance@apexorder.xyz
            </a>
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold text-yellow">Types of Data collected</h2>
          <div className="flex flex-col gap-2">
            <p>
              Among the types of Personal Data that this Application collects, by itself or through third parties, there
              are: email address; Trackers; Usage Data.
            </p>
            <p>
              Complete details on each type of Personal Data collected are provided in the dedicated sections of this
              privacy policy or by specific explanation texts displayed prior to the Data collection. Personal Data may
              be freely provided by the User, or, in case of Usage Data, collected automatically when using this
              Application.
            </p>
            <p>
              Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide
              this Data may make it impossible for this Application to provide its services. In cases where this
              Application specifically states that some Data is not mandatory, Users are free not to communicate this
              Data without consequences to the availability or the functioning of the Service.
            </p>
            <p>
              Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner. Any use
              of Cookies – or of other tracking tools — by this Application or by the owners of third-party services
              used by this Application serves the purpose of providing the Service required by the User, in addition to
              any other purposes described in the present document and in the Cookie Policy.
            </p>
            <p>
              Users are responsible for any third-party Personal Data obtained, published or shared through this
              Application.
            </p>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold text-yellow">Mode and place of processing the Data</h2>
          <h3 className="mt-4 text-xl font-medium">Methods of processing</h3>
          <div className="flex flex-col gap-2">
            <p>
              The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or
              unauthorized destruction of the Data.
            </p>
            <p>
              The Data processing is carried out using computers and/or IT enabled tools, following organizational
              procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases,
              the Data may be accessible to certain types of persons in charge, involved with the operation of this
              Application (administration, sales, marketing, legal, system administration) or external parties (such as
              third-party technical service providers, mail carriers, hosting providers, IT companies, communications
              agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may
              be requested from the Owner at any time.
            </p>
          </div>

          <h3 className="mt-4 text-xl font-medium">Place</h3>
          <div className="flex flex-col gap-2">
            <p>
              The Data is processed at the Owner&apos;s operating offices and in any other places where the parties
              involved in the processing are located.
            </p>
            <p>
              Depending on the User&apos;s location, data transfers may involve transferring the User&apos;s Data to a
              country other than their own. To find out more about the place of processing of such transferred Data,
              Users can check the section containing details about the processing of Personal Data.
            </p>
          </div>
          <h3 className="mt-4 text-xl font-medium">Retention time</h3>
          <p>
            Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as
            required by the purpose they have been collected for and may be retained for longer due to applicable legal
            obligation or based on the Users&apos; consent.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold text-yellow">The purposes of processing</h2>
          <div className="flex flex-col gap-2">
            <p>
              The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal
              obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or
              third parties), detect any malicious or fraudulent activity, as well as the following: Displaying content
              from external platforms and Advertising.
            </p>
            <p>
              For specific information about the Personal Data used for each purpose, the User may refer to the section
              “Detailed information on the processing of Personal Data”.
            </p>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold text-yellow">
            Detailed information on the processing of Personal Data
          </h2>
          <p>Personal Data is collected for the following purposes and using the following services:</p>
          <h3 className="mt-4 text-xl font-medium">Advertising</h3>
          <div className="flex flex-col gap-2">
            <p>
              This type of service allows User Data to be utilized for advertising communication purposes. These
              communications are displayed in the form of banners and other advertisements on this Application, possibly
              based on User interests.
            </p>
            <p>
              This does not mean that all Personal Data are used for this purpose. Information and conditions of use are
              shown below.
            </p>
            <p>
              Some of the services listed below may use Trackers to identify Users or they may use the behavioral
              retargeting technique, i.e. displaying ads tailored to the User&apos;s interests and behavior, including
              those detected outside this Application. For more information, please check the privacy policies of the
              relevant services.
            </p>
            <p>
              Services of this kind usually offer the possibility to opt out of such tracking. In addition to any
              opt-out feature offered by any of the services below, Users may learn more on how to generally opt out of
              interest-based advertising within the dedicated section &quot;How to opt-out of interest-based
              advertising&quot; in this document.
            </p>
          </div>
          <h3 className="mt-4 text-xl font-medium">wetter.com (wetter.com GmbH)</h3>
          <div className="flex flex-col gap-2">
            <p>wetter.com is an advertising service provided by wetter.com GmbH</p>
            <p>Personal Data processed: Trackers; Usage Data</p>
            <p>Place of processing: Germany – Privacy Policy – Opt out.</p>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold text-yellow">Displaying content from external platforms</h2>
          <div className="flex flex-col gap-2">
            <p>
              This type of service allows you to view content hosted on external platforms directly from the pages of
              this Application and interact with them. Such services are often referred to as widgets, which are small
              elements placed on a website or app. They provide specific information or perform a particular function
              and often allow for user interaction.
            </p>
            <p>
              This type of service might still collect web traffic data for the pages where the service is installed,
              even when Users do not use it.
            </p>
          </div>
          <h3 className="mt-4 text-xl font-medium">Calendly widget (Calendly, LLC)</h3>
          <div className="flex flex-col gap-2">
            <p>
              Calendly widget is a calendar content visualization service provided by Calendly, LLC that allows this
              Application to incorporate content of this kind on its pages.
            </p>
            <p>Personal Data processed: email address.</p>
            <p>Place of processing: United States – Privacy Policy.</p>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold text-yellow">
            Information on opting out of interest-based advertising
          </h2>
          <p>
            In addition to any opt-out feature provided by any of the services listed in this document, Users may learn
            more on how to generally opt out of interest-based advertising within the dedicated section of the Cookie
            Policy.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-yellow">Cookie Policy</h2>
          <p>This Application uses Trackers. To learn more, Users may consult the Cookie Policy.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold text-yellow">Further Information for Users</h2>
          <h3 className="mt-4 text-xl font-medium">Legal basis of processing</h3>
          <p>The Owner may process Personal Data relating to Users if one of the following applies:</p>
          <ul className="ml-5 list-disc">
            <li>Users have given their consent for one or more specific purposes.</li>
            <li>
              provision of Data is necessary for the performance of an agreement with the User and/or for any
              pre-contractual obligations thereof;
            </li>
            <li>processing is necessary for compliance with a legal obligation to which the Owner is subject;</li>
            <li>
              processing is related to a task that is carried out in the public interest or in the exercise of official
              authority vested in the Owner;
            </li>
            <li>
              processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third
              party.
            </li>
          </ul>
          <p className="mt-2">
            In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing,
            and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a
            requirement necessary to enter into a contract.
          </p>
          <h3 className="mt-4 text-xl font-medium">Further information about retention time</h3>
          <p>
            Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as
            required by the purpose they have been collected for and may be retained for longer due to applicable legal
            obligation or based on the Users&apos; consent.
          </p>
          <p className="mt-2">Therefore:</p>
          <ul className="ml-5 list-disc">
            <li>
              Personal Data collected for purposes related to the performance of a contract between the Owner and the
              User shall be retained until such contract has been fully performed.
            </li>
            <li>
              Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as
              needed to fulfill such purposes. Users may find specific information regarding the legitimate interests
              pursued by the Owner within the relevant sections of this document or by contacting the Owner.
            </li>
          </ul>
          <div className="mt-2 flex flex-col gap-2">
            <p>
              The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent
              to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to
              retain Personal Data for a longer period whenever required to fulfil a legal obligation or upon order of
              an authority.
            </p>
            <p>
              Once the retention period expires, Personal Data shall be deleted. Therefore, the right of access, the
              right to erasure, the right to rectification and the right to data portability cannot be enforced after
              expiration of the retention period.
            </p>
          </div>
          <h3 className="mt-4 text-xl font-medium">
            The rights of Users based on the General Data Protection Regulation (GDPR)
          </h3>
          <p>Users may exercise certain rights regarding their Data processed by the Owner.</p>
          <p className="mt-2">
            In particular, Users have the right to do the following, to the extent permitted by law:
          </p>
          <ul className="ml-5 list-disc">
            <li>
              <b>Withdraw their consent at any time.</b> Users have the right to withdraw consent where they have
              previously given their consent to the processing of their Personal Data.
            </li>
            <li>
              <b>Object to processing of their Data.</b> Users have the right to object to the processing of their Data
              if the processing is carried out on a legal basis other than consent.
            </li>
            <li>
              <b>Access their Data.</b> Users have the right to learn if Data is being processed by the Owner, obtain
              disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing
              processing.
            </li>
            <li>
              <b>Verify and seek rectification.</b> Users have the right to verify the accuracy of their Data and ask
              for it to be updated or corrected.
            </li>
            <li>
              <b>Restrict the processing of their Data.</b> Users have the right to restrict the processing of their
              Data. In this case, the Owner will not process their Data for any purpose other than storing it.
            </li>
            <li>
              <b>Have their Personal Data deleted or otherwise removed.</b> Users have the right to obtain the erasure
              of their Data from the Owner.
            </li>
            <li>
              <b>Receive their Data and have it transferred to another controller.</b> Users have the right to receive
              their Data in a structured, commonly used and machine readable format and, if technically feasible, to
              have it transmitted to another controller without any hindrance.
            </li>
            <li>
              <b>Lodge a complaint.</b> Users have the right to bring a claim before their competent data protection
              authority.
            </li>
          </ul>
          <p className="mt-2">
            Users are also entitled to learn about the legal basis for Data transfers abroad including to any
            international organization governed by public international law or set up by two or more countries, such as
            the UN, and about the security measures taken by the Owner to safeguard their Data.
          </p>
          <div className="mt-4 flex flex-col gap-2 font-semibold">
            <p>
              <b>Details about the right to object to processing</b>
            </p>
            <p>
              <b>
                {" "}
                Where Personal Data is processed for a public interest, in the exercise of an official authority vested
                in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to
                such processing by providing a ground related to their particular situation to justify the objection.
              </b>
            </p>
            <p>
              <b>
                {" "}
                Users must know that, however, should their Personal Data be processed for direct marketing purposes,
                they can object to that processing at any time, free of charge and without providing any justification.
                Where the User objects to processing for direct marketing purposes, the Personal Data will no longer be
                processed for such purposes. To learn whether the Owner is processing Personal Data for direct marketing
                purposes, Users may refer to the relevant sections of this document.
              </b>
            </p>
          </div>
          <h3 className="mt-4 text-xl font-medium">How to exercise these rights</h3>
          <p>
            Any requests to exercise User rights can be directed to the Owner through the contact details provided in
            this document. Such requests are free of charge and will be answered by the Owner as early as possible and
            always within one month, providing Users with the information required by law. Any rectification or erasure
            of Personal Data or restriction of processing will be communicated by the Owner to each recipient, if any,
            to whom the Personal Data has been disclosed unless this proves impossible or involves disproportionate
            effort. At the Users&apos; request, the Owner will inform them about those recipients.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold text-yellow">
            Additional information about Data collection and processing
          </h2>
          <h3 className="mt-4 text-xl font-medium">Legal action</h3>
          <p>
            The User&apos;s Personal Data may be used for legal purposes by the Owner in Court or in the stages leading
            to possible legal action arising from improper use of this Application or the related Services. The User
            declares to be aware that the Owner may be required to reveal personal data upon request of public
            authorities.
          </p>
          <h3 className="mt-4 text-xl font-medium">Additional information about User&apos;s Personal Data</h3>
          <p>
            In addition to the information contained in this privacy policy, this Application may provide the User with
            additional and contextual information concerning particular Services or the collection and processing of
            Personal Data upon request.
          </p>
          <h3 className="mt-4 text-xl font-medium">System logs and maintenance</h3>
          <p>
            For operation and maintenance purposes, this Application and any third-party services may collect files that
            record interaction with this Application (System logs) or use other Personal Data (such as the IP Address)
            for this purpose.
          </p>
          <h3 className="mt-4 text-xl font-medium">Information not contained in this policy</h3>
          <p>
            More details concerning the collection or processing of Personal Data may be requested from the Owner at any
            time. Please see the contact information at the beginning of this document.
          </p>
          <h3 className="mt-4 text-xl font-medium">Changes to this privacy policy</h3>
          <div className="flex flex-col gap-2">
            <p>
              The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on
              this page and possibly within this Application and/or - as far as technically and legally feasible -
              sending a notice to Users via any contact information available to the Owner. It is strongly recommended
              to check this page often, referring to the date of the last modification listed at the bottom.
            </p>
            <p>
              Should the changes affect processing activities performed on the basis of the User&apos;s consent, the
              Owner shall collect new consent from the User, where required.
            </p>
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-yellow">Definitions and legal references</h2>
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
            the features of the browser and the operating system utilized by the User, the various time details per
            visit (e.g., the time spent on each page within the Application) and the details about the path followed
            within the Application with special reference to the sequence of pages visited, and other parameters about
            the device operating system and/or the User&apos;s IT environment.
          </p>
          <h3 className="mt-4 text-xl font-medium">User</h3>
          <p>The individual using this Application who, unless otherwise specified, coincides with the Data Subject.</p>
          <h3 className="mt-4 text-xl font-medium">Data Subject</h3>
          <p>The natural person to whom the Personal Data refers.</p>
          <h3 className="mt-4 text-xl font-medium">Data Processor (or Processor)</h3>
          <p>
            The natural or legal person, public authority, agency or other body which processes Personal Data on behalf
            of the Controller, as described in this privacy policy.
          </p>
          <h3 className="mt-4 text-xl font-medium">Data Controller (or Owner)</h3>
          <p>
            The natural or legal person, public authority, agency or other body which, alone or jointly with others,
            determines the purposes and means of the processing of Personal Data, including the security measures
            concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is
            the Owner of this Application.
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
            Unless otherwise specified, all references made within this document to the European Union include all
            current member states to the European Union and the European Economic Area.
          </p>
          <h3 className="mt-4 text-xl font-medium">Cookie</h3>
          <p>Cookies are Trackers consisting of small sets of data stored in the User&apos;s browser.</p>
          <h3 className="mt-4 text-xl font-medium">Tracker</h3>
          <p>
            Tracker indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts, e-tags
            and fingerprinting - that enables the tracking of Users, for example by accessing or storing information on
            the User&apos;s device.
          </p>
          <h3 className="mt-4 text-xl font-medium">Legal information</h3>
          <p>This privacy policy relates solely to this Application, if not stated otherwise within this document.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
