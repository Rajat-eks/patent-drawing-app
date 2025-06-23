'use client'
import React, { memo, useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import Image from "next/image";

interface IndexProps {
  // define props here
  samples: string[];
}

const CartSample: React.FC<IndexProps> = ({ samples }) => {
  const [selectedImage, setSelectedImage] = useState<string>(samples[0]);
  const { serviceId } = useParams();

  useEffect(() => {
    setSelectedImage('');
  }, [serviceId]);

  return (
    <main>
      <div className="grid gap-4">
        <div className="border-[1px] rounded shadow-md">
          <Image
            className="h-auto w-full max-w-full object-contain rounded-lg  object-center "
            src={selectedImage || samples[0]}
            alt="selectedImage"
          />
        </div>

        <div className="grid grid-cols-5 gap-4">
          {samples?.map((item: string, index: number) => {
            return (
              <div key={index} onClick={() => setSelectedImage(item)}>
                <Image
                  src={item}
                  className="object-cover object-center w-20 max-w-full rounded-lg cursor-pointer"
                  alt={`image-sample-${1}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default CartSample;
