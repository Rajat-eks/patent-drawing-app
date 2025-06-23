import ServicesPrice from '@/components/organisms/ServicesPrice';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
   <ServicesPrice/>
    </main>
  );
};

export default page;