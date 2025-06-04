import React from "react";
import logo from "../assets/logo.png";
import img1_4 from "../assets/1,4.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import footer from "../assets/footer.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Header from "./Header/Header";

const INeed = () => {
  return (
    <React.Fragment>
      <div className="text-center font-manrope bg-white">
        <div className="flex justify-end p-4 border-b border-gray-400">
          <img src={logo} alt="logo" width={100} />
        </div>

        <Header />

        <footer
          className="relative bg-[#933ABC] text-white py-8 px-4 -mt-5 overflow-hidden"
          dir="rtl"
        >
          <h4 className="text-lg mb-2 opacity-80">ابدأ رحلتك معانا من هنا</h4>
          <h1 className="font-extrabold text-[56px] leading-[110%] tracking-[0] text-center mb-[5px]">
            يلا نزل تطبيق INeed
          </h1>
          <p className="text-base max-w-md mx-auto mb-6">
            تطبيق INeed هو تطبيق يخليك تشتري كل قطع الغيار اللي محتاجها وأنت ف
            مكانك وكمان فيه كل الفنيين المشهورين.
          </p>

          <div className="flex flex-wrap justify-center gap-4" dir="ltr">
            <a
              href="/app-release.apk"
              download
              className="flex items-center gap-2 bg-white text-black py-2 px-4 shadow-md hover:scale-105 transition-transform"
            >
              <FaGooglePlay className="text-3xl text-[#933ABC]" />
              <div className="text-left leading-tight">
                <span className="block text-xs text-gray-600">GET IT ON</span>
                <span className="block font-bold">Google Play</span>
              </div>
            </a>

            <a
              href="https://testflight.apple.com/join/1eAW3KX2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black py-2 px-4 shadow-md hover:scale-105 transition-transform"
            >
              <FaApple className="text-3xl text-[#933ABC]" />
              <div className="text-left leading-tight">
                <span className="block text-xs text-gray-600">
                  Download on the
                </span>
                <span className="block font-bold">App Store</span>
              </div>
            </a>
          </div>

          <div className="absolute -bottom-35 -right-10 hidden lg:flex">
            <div className="flex justify-start">
              <div className="flex items-center gap-4 transform rotate-[45deg]">
                <img
                  src={img1_4}
                  alt="App Preview"
                  className="w-[30px] lg:w-[100px] rounded-2xl shadow-lg"
                />
                <div className="flex flex-col gap-2">
                  <img
                    src={img3}
                    alt="App Preview"
                    className="w-[30px] lg:w-[100px] rounded-2xl shadow-lg"
                  />
                  <img
                    src={img2}
                    alt="App Preview"
                    className="w-[30px] lg:w-[100px] rounded-2xl shadow-lg"
                  />
                </div>
                <img
                  src={img1_4}
                  alt="App Preview"
                  className="w-[30px] lg:w-[100px] rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 hidden lg:flex">
            <img src={footer} alt="footer" className="w-[150px] sm:w-[200px]" />
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default INeed;
