import React from 'react';
import NotFound from "@/components/organisms/NotFound";

interface Error {
  // define props here
}

const Error : React.FC<Error> = (props) => {
  return (
    <main>
  <NotFound/>
    </main>
  );
};

export default Error;