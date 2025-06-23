import PrivacyPolicy from '@/components/organisms/PrivacyPolicy';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
      <PrivacyPolicy/>
    </main>
  );
};

export default page;