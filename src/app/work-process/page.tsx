import WorkProcess from '@/components/organisms/WorkProcess';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
 <WorkProcess/>
    </main>
  );
};

export default page;