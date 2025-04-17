import React from 'react'
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';
import Tpa from '../assets/img/tpa-logo.jpg'

const ServicesFour = () => {
  return (
    <section className=" relative">
    <img src={Ellipes21} alt="" className="absolute right-0 -top-[20%]" />
    <img src={Ellipes22} alt="" className="absolute left-0 top-[20%]" />
    <div className="container">
      <div className=" flex flex-col items-center pt-[80px]">
        <h2 className=" text-fs3xl font-Plus  font-semibold text-center max-w-[1000px]">
        TPA Empanelment: Partner with
          <span className="text-[#9064EE]">
          Trusted Third-Party Administrators
          </span>
        </h2>
        <div className=" flex justify-center">
          <img src={Tpa} alt="" className="w-[60%]" />
        </div>
        <h6 className="max-w-[800px] text-lg text-[#323232] text-center pb-[120px]">
        Expand your healthcare services by becoming an empaneled provider with Third-Party Administrators (TPAs). TPA empanelment allows hospitals and clinics to offer cashless and hassle-free treatment to insured patients, ensuring timely reimbursements and improved patient access to care.

Benefits of TPA Empanelment:

Access to a broader patient base with insurance coverage
Cashless and paperless treatment for insured patients
Timely and hassle-free claim settlements
Enhanced credibility and patient trust in your facility
Get Empaneled with TPAs Today! Improve patient access, enhance your facility’s reputation, and ensure seamless insurance claim processing by joining the TPA network.
        </h6>
      </div>
    </div>
  </section>
  )
}

export default ServicesFour