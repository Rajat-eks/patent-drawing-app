import FAQ from '@/components/organisms/FAQ';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
    <FAQ/>
    </main>
  );
};

export default page;