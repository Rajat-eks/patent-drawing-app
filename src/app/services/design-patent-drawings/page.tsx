import ServiceLayout from '@/components/layout/serviceLayout';
import DesignPatent from '@/components/organisms/Services/DesignPatent';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>

      <ServiceLayout>

 <DesignPatent/>
      </ServiceLayout>
    </main>
  );
};

export default page;