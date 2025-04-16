import React from "react";
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';
import Enterlevel from '../assets/img/Enterlevel.jpeg'

const ServicesTwo = () => {
  return (
    <section className=" relative">
      <img src={Ellipes21} alt="" className="absolute right-0 -top-[20%]" />
      <img src={Ellipes22} alt="" className="absolute left-0 top-[20%]" />
      <div className="container">
        <div className=" flex flex-col items-center pt-[80px]">
          <h2 className=" text-fs3xl font-Plus  font-semibold text-center max-w-[1000px]">
          Entry-Level NABH Certification: Elevate
            <span className="text-[#9064EE]">
            Your Healthcare Standards
            </span>
          </h2>
          <div className=" flex justify-center py-10">
            <img src={Enterlevel} alt="" className="w-[60%]" />
          </div>
          <h6 className="max-w-[800px] text-lg text-[#323232] text-center pb-[120px]">
          Achieve excellence in healthcare with Entry-Level NABH Certification, designed for hospitals and healthcare facilities aiming to enhance patient safety and quality of care. This certification serves as the first step towards full NABH accreditation, helping your facility adopt best practices and improve service delivery.

Benefits of Entry-Level NABH Certification:

Enhanced patient safety and care quality
Standardized processes and procedures
Increased credibility and trust among patients
Foundation for full NABH accreditation
Take the First Step Towards Healthcare Excellence! Upgrade your facility’s standards and ensure compliance with national healthcare quality benchmarks.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default ServicesTwo;
