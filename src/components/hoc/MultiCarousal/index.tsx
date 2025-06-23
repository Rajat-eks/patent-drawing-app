'use client'
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface IndexProps {
  children?: any;
  items: number;
  dots?: boolean;
  arrows?: boolean;
}

const MultiCarousal: React.FC<IndexProps> = ({
  children,
  items,
  dots,
  arrows,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width for mobile detection
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: items + 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: items,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: items - 1,
      dots: false,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      dots: false,
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={!isMobile ? dots || false : false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      arrows={arrows || false}
      //  autoPlay={this.props.deviceType !== 'mobile' ? true : false}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //  deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-3-px "
      className="m-0  "
    >
      {children}
    </Carousel>
  );
};

export default MultiCarousal;
