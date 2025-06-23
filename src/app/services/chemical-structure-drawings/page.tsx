import ServiceLayout from '@/components/layout/serviceLayout';
import ChemicalStructure from '@/components/organisms/Services/ChemicalStructure';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
      <ServiceLayout>

  <ChemicalStructure/>
      </ServiceLayout>
    </main>
  );
};

export default page;