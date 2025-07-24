import React from "react";

const BusinessModel = () => {
  return (
    <main className="bg-gray-50 min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Business Model: The Patent Drawings (PatDraw)
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            PatDraw is a specialized digital service provider focused on
            creating high-quality patent drawings and illustrations for
            intellectual property professionals, inventors, and companies
            worldwide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Services Offered
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Utility Patent Drawings</li>
            <li>Design Patent Drawings</li>
            <li>Trademark Illustrations</li>
            <li>Technical and Engineering Diagrams</li>
            <li>Re-drafting & Compliance with USPTO/EPO/WIPO standards</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Workflow</h2>
          <p className="text-gray-600 leading-relaxed">
            Clients submit their requirements through our website. We then
            deliver fully customized drawings via secure digital delivery
            channels.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Revenue Model
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our revenue model is project-based. We charge clients per order or
            based on custom quotations depending on the complexity of the
            drawing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            International Use Case
          </h2>
          <p className="text-gray-600 text-[16px] space-y-2.5 pb-2">
            A significant portion of our clientele is international - primarily
            from the US, UK, Canada, Europe, and Australia. We intend to use
            Razorpay’s international payment capabilities to:


          </p>
          <ul className="list-decimal list-inside text-gray-600 space-y-2">
            <li>
              Accept payments from global customers via international
              credit/debit cards and other supported global payment methods.
            </li>
            <li>
              Offer a seamless and secure checkout experience for clients
              purchasing drawing services on our platform.
            </li>
            <li>
              Receive payments in foreign currencies for digital services
              rendered remotely from India.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Compliance
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All services are delivered online and no physical goods are
            involved. Our operations are fully compliant with relevant
            cross-border digital service regulations and we ensure strict
            adherence to data protection and confidentiality norms required in
            the intellectual property domain.
          </p>
        </section>
      </div>
    </main>
  );
};

export default BusinessModel;
