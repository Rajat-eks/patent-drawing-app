import ComplexDesign from '@/components/organisms/ComplexDesign';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
   <ComplexDesign/>
    </main>
  );
};

export default page;