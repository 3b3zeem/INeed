import React, { useState } from "react";
import Slider from "react-slick";
import useSlider from "../../Hooks/UseSlider";

const Header = () => {
  const { data, loading, error } = useSlider();
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: data?.length > 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    appendDots: (dots) => {
      let bottomValue = "-20px";
      if (window.innerWidth <= 480) {
        bottomValue = "-5px";
      } else if (window.innerWidth <= 768) {
        bottomValue = "-20px";
      }
      return (
        <div
          style={{
            bottom: bottomValue,
            position: "absolute",
            width: "100%",
          }}
        >
          <ul
            style={{
              margin: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {dots}
          </ul>
        </div>
      );
    },
    customPaging: (i) => (
      <div
        style={{
          width: activeSlide === i ? "22px" : "12px",
          height: "12px",
          borderRadius: activeSlide === i ? "10px" : "50%",
          background: "#933ABC",
          opacity: activeSlide === i ? 1 : 0.5,
          transition: "opacity 0.3s",
          border: activeSlide === i ? "2px solid #fff" : "none",
        }}
      />
    ),
  };

  return (
    <React.Fragment>
      <div className="px-4 sm:px-8 py-8 sm:py-12 flex justify-center items-center min-h-[500px]">
        {loading ? (
          <div className="flex justify-center items-center min-h-[500px] w-full">
            <svg
              className="animate-spin h-10 w-10 text-[#933ABC]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 font-semibold">
            Error loading images
          </div>
        ) : (
          <div className="w-full">
            <Slider {...settings}>
              {Array.isArray(data) &&
                data.map((item) => (
                  <div key={item.id} className="h-[500px] w-full relative focus:outline-none">
                    <img
                      src={item.image}
                      alt={`${item.id}`}
                      className="h-full w-full object-contain"
                    />
                    <a
                      href={item.link}
                      className="absolute bg-[#933ABC] text-white px-6 py-2 rounded shadow-lg bottom-10 left-1/2 -translate-x-1/2 font-bold text-lg hover:bg-[#7a2fa0] transition"
                    >
                      Follow Up
                    </a>
                  </div>
                ))}
            </Slider>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Header;
