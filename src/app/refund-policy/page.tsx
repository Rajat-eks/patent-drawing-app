import RefundPolicy from '@/components/organisms/RefundPolicy';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
  <RefundPolicy/>
    </main>
  );
};

export default page;