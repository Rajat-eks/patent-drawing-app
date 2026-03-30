"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const POPUP_STORAGE_KEY = "utilityBannerClosed";
const TARGET_URL =
  "https://thepatentdrawings.com/product/utility-patent-drawings";

const TimedBannerPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isClosed = window.sessionStorage.getItem(POPUP_STORAGE_KEY) === "true";
    if (isClosed) return;

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => window.clearTimeout(timer);
  }, []);

  const closePopup = () => {
    window.sessionStorage.setItem(POPUP_STORAGE_KEY, "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 bg-black/60 flex items-center justify-center p-4">
      <div className="relative w-full max-w-[500px]">
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close banner"
          className="absolute -top-2 -right-2 h-9 w-9 rounded-full bg-white text-black text-2xl leading-none flex items-center justify-center shadow-md hover:bg-gray-100"
        >
          &times;
        </button>

        <a
          href={TARGET_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closePopup}
          className="block rounded-lg overflow-hidden shadow-xl"
        >
          <Image
            src="/exit-banner.jpeg"
            alt="Utility patent drawings offer banner"
            width={1024}
            height={1024}
            className="w-full h-auto block max-h-[80vh] object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default TimedBannerPopup;
