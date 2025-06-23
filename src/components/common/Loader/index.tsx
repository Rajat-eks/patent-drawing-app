import React, { useEffect } from "react";
interface IndexProps {
  // define props here
}

const Loader: React.FC<IndexProps> = (props) => {
  useEffect(() => {
    // Lock scrolling
    document.body.classList.add("overflow-hidden");

    // Cleanup when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <main className="absolute inset-0 z-40 bg-black bg-opacity-50 max-h-screen overflow-hidden">
      <section className="flex items-center justify-center h-full text-5xl">
        Loading ...
      </section>
    </main>
  );
};

export default Loader;
