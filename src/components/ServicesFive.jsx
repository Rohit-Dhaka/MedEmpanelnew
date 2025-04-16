import React from 'react'
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';

const ServicesFive = () => {
  return (
    <section className=" relative">
    <img src={Ellipes21} alt="" className="absolute right-0 -top-[20%]" />
    <img src={Ellipes22} alt="" className="absolute left-0 top-[20%]" />
    <div className="container">
      <div className=" flex flex-col items-center pt-[80px]">
        <h2 className=" text-fs3xl font-Plus  font-semibold text-center max-w-[1000px]">
        NABL Accreditation: Ensuring Excellence
          <span className="text-[#9064EE]">
          in Laboratory Standards
          </span>
        </h2>
        <div className=" flex justify-center">
          {/* <img src={} alt="" className="w-[60%]" /> */}
        </div>
        <h6 className="max-w-[800px] text-lg text-[#323232] text-center pb-[120px]">
        Elevate your laboratory’s quality and reliability with NABL (National Accreditation Board for Testing and Calibration Laboratories) Accreditation. NABL accreditation demonstrates your commitment to maintaining the highest standards in testing, calibration, and laboratory practices, ensuring accurate and trustworthy results.

Benefits of NABL Accreditation:

Assurance of high-quality and accurate testing services
Compliance with national and international standards
Enhanced credibility and patient trust
Improved laboratory processes and operational efficiency
Achieve NABL Accreditation Today! Showcase your commitment to quality and accuracy by aligning with NABL standards, and provide your patients with the highest level of laboratory care.
        </h6>
      </div>
    </div>
  </section>
  )
}

export default ServicesFive