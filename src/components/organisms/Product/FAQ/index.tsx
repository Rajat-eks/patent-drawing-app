"use client";
import React, { useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { faqData } from "../../../../data/faq";

interface IFAQ {
  ques?: string;
  ans?: string;
}

const FAQ = ({ serviceName }: any) => {
  const [isOpen, setIsOpen] = useState<{ status: boolean; id: string | number | null }>({ status: false, id: null });
  const [FAQs, setFaq] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    setFaq(faqData?.filter((item) => item.service == serviceName));
  }, [serviceName]);

  const handleOpenFAQ = (index: string | number) => {
    if (index == isOpen.id) {
      setIsOpen({ status: false, id: null });
    } else {
      setIsOpen({ status: true, id: index });
    }
  };

  return (
    <div>
      <div className="bg-[#F2F4FF] ">
        <section className="max-w-5xl mx-auto py-4 sm:py-6">
          <div className="flex items-center justify-center flex-col gap-y-2 py-5">
            <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold">
              Frequently asked questions
            </h2>
          </div>
          <div className="w-full px-7 md:px-10 xl:px-2 py-4">
            <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
              {FAQs[0]?.faq?.map(({ ques, ans }: any, index: any) => {
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
