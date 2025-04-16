import React from 'react'
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';

const ServicesEight = () => {
  return (
    <section className=" relative">
    <img src={Ellipes21} alt="" className="absolute right-0 -top-[20%]" />
    <img src={Ellipes22} alt="" className="absolute left-0 top-[20%]" />
    <div className="container">
      <div className=" flex flex-col items-center pt-[80px]">
        <h2 className=" text-fs3xl font-Plus  font-semibold text-center max-w-[1000px]">
        Rohini Registration: Simplify Your
          <span className="text-[#9064EE]">
          Healthcare Facility Registration
          </span>
        </h2>
        <div className=" flex justify-center">
          {/* <img src={} alt="" className="w-[60%]" /> */}
        </div>
        <h6 className="max-w-[800px] text-lg text-[#323232] text-center pb-[120px]">
         
Ensure your healthcare facility meets all regulatory standards with Rohini Registration. Designed for hospitals, clinics, and diagnostic centers, this registration process ensures compliance with government healthcare regulations, enhancing your facility’s credibility and operational efficiency.

Benefits of Rohini Registration:

Regulatory Compliance: Meet all government healthcare standards and legal requirements.
Enhanced Credibility: Build trust with patients by ensuring your facility is officially registered.
Operational Efficiency: Streamline administrative processes and enhance service quality.
Access to Government Schemes: Eligible facilities can participate in various government healthcare programs.
Complete Your Rohini Registration Today! Ensure your healthcare facility operates legally and efficiently by completing the Rohini registration process with ease.
        </h6>
      </div>
    </div>
  </section>
  )
}

export default ServicesEight