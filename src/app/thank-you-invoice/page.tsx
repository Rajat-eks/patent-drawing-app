import OrderInvoice from '@/components/organisms/ThankYou/RequestInvoice';
import React from 'react';

interface IndexProps {
  // define props here
}

const index : React.FC<IndexProps> = (props) => {
  return (
    <main>
      <OrderInvoice/>
    </main>
  );
};

export default index;