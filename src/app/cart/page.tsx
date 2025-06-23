import Cart from '@/components/organisms/Cart';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
   <Cart/>
    </main>
  );
};

export default page;