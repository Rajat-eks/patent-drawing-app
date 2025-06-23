import InvoiceGenerator from '@/components/organisms/InvoiceGenerator';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
   <InvoiceGenerator/>
    </main>
  );
};

export default page;