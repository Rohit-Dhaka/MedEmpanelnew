import React from 'react'
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';

const ServicesSeven = () => {
  return (
    <section className=" relative">
    <img src={Ellipes21} alt="" className="absolute right-0 -top-[20%]" />
    <img src={Ellipes22} alt="" className="absolute left-0 top-[20%]" />
    <div className="container">
      <div className=" flex flex-col items-center pt-[80px]">
        <h2 className=" text-fs3xl font-Plus  font-semibold text-center max-w-[1000px]">
        Insurance Empanelment: Expand
          <span className="text-[#9064EE]">
          Your Healthcare Reach
          </span>
        </h2>
        <div className=" flex justify-center">
          {/* <img src={} alt="" className="w-[60%]" /> */}
        </div>
        <h6 className="max-w-[800px] text-lg text-[#323232] text-center pb-[120px]">
        Join the network of trusted healthcare providers with Insurance Empanelment and offer cashless, hassle-free treatment to insured patients. Empaneling with insurance companies allows your hospital or clinic to deliver quality care while ensuring timely reimbursements and increased patient access.

Benefits of Insurance Empanelment:

Cashless Treatment: Provide patients with seamless, upfront-free healthcare services.
Broaden Patient Base: Access a larger pool of insured patients seeking quality care.
Timely Reimbursements: Ensure faster claim settlements with insurance providers.
Enhanced Credibility: Build trust with patients by being part of reputable insurance networks.
Get Empaneled with Insurance Providers Today! Enhance your facility’s reputation, improve patient access, and streamline insurance claims by joining trusted insurance networks.
        </h6>
      </div>
    </div>
  </section>
  )
}

export default ServicesSeven