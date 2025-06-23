import MasteringLine from '@/components/organisms/MasteringLine';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = () => {
  return (
    <main>
      <MasteringLine/>
    </main>
  );
};

export default page;