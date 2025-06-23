import ServiceLayout from '@/components/layout/serviceLayout';
import PatentDrawing from '@/components/organisms/Services/PatentDrawing';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
      <ServiceLayout>

<PatentDrawing/>
      </ServiceLayout>
    </main>
  );
};

export default page;