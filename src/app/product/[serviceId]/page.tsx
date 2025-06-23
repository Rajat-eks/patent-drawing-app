import Product from '@/components/organisms/Product';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
     <Product/>
    </main>
  );
};

export default page;