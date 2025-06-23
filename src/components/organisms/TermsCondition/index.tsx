import React from "react";
import SEO from "../../common/SEO";

interface PageProps {
  // define props here
}

const TermsCondition: React.FC<PageProps> = (props) => {
  return (
    <main className="bg-gradient-to-tr from-[#FBF3E8] to-[#D5E1E2] via-[#F0EFFB] p-4  md:py-10 md:px-60 ">
      <SEO
        description="Review PatDraw's comprehensive Terms & Conditions for PatDraw, outlining user agreements, intellectual property, and governing law for a clear understanding of site usage."
        keywords="Terms & Conditions"
        title="FAQs, Frequently Asked Questions"
      />
      <div className="container mx-auto p-8  bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Terms & Condition
        </h1>

        <section className="mb-6 pt-4 border-t-2 font-poppins">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Before using Effectual Services's website, &nbsp;
            <a
              href="https://thepatentdrawings.com"
              target="_blank"
              className="text-blue-600 underline"
            >
              www.thepatentdrawings.com
            </a>
            <br />
            ("the Site"), please carefully read these Terms and Conditions
            ("Agreement," "Terms and Conditions"). The legally enforceable terms
            and conditions for using the{" "}
            <a
              href="https://thepatentdrawings.com"
              target="_blank"
              className="text-blue-600 underline"
            >
              www.thepatentdrawings.com
            </a>{" "}
            site are outlined in this agreement. <br /> <br />
            You consent to be bound by these Terms and Conditions by using the
            Site in any way, including but not limited to visiting or browsing
            the Site or adding content or other materials to the Site. This
            Agreement defines capitalized terms.Intellectual Property.
            <br />
            <br />
            International copyright, trademark, patent, trade secret, and other
            intellectual property or proprietary rights laws protect the Site
            and its original content, features, and functionality, which are
            owned by PatDraw.
          </p>
        </section>
        <section className="mb-6 pt-4 font-poppins">
          <h2 className="text-xl font-semibold mb-4">2. Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            Without prior notice or explanation, we have the right to stop your
            use of the site, which could lead to the loss and destruction of all
            of your personal data. Any clause in this agreement that should, by
            definition, endure termination will do so, including but not limited
            to ownership clauses, warranty disclaimers, indemnification clauses,
            and liability limitations.
          </p>
        </section>
        <section className="mb-6 pt-4 ">
          <h2 className="text-xl font-semibold mb-4">
            3. Links To Other Sites
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Links to external websites that PatDraw does not own or control may
            be found on our site.
            <br />
            <br />
            The content, privacy practices, and policies of any third-party
            websites or services are beyond PatDraw's control and
            responsibility. Reading the privacy statement and terms and
            conditions of any third-party website you visit is highly
            recommended.
          </p>
        </section>
        <section className="mb-6 pt-4 font-poppins">
          <h2 className="text-xl font-semibold mb-4">4. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            The laws of New York, United States, shall govern and be construed
            in accordance with this Agreement (and any additional rules,
            policies, or guidelines included by reference), without giving
            respect to any conflict of law principles.
          </p>
        </section>
        <section className="mb-6 pt-4 ">
          <h2 className="text-xl font-semibold mb-4">
            5. Changes to this agreement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By publishing the amended terms on the Site, we reserve the right,
            at our sole discretion, to change or replace these Terms and
            Conditions. You agree to the updated Terms and Conditions if you
            keep using the site after they have been made. Please check this
            agreement for updates on a regular basis. Do not use, access, or
            continue to use the Site; if you disagree with any of the terms of
            this Agreement or any of its modifications, stop using the Site
            right away.
          </p>
        </section>

        <div className="flex flex-col pt-6">
          <span>
            <b>Website: </b>
            <a
              href="https://thepatentdrawings.com/"
              className="text-blue-700 font-semibold"
            >
              www.thepatentdrawings.com
            </a>
          </span>
          <span>
            <b>Support Email: </b>
            info@thepatentdrawings.com
          </span>
          <span>
            <b>Support Call: </b>
            +1-972-256-8133 , (469) 666-1181
          </span>
          <span>
            <b>Office: </b>Suite-427,425 Broadhollow Road <br />
            Melville | NY-11747
          </span>
        </div>
      </div>
    </main>
  );
};

export default TermsCondition;
