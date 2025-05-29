import React from "react";
import Slider from "react-slick";
import useSlider from "../../Hooks/UseSlider";

const Header = () => {
  const { data, loading, error } = useSlider();

  const [activeSlide, setActiveSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: data?.length > 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: Math.min(data?.length, 1),
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    appendDots: (dots) => (
      <div
        style={{
          bottom: "-30px",
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
    ),
    customPaging: (i) => (
      <div
        style={{
          width: activeSlide === i ? "22px": "12px",
          height: "12px",
          borderRadius: activeSlide === i ? "10px": "50%",
          background: "#933ABC",
          opacity: activeSlide === i ? 1 : 0.5,
          transition: "opacity 0.3s",
          border: activeSlide === i ? "2px solid #fff" : "none",
        }}
      />
    ),
  };

  return (
    <div className="px-4 sm:px-8 py-8 sm:py-12 flex justify-center items-center min-h-[500px]">
      {loading ? (
        <div className="text-center text-lg font-semibold">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500 font-semibold">
          Error loading images
        </div>
      ) : (
        <div className="w-full">
          <Slider {...settings}>
            {Array.isArray(data) &&
              data.map((item) => (
                <div key={item.id} className="h-[500px] w-full relative">
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
  );
};

export default Header;
