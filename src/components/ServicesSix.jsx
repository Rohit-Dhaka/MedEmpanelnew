import React from 'react'
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';
import Sofware from '../assets/img/sofware.png'
const ServicesSix = () => {
  return (
    <section className=" relative">
    <img src={Ellipes21} alt="ellipes" className="absolute right-0 -top-[20%]" />
    <img src={Ellipes22} alt="ellopes" className="absolute left-0 top-[20%]" />
    <div className="container">
      <div className=" flex flex-col items-center pt-[80px]">
        <h2 className=" sm:text-fs3xl text-[38px] font-Plus  font-semibold text-center max-w-[1000px]"  data-aos="fade-up">
        Advanced Hospital Software: Streamline
          <span className="text-[#9064EE]">
          Your Healthcare Operations

          </span>
        </h2>
        <div className=" flex justify-center" data-aos="fade-up">
          <img src={Sofware} alt="img" className="w-[100%]" />
        </div>
        <h6 className="max-w-[800px] text-lg text-[#323232] text-center pb-[120px]"  data-aos="fade-up">
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