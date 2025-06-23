import React from 'react';
import Modeling from '@/components/organisms/Services/3DModelling';
import ServiceLayout from '@/components/layout/serviceLayout';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
      <ServiceLayout>

    <Modeling/>
      </ServiceLayout>
    </main>
  );
};

export default page;