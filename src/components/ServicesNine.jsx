import React from 'react'
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';

const ServicesNine = () => {
  return (
    <section className=" relative">
    <img src={Ellipes21} alt="" className="absolute right-0 -top-[20%]" />
    <img src={Ellipes22} alt="" className="absolute left-0 top-[20%]" />
    <div className="container">
      <div className=" flex flex-col items-center pt-[80px]">
        <h2 className=" text-fs3xl font-Plus  font-semibold text-center max-w-[1000px]">
        Staffing & Hospital Credential Setup:
          <span className="text-[#9064EE]">
          Building a Competent Healthcare Team
          </span>
        </h2>
        <div className=" flex justify-center">
          {/* <img src={} alt="" className="w-[60%]" /> */}
        </div>
        <h6 className="max-w-[800px] text-lg text-[#323232] text-center pb-[120px]">
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