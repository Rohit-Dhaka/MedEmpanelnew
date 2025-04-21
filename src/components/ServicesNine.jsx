import React from 'react'
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';
import Hrservers from '../assets/img/Hrservers.jpeg'
const ServicesNine = () => {
  return (
    <section className=" relative">
    <img src={Ellipes21} alt="ellipes" className="absolute right-0 -top-[20%]" />
    <img src={Ellipes22} alt="ellopes" className="absolute left-0 top-[20%]" />
    <div className="container">
      <div className=" flex flex-col items-center pt-[80px]">
        <h2 className=" sm:text-fs3xl text-[38px] font-Plus  font-semibold text-center max-w-[1000px]"  data-aos="fade-up">
        Staffing & Hospital Credential Setup:
          <span className="text-[#9064EE]">
          Building a Competent Healthcare Team
          </span>
        </h2>
        <div className=" flex justify-center"  data-aos="fade-up">
          <img src={Hrservers} alt="img" className="w-[100%]" />
        </div>
        <h6 className="max-w-[800px] text-lg text-[#323232] text-center pb-[120px]"  data-aos="fade-up">
        Ensure your hospital operates at its best with our Staffing & Hospital Credential Setup services. We help you recruit qualified healthcare professionals and establish credentialing processes that meet industry standards, ensuring your facility delivers safe, high-quality care.

Our Services Include:

Staff Recruitment: Hire skilled doctors, nurses, technicians, and support staff tailored to your hospital’s needs.
Credential Verification: Ensure all medical professionals meet required qualifications, licenses, and certifications.
Onboarding & Training: Smooth onboarding processes and continuous staff training for improved patient care.
Compliance Management: Align your credentialing processes with national healthcare regulations.
Build a Strong Healthcare Team Today! Enhance your hospital’s efficiency and patient trust by setting up a qualified, credentialed staff and streamlined credentialing process.
        </h6>
      </div>
    </div>
  </section>
  )
}

export default ServicesNine