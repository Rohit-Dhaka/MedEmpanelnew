import React from "react";

import PMJAY from '../assets/img/PMJAY-logo.png'
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';

const ServicesOne = () => {
  return (
    <section className=" relative">
              <img src={Ellipes21} alt="" className="absolute right-0 -top-[20%]" />
              <img src={Ellipes22} alt="" className="absolute left-0 top-[20%]" />
      <div className="container">
        <div className=" flex flex-col items-center pt-[80px]">
          <h2 className=" text-fs3xl font-Plus  font-semibold text-center max-w-[1000px]">
            Ayushman Empanelment: Partner with Us <span className="text-[#9064EE]">to Provide Quality Healthcare</span>
          </h2>
          <div className=" flex justify-center">
            <img src={PMJAY} alt="" className="w-[60%]" />
          </div>
          <h6 className="max-w-[800px] text-lg text-[#323232] text-center pb-[120px]">
            Join the Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)
            network and offer cashless, paperless treatment to eligible
            beneficiaries. Empaneling with Ayushman Bharat allows healthcare
            providers to deliver high-quality services while ensuring timely
            government reimbursements. Benefits of Empanelment: Access to a
            large pool of beneficiaries Cashless treatment for patients
            Government-backed reimbursement for services Enhanced credibility
            and increased patient footfall Become an Ayushman Empaneled Hospital
            Today! Ensure your facility meets the required standards and expand
            your services to support India's mission of accessible healthcare
            for all.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default ServicesOne;
