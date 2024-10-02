"use client";

import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const listMenus = [
  {
    alt: "Zoomerr Logo",
    src: "/logo1.png",
  },
  {
    alt: "Zoomerr Logo",
    src: "/logo2.png",
  },
  {
    alt: "Zoomerr Logo",
    src: "/logo3.png",
  },
  {
    alt: "Zoomerr Logo",
    src: "/logo4.png",
  },
  {
    alt: "Zoomerr Logo",
    src: "/logo5.png",
  },
  {
    alt: "Zoomerr Logo",
    src: "/logo6.png",
  },
];

const ClientsSection = () => {
  return (
    <div className="p-2">
      <Slider {...settings}>
        <img
          alt="Zoomerr Logo"
          className="w-1/2 bg-no-repeat"
          src="/logo1.png"
        />
        <img
          alt="Zoomerr Logo"
          className="w-1/2 bg-no-repeat"
          src="/logo2.png"
        />
        <img
          alt="Zoomerr Logo"
          className="w-1/2 bg-no-repeat"
          src="/logo3.png"
        />
        <img
          alt="Zoomerr Logo"
          className="w-1/2 bg-no-repeat"
          src="/logo4.png"
        />
        <img
          alt="Zoomerr Logo"
          className="w-1/2 bg-no-repeat"
          src="/logo5.png"
        />
        <img
          alt="Zoomerr Logo"
          className="w-1/2 bg-no-repeat"
          src="/logo6.png"
        />
      </Slider>
    </div>
  );
};

export default ClientsSection;
