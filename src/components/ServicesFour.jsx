import React from 'react';
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';
import Tpa from '../assets/img/tpa-logo.jpg';

const ServicesFour = () => {
  return (
    <section className="relative bg-white px-4 py-20">
      <img src={Ellipes21} alt="Background Ellipse Right" className="absolute right-0 -top-[20%] z-0" />
      <img src={Ellipes22} alt="Background Ellipse Left" className="absolute left-0 top-[20%] z-0" />

      <div className="container mx-auto relative z-10 max-w-5xl">
        <div className="text-center">
          <h2 className="sm:text-fs3xl text-[38px] max-sm:leading-[52px] font-bold font-Plus mb-6"  data-aos="fade-up">
            Raksha TPA Hospital Empanelment:
            <span className="text-[#9064EE]"> Partner with Trusted TPAs</span>
          </h2>

          <div className="flex justify-center mb-6"  data-aos="fade-up">
            <img src={Tpa} alt="Raksha TPA Logo" className="sm:w-3/4 md:w-1/2 rounded-lg shadow-lg" />
          </div>

          <p className="text-lg text-[#323232] mb-6"  data-aos="fade-up">
            Raksha TPA Hospital Empanelment refers to the process of a hospital becoming affiliated with Raksha TPA and being recognized as part of their network of empaneled hospitals. Empaneled hospitals can offer Raksha TPA services to their patients, providing them with comprehensive health insurance coverage and improved financial protection.
          </p>

          <p className="text-[#323232] mb-6"  data-aos="fade-up">
            To become empaneled with Raksha TPA, a hospital must meet certain criteria such as accreditation, quality standards, adequate infrastructure, and compliance with Raksha’s guidelines. Once empaneled, a hospital can benefit from:
          </p>

          <ul className="text-left list-disc list-inside text-[#323232] mb-6 max-w-3xl mx-auto"  data-aos="fade-up">
            <li>Increased patient reach through insurance coverage</li>
            <li>Cashless and paperless treatment for insured patients</li>
            <li>Timely and hassle-free claim settlements</li>
            <li>Better patient satisfaction and trust</li>
            <li>Commission-based earning potential</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#9064EE] mb-2"  data-aos="fade-up">About Raksha TPA</h3>
          <p className="text-[#323232] mb-6"  data-aos="fade-up">
            Raksha TPA is a leading Third-Party Administrator (TPA) in India, providing services like:
          </p>

          <ul className="text-left list-disc list-inside text-[#323232] mb-6 max-w-3xl mx-auto"  data-aos="fade-up">
            <li><strong>Claims Management:</strong> Handles health insurance claims efficiently</li>
            <li><strong>Network Management:</strong> Maintains a network of hospitals and clinics</li>
            <li><strong>Wellness Programs:</strong> Offers health check-ups and preventive care</li>
            <li><strong>Customer Service:</strong> Helps patients with claims and queries</li>
            <li><strong>Data Analytics:</strong> Improves efficiency and provides insights to insurers</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#9064EE] mb-2"  data-aos="fade-up">Apply for Empanelment Online</h3>
          <p className="text-[#323232] mb-6">
            You can apply for Raksha TPA on your own or take assistance from a consultant. Here's the step-by-step process:
          </p>

          <ol className="text-left list-decimal list-inside text-[#323232] mb-6 max-w-3xl mx-auto"  data-aos="fade-up">
            <li>Fill the application form on Raksha TPA’s website</li>
            <li>Upload the required documents</li>
            <li>Respond to any clarification emails</li>
            <li>Undergo hospital inspection if required</li>
            <li>Receive final approval from Raksha TPA</li>
          </ol>

          <p className="text-[#323232] mb-6"  data-aos="fade-up">
            Handling these steps alone can be time-consuming — let our experts manage everything for you.
          </p>

          <button className="bg-[#9064EE] hover:bg-[#7a4be6] text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow-md">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesFour;
