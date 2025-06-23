import Samples from '@/components/organisms/Samples';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
 <Samples/>
    </main>
  );
};

export default page;