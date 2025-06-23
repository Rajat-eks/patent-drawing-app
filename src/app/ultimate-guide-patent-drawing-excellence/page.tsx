import UltimateGuide from '@/components/organisms/UltimateGuide';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
      <UltimateGuide/>
    </main>
  );
};

export default page;