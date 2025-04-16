import React from 'react';
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';
import Ellipes23 from '../assets/img/Ellipse23.svg';
import Group1 from '../assets/img/Group1.webp'
// import Group2 from '../assets/img/Group2.webp'
import Group2 from '../assets/img/Right.jpg'

const About = () => {
  return (
    <section className="relative overflow-hidden" id="about">
      <img src={Ellipes21} alt="" className="absolute right-0 -top-[20%] animate-pulse" />
      <img src={Ellipes22} alt="" className="absolute left-0 top-[20%] animate-pulse " />
      <img src={Ellipes23} alt="" className="absolute right-0 bottom-0 animate-pulse" />

      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="flex flex-wrap items-center pt-5 md:pt-20">
          <div className="w-full md:w-6/12 px-3 relative">
            {/* You can insert your image or illustration here */}
            <img src={Group1} alt="" className='w-full' />
            <div className="absolute inset-0 bg-transparent"></div>
          </div>
          <div className="w-full md:w-6/12 px-3 pt-4 lg:pt-0 z-10">
            <div className="lg:pl-5">
              <h2 className="text-3xl lg:text-4xl font-bold leading-[52px] text-black font-sans">
                Our <span className="text-[#9064EE]">Mission</span>
              </h2>
              <p className="text-base leading-6 text-[#4C4C4C] pt-3 pb-10 max-w-xl font-sans">
              Our mission is to provide compassionate, high-quality, and accessible healthcare to our community. We are committed to promoting wellness, preventing illness, and restoring health by delivering patient-centered care through innovation, integrity, and excellence. We strive to treat every individual with dignity and respect, ensuring a safe and healing environment for patients, families, and staff alike
              </p>
              <button className="bg-[#9064EE] text-white py-2 px-6 rounded-full font-bold">Read More</button>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-wrap-reverse items-center pt-10 lg:pt-36 pb-10 lg:pb-36">
          <div className="w-full lg:w-5/12 px-3 pt-4 lg:pt-0 z-10">
            <div className="lg:max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold leading-[52px] text-black font-sans">
                Our <span className="text-[#9064EE]">Vision</span>
              </h2>
              <p className="text-base text-[#4C4C4C] pt-3 leading-6 font-sans">
              To build a healthier future by empowering hospitals and healthcare providers with innovative solutions, compassionate care, and seamless access to quality services.
              </p>

              <div className="mt-5 space-y-3">
                <div className="p-3 rounded-xl bg-[#f3f0ff] shadow-sm">
                  <p className="text-base text-[#4C4C4C] leading-6 font-sans">
                  We envision a healthcare ecosystem where every individual, regardless of location or income, receives timely, ethical, and high-quality medical care.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#f3f0ff] shadow-sm">
                  <p className="text-base text-[#4C4C4C] leading-6 font-sans">
                  By supporting hospitals in achieving excellence through accreditation, technology, and infrastructure,
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#f3f0ff] shadow-sm">
                  <p className="text-base text-[#4C4C4C] leading-6 font-sans">
                  we aim to elevate healthcare standards and foster a culture of continuous improvement, empathy, and trust.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 px-3 z-10 ">
            <img src={Group2} alt="" className='w-full rounded-xl' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
