import React from "react";
import GraphicOne from "../assets/img/GraphicOne.jpeg";
import GraphicTwo from "../assets/img/GraphicTwo.jpeg";
import Layer3 from "../assets/img/Layer3.webp";
import Layer4 from "../assets/img/Layer4.webp";
import ScrollCounter from "./ScrollCounter";

const AyushmanInfo = () => {
  return (
    <>
      <section className=" bg-[#EFEFEF]">
        <div className="container">
          <div className="flex flex-row flex-wrap-reverse mx-[-12px] md:py-[120px] py-16 items-center">
            <div className="md:w-6/12 w-full px-3 md:pt-0 pt-10">
              <h2 className="text-[52px] font-Plus leading-[110%] font-bold" data-aos="fade-right">
                <span className=" md:inline-block">
                  All India <ScrollCounter target={15000} duration={3000} />
                </span>{" "}
                <span className="md:block">hospitals</span> empanelled{" "}
              </h2>
            </div>
            <div className="md:w-6/12 w-full px-3" data-aos="fade-left" >
              <img src={GraphicOne} alt="graphic" className="w-full" />
            </div>
          </div>
          <div className="flex flex-row  flex-wrap mx-[-12px] md:py-[120px] py-16 items-center">
            <div className="md:w-6/12 w-full px-3" data-aos="fade-right">
              <img src={GraphicTwo} alt="graphic" />
            </div>
            <div className="md:w-6/12 w-full px-3 md:pt-0 pt-10" data-aos="fade-left" >
              <h2 className="text-[48px] font-Plus leading-[110%] font-bold">
                Ayushman cards <span className="md:block">created</span>{" "}
                <ScrollCounter target={400} duration={1200} />
                around
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="box sm:my-[152px] my-16 bg-[#8E66EF] px-4 rounded-[16px] relative"  data-aos="fade-up">
            <img
              src={Layer3}
              alt="layer"
              className=" absolute top-0 right-0 left-0 w-full  "
            />
            <img
              src={Layer4}
              alt="layer"
              className=" absolute bottom-0  right-0 left-0 w-full"
            />
            <div className="flex flex-col items-center lg:py-[82px] sm:py-12 py-8">
              <h2 className="text-white font-Plus sm:text-[48px] text-[32px]  font-bold leading-[110%] pb-4 text-center">
                So, What You've Been Waiting For?
              </h2>
              <h6 className="text-white leading-[150%] font-normal  sm:pb-[42px] pb-8 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                officiis. Debitis hic voluptatem illum quam molestiae! Quae vero
                vel autem.
              </h6>
              <button className=" font-Plus font-bold leading-[150%] py-4 px-[42px] bg-white text-[#8E66EF] rounded-[61px]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AyushmanInfo;
