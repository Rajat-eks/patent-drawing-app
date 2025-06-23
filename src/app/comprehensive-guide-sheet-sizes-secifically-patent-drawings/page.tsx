import SheetSizes from '@/components/organisms/SheetSize';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
  <SheetSizes/>
    </main>
  );
};

export default page;