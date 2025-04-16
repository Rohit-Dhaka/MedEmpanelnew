import React from 'react'
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';

const ServicesSix = () => {
  return (
    <section className=" relative">
    <img src={Ellipes21} alt="" className="absolute right-0 -top-[20%]" />
    <img src={Ellipes22} alt="" className="absolute left-0 top-[20%]" />
    <div className="container">
      <div className=" flex flex-col items-center pt-[80px]">
        <h2 className=" text-fs3xl font-Plus  font-semibold text-center max-w-[1000px]">
        Advanced Hospital Software: Streamline
          <span className="text-[#9064EE]">
          Your Healthcare Operations

          </span>
        </h2>
        <div className=" flex justify-center">
          {/* <img src={} alt="" className="w-[60%]" /> */}
        </div>
        <h6 className="max-w-[800px] text-lg text-[#323232] text-center pb-[120px]">
        Optimize your hospital’s efficiency and enhance patient care with our cutting-edge hospital software. Designed to simplify administrative tasks, improve patient management, and ensure seamless operations, our software helps healthcare facilities deliver quality care with precision and ease.

Key Features of Our Hospital Software:

Patient Management: Easy appointment scheduling, electronic health records (EHR), and patient history tracking.
Billing & Insurance Processing: Simplify billing and insurance claims for faster settlements.
Inventory Management: Track medical supplies and ensure timely restocking.
Laboratory & Pharmacy Integration: Streamline lab tests and pharmacy services.
Staff Management: Efficient scheduling and staff performance monitoring.
Reporting & Analytics: Generate detailed reports for informed decision-making.
Upgrade Your Hospital’s Efficiency Today! Experience smoother operations, improved patient care, and enhanced administrative control with our hospital software.
        </h6>
      </div>
    </div>
  </section>
  )
}

export default ServicesSix