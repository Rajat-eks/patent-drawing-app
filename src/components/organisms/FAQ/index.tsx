"use client";
import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import SEO from "../../common/SEO";

interface FAQ {
  ques?: string;
  ans?: string;
}
const FAQs: FAQ[] = [
  {
    ques: "How do I order a drawing?",
    ans: `All you need is a working credit card or PayPal account to buy a drawing or illustration package. For information on how to order, please see the "Ordering a Utility Patent Drawing / Design Patent Drawing" FAQ section. When checking out, you must either sign in to "My Account" or establish and activate a new account.`,
  },
  {
    ques: "How do I start working with you?",
    ans: `It's very easy. The details about your drawings are what we need. Any and all pertinent files may be uploaded. Pictures, drawings, videos, sketches, brochures, and 3D files like SolidWorks are all examples of this file format. Simply follow the instructions on the "Utility Patent Drawing" or "Design Patent Drawing" order page. You will also need to provide your billing information and a working credit card number or PayPal account in order to finish the order.`,
  },
  {
    ques: "Confidentiality. Do you sign a Non-Disclosure Agreement?",
    ans: `We have posted our NDA online for you to examine when placing your order in order to safeguard the privacy of your idea. The NDA will be electronically completed if you check the box beneath it, and both parties will e-sign it. Your invention's confidentiality and protection will be guaranteed as a result.
For the Non-Disclosure Agreement (NDA), {{click here}}.
We can be reached by phone at +1-972-256-8133 or by email at info@thepatentdrawings.com
`,
  },
  {
    ques: "Do you do patentability search along with the drawings?",
    ans: `To find existing patents and patent applications as well as non-patent literature, including research papers, articles, and conference presentations, that either expressly or implicitly disclose the idea under investigation, we would highly advise conducting a patentability search. In addition to giving the inventor the chance to improve upon pertinent previous arts at the outset, a patentability search will reduce the likelihood of coming across pertinent prior art when the patent application is being examined. Please contact us by phone at +1-972-256-8133 or by email at info@thepatentdrawings.com about your invention's patentability search.`,
  },
  {
    ques: "Would you recommend a patent search before drafting the patent drawings?",
    ans: `Yes, before creating the drawings and the patent application, we advise having a professional patentability search completed. We can help by conducting a thorough patentability search and offering our general assessment of the invention's patentability. To learn more about our patentability search services, send us an email at info@thepatentdrawings.com.`,
  },
  {
    ques: "What software’s do you use for developing the drawings?",
    ans: `AutoCAD, TurboCAD, Autodesk Inventor, SolidWorks, CorelDraw Suite, MS Visio, etc.`,
  },
  {
    ques: "Which all jurisdiction/countries you cover other than US?",
    ans: `In addition to being current with USPTO regulations, we also stay current with those of other patent offices, such as EPO, JPO, IPO, UKIPO, CIPA, SIPO, KIPO, and offices of AU, DE, SG, IL, and others.`,
  },
  {
    ques: "How iterations and corrections are handled?",
    ans: `We will not charge for any necessary corrections resulting from our error. There will be no fees for minor edits. Additional drawings and modifications to the project's scope will be billed at our regular rate.`,
  },
  {
    ques: "What information do I need to provide to get drawings done?",
    ans: `Images from websites, sketches, photos, informal drawings, AutoCAD files, brochures, or videos that can better explain your invention. We will accept any sort of visual representation of your idea, such as drawings, prototypes, 3D renderings, photographs, films, etc. Even if you don't have one of these, we can make one from scratch using preliminary hand-drawn sketches and the invention's subject matter.`,
  },
  {
    ques: "How transparent is your pricing?",
    ans: `We guarantee that our prices are clear-cut and easy to understand. For instance, we only charge for a single figure in a block diagram, not for each block. A flowchart would also be regarded as a single figure. However, since we would have to create each graph independently, for instance, several graphs in the same figure would be regarded as separate figures; similarly, Figs. 1a, 1b, and 1c, which depict several implementations of the same invention, would be regarded as separate figures.`,
  },
  {
    ques: "Can you help with drafting the complete patent application as well? ",
    ans: `Indeed, we are able to draft both the full provisional and non-provisional patent applications. Drafting the patent application's specifications, claims, and drawings is included in this service. For further information about our patent application drafting services, please contact us via email at info@thepatentdrawings.com.`,
  },
  {
    ques: "How do I keep a track of my order or make any changes if required?",
    ans: `Just visit the MY ACCOUNT section at the HOME page and login your details.`,
  },
  {
    ques: "What is your turnaround time for patent drawings?",
    ans: `Our turnaround time for routine requests is four to five business days. If you need the drawings sooner, you can choose "3 days as expedited" from the "Delivery Speed Options" drop-down option when placing your order. We can talk about special cases of even faster deliveries.`,
  },
  {
    ques: "Can I change or cancel my order?",
    ans: `There are two ways to modify or cancel an order that has already been placed:

1.	By contacting the account manager, you were given for this delivery via email (the specifics will be included in the email you received upon order confirmation).
2.	By contacting +1-972-256-8133, our customer service helpline

Although we will try our best to modify your order, if work on the request has already started or if the scope changes substantially, there may be additional fees. Changes should therefore be made as soon as possible.
`,
  },
  {
    ques: "How will my drawings be delivered?",
    ans: `The drawing can be provided in any of the forms listed: DWG, IGES, CAT, PDF, CAD, SLD, AI, VSD, ASM, STL, EASM. If you have particular preferences or requirements, it will only be provided in that format.`,
  },
  {
    ques: "Can I discuss with someone?",
    ans: `We are available Monday to Friday, 24x7. Please call us at +1-972-256-8133 or write to us at info@thepatentdrawings.com `,
  },
  {
    ques: "Are my payment details secure?",
    ans: `Absoulutely. Only the most reliable payment gateway platforms are used to process payments.`,
  },
];
const FAQ = () => {
  const [isOpen, setIsOpen] = useState({ status: false, id: null });

  const handleOpenFAQ = (index: any) => {
    if (index == isOpen.id) {
      setIsOpen({ status: false, id: null });
    } else {
      setIsOpen({ status: true, id: index });
    }
  };

  return (
    <div>
      <SEO
        description="Find answers to your frequently asked questions regarding mediatory processes, ensuring clarity and understanding for a smoother resolution experience."
        keywords="FAQs, Frequently Asked Questions"
        title="Frequently Asked Questions| PatDraw"
      />
      <div className="bg-[#F2F4FF] ">
        <section className="max-w-5xl mx-auto py-4 sm:py-6">
          <div className="flex items-center justify-center flex-col gap-y-2 py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Frequently asked questions
            </h2>
            <p className="text-lg font-medium text-slate-700/70">
              Questions related to our Academy
            </p>
          </div>
          <div className="w-full px-7 md:px-10 xl:px-2 py-4">
            <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
              {FAQs?.map(({ ques, ans }, index: any) => {
                return (
                  <>
                    <div
                      key={index}
                      className="border-b border-[#0A071B]/10  px-3"
                    >
                      <div
                        className="flex items-center"
                        onClick={() => handleOpenFAQ(index)}
                      >
                        <span className="text-gray-800">
                          {isOpen?.status && isOpen?.id == index ? (
                            <CiCircleMinus
                              size={26}
                              className="cursor-pointer"
                            />
                          ) : (
                            <CiCirclePlus
                              size={26}
                              className="cursor-pointer"
                            />
                          )}
                        </span>
                        <button
                          className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
                          data-toggle="answer-1"
                          onClick={() => handleOpenFAQ(index)}
                        >
                          <span>{ques}</span>
                          {/* <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          className=" mt-1.5 md:mt-0 flex-shrink-0 rotate-180 transform h-5 w-5 text-[#5B5675]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                        </svg> */}
                        </button>
                      </div>
                      {isOpen?.status && isOpen?.id == index ? (
                        <div
                          className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium"
                          id="answer-1"
                        >
                          {ans && (
                            <p
                              className="text-gray-700 mt-2"
                              dangerouslySetInnerHTML={{
                                __html: ans.replace(
                                  "{{click here}}",
                                  '<a href="/non_disclosure_agreement.pdf" class="text-blue">Click here</a>'
                                ),
                              }}
                            />
                          )}
                        </div>
                      ) : null}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
