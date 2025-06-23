import Thankyou from '@/components/organisms/ThankYou';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
   <Thankyou/>
    </main>
  );
};

export default page;