import ServiceLayout from '@/components/layout/serviceLayout';
import ObjectedPatent from '@/components/organisms/Services/ObjectedPatent';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
      <ServiceLayout>

 <ObjectedPatent/>
      </ServiceLayout>
    </main>
  );
};

export default page;