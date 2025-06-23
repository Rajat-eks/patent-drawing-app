import React from "react";
import SEO from "../../common/SEO";

interface PageProps {
  // define props here
}

const RefundPolicy: React.FC<PageProps> = (props) => {
  return (
    <main className="bg-gradient-to-tr from-[#FBF3E8] to-[#D5E1E2] via-[#F0EFFB]  p-4  md:py-10 md:px-60 font-poppins ">
      <SEO
        description="Read PatDraw's (Effectual Services) Privacy Policy to understand how we collect, use, and protect your data, ensuring your information's confidentiality and security."
        keywords="Privacy Policy"
        title="Privacy Policy| PatDraw"
      />
      <div className="container mx-auto p-8  bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Refund Policy</h1>

        <section className="mb-6 pt-4 border-t-2">
          <h2 className="text-xl font-semibold mb-4">1. Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Under the following circumstances, clients may choose to cancel & be
            eligible for refund on their projects:
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">2. Order Not Needed</h2>
          <ul className=" list-inside text-gray-700 leading-relaxed">
            <li className="mb-2">
              If a customer decides that the design project is no longer
              necessary, they are free to cancel their order at any moment.
              Nevertheless, no reimbursement will be given in these
              circumstances.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            3. Timeframe for Free Cancellation & Refund
          </h2>
          <ul className=" list-inside text-gray-700 leading-relaxed">
            <li className="mb-2 space-x-1">
              Customers are not charged a cancellation fee if they decide to
              cancel their order within 24 hours of placing it or the same day.
              A refund will be given if the cancellation request is filed within
              this window of time and the consumer has already paid. A one-time
              refund will be processed within approximately 7 to 10 working
              days.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            4. Starting a Cancellation Request
          </h2>
          <ul className="l list-inside text-gray-700 leading-relaxed">
            <li className="mb-2">
              Customers can start a cancellation request by sending an email to
              <b> info@thepatentdrawings.com</b>, which will direct them to the
              company's customer service team. The cause for the cancellation as
              well as pertinent order details should be included in the request.
            </li>
            <li>
              Please be aware that refunds may not be available for cancellation
              requests sent beyond the allotted period or if the project has
              already begun. For more information on eligibility and refund
              processing, the customer may consult the previously mentioned
              refund policy or our customer care at +1-972-256-8133.
            </li>
          </ul>
        </section>

        <h2 className="text-xl font-semibold mb-4">5. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about this Refund Policy, please contact us
          at <br />
          <a
            href="mailto:info@globalipacademy.in"
            className="text-blue-600 underline"
          >
            info@thepatentdrawings.com
          </a>
        </p>

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

export default RefundPolicy;
