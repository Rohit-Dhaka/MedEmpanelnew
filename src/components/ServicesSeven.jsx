import React from 'react'
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';

import Medical from '../assets/img/Medical.webp'
const ServicesSeven = () => {
  return (
    <section className="relative bg-white">
      <img src={Ellipes21} alt="ellipes" className="absolute right-0 -top-[20%]" />
      <img src={Ellipes22} alt="ellopes" className="absolute left-0 top-[20%]" />
      <div className="container mx-auto px-4 pt-[80px]">
        <div className="flex flex-col items-center">
          <h2 className="sm:text-fs3xl text-[38px] font-Plus font-semibold text-center max-w-[1000px]"  data-aos="fade-up">
            Insurance Empanelment: Expand{' '}
            <span className="text-[#9064EE]">Your Healthcare Reach</span>
          </h2>
          <h6 className="max-w-[800px] text-lg text-[#323232] text-center pb-[80px] pt-6"  data-aos="fade-up">
            Join the network of trusted healthcare providers with Insurance Empanelment and offer cashless, hassle-free treatment to insured patients. Empaneling with insurance companies allows your hospital or clinic to deliver quality care while ensuring timely reimbursements and increased patient access.
            <br /><br />
            <strong>Benefits of Insurance Empanelment:</strong><br />
            - <strong>Cashless Treatment:</strong> Provide patients with seamless, upfront-free healthcare services.<br />
            - <strong>Broaden Patient Base:</strong> Access a larger pool of insured patients seeking quality care.<br />
            - <strong>Timely Reimbursements:</strong> Ensure faster claim settlements with insurance providers.<br />
            - <strong>Enhanced Credibility:</strong> Build trust with patients by being part of reputable insurance networks.
            <br /><br />
            <strong>Get Empaneled with Insurance Providers Today!</strong> Enhance your facility’s reputation, improve patient access, and streamline insurance claims by joining trusted insurance networks.
          </h6>
          <div className=""  data-aos="fade-up">
            <img src={Medical} alt="" className='w-full' />
          </div>
          <h3 className="text-2xl font-semibold text-center pt-10 pb-4 text-[#333]"  data-aos="fade-up">What is National Insurance Hospital Empanelment?</h3>
          <p className="max-w-[900px] text-[#444] text-base text-center pb-4"  data-aos="fade-up">
            The National Insurance Hospital Empanelment (NIHE) is a voluntary process through which hospitals can become empanelled with one or more national health insurance schemes in India. Since its release in 2013, over 1,000 hospitals have been empanelled across the country. Quality of care, financial viability, and transparency are some of the standards that the NIHE ensures.
          </p>
          <p className="max-w-[900px] text-[#444] text-base text-center pb-4"  data-aos="fade-up">
            To start with the empanelment process, the interested hospitals are required to submit an application to the Scheme Administrator. Then an evaluation of the hospital’s facilities and services is carried out by the Scheme Administrator. If the hospital is found to be eligible, it will be included in the list of hospitals that are authorised to provide treatment to patients under the scheme. One of the advantages of getting empanelled with NIHE is that the patients are assured with quality care at a reasonable price.
          </p>

          <h3 className="text-2xl font-semibold text-center pt-10 pb-4 text-[#333]"  data-aos="fade-up">About National Insurance</h3>
          <p className="max-w-[900px] text-[#444] text-base text-center pb-4"  data-aos="fade-up">
            Founded in 1906 at Kolkata, National Insurance Company Limited is India’s oldest insurance company. In 1972, it became one of four subsidiaries of the General Corporation of India, which was fully owned by the Indian government. In 2002, the company was delinked from GIC and became an independent insurance company.
          </p>
          <p className="max-w-[900px] text-[#444] text-base text-center pb-4"  data-aos="fade-up">
            National Insurance Company Ltd offers a wide range of insurance services to its customers, including health insurance, personal accident insurance, and shopkeepers’ insurance. It has offices all over India and overseas, as well as over 50,000 agents.
          </p>

          <h3 className="text-2xl font-semibold text-center pt-10 pb-4 text-[#333]"  data-aos="fade-up">How to get Empanelled with National Insurance?</h3>
          <p className="max-w-[900px] text-[#444] text-base text-center pb-4"  data-aos="fade-up">
            It is possible for you to apply for National Insurance by yourself or with our help. We are one of the top consultants for National Insurance. Here are the steps:
          </p>
          <ul className="list-disc text-left text-[#444] max-w-[800px] pl-6 pb-4"  data-aos="fade-up">
            <li>Fill application form available at National Insurance website</li>
            <li>Upload the required empanelment documents</li>
            <li>Respond to the clarification emails from National Insurance</li>
            <li>Get the hospital inspection done (if mandated)</li>
            <li>Get final confirmation from National Insurance</li>
          </ul>
          <p className="max-w-[900px] text-[#444] text-base text-center pb-[120px]" data-aos="fade-up">
            Taking care of the above steps can be quite time-consuming for some doctors, hospitals, and clinics. That’s where we can help. Simply sign up with us, and we’ll handle everything for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSeven;

