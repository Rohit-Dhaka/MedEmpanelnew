import React from 'react'
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';
import Nabhlogo from '../assets/img/Nabhlogo.png'

const ServicesThree = () => {
  return (
    <section className=" relative">
    <img src={Ellipes21} alt="ellipes" className="absolute right-0 -top-[20%]" />
    <img src={Ellipes22} alt="ellopes" className="absolute left-0 top-[20%]" />
    <div className="container">
      <div className=" flex flex-col items-center pt-[80px]">
        <h2 className=" sm:text-fs3xl text-[38px] font-Plus  font-semibold text-center max-w-[1000px]"  data-aos="fade-up">
        Full NABH Certification: Commit to
          <span className="text-[#9064EE]">
          Excellence in Healthcare
          </span>
        </h2>
        <div className=" flex justify-center py-10"  data-aos="fade-up">
          <img src={Nabhlogo} alt="img" className="sm:w-[60%]" />
        </div>
        <h6 className="max-w-[800px] text-lg text-[#323232] text-center pb-[120px]"  data-aos="fade-up">
        Achieve the highest standards in healthcare with Full NABH Certification, a mark of quality and patient safety for hospitals and healthcare facilities. This accreditation ensures your facility meets comprehensive national benchmarks for healthcare delivery, enhancing patient care and organizational efficiency.

Benefits of Full NABH Certification:

Assurance of high-quality patient care and safety
Compliance with national and international healthcare standards
Enhanced credibility and patient trust
Improved operational efficiency and staff performance
Elevate Your Healthcare Facility Today! Commit to excellence and become a benchmark for quality healthcare by achieving Full NABH Certification.
        </h6>
      </div>
    </div>
  </section>
  )
}

export default ServicesThree