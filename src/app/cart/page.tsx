import Cart from '@/components/organisms/Cart';
import { buildMeta } from '@/lib/seo';
import React from 'react';

interface PageProps {
  // define props here
}

export const metadata = buildMeta({
  description:
    "Review your cart at PatDraw, complete your order seamlessly, and proceed with your mediatory patent drawing needs efficiently.",
  keywords:
    "Cart, Order Summary",
  title: "PCart | PatDraw",
  canonical: "cart",
});
const page : React.FC<PageProps> = (props) => {
  return (
    <main>
   <Cart/>
    </main>
  );
};

export default page;