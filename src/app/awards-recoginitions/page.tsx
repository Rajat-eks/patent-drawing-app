import AboutLayout from '@/components/layout/aboutLayout';
import AwardsRecognition from '@/components/organisms/Home/AwardsRecognition';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
      <AboutLayout>

      <AwardsRecognition/>
      </AboutLayout>
    </main>
  );
};

export default page;