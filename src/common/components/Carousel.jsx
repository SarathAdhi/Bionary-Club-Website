import React from "react";
import Slider from "react-slick";
import Head from "next/head";
import clsx from "clsx";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={clsx(className, "bg-gray-500 hover:bg-gray-600 h-full w-6")}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        placeContent: "center",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={clsx(className, "bg-gray-500 hover:bg-gray-600 h-full w-6")}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        placeContent: "center",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <div className="w-full overflow-hidden p-8">
        <Slider {...settings}>{children}</Slider>
      </div>
    </>
  );
};

export default Carousel;
