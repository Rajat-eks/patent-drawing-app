import ServiceLayout from '@/components/layout/serviceLayout';
import TrademarkDrawing from '@/components/organisms/Services/TrademarkDrawing';
import React from 'react';

interface PageProps {
  // define props here
}

const page : React.FC<PageProps> = (props) => {
  return (
    <main>
      <ServiceLayout>

<TrademarkDrawing/>
      </ServiceLayout>
    </main>
  );
};

export default page;