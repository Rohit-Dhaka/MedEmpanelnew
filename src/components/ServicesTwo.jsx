import React from "react";
import Ellipes21 from '../assets/img/Ellipes21.svg';
import Ellipes22 from '../assets/img/Ellipes22.svg';

import Enterlevel from '../assets/img/Enterlevel.webp';

const ServicesTwo = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      
      <img src={Ellipes21} alt="ellipes" className="absolute right-0 -top-[10%] w-40 opacity-70" />
      <img src={Ellipes22} alt="ellipes" className="absolute left-0 top-[15%] w-40 opacity-70" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="text-center mb-12">
          <h2 className="sm:text-fs3xl text-[38px] max-sm:leading-[52px] font-semibold font-Plus text-gray-900 leading-tight max-w-4xl mx-auto"  data-aos="fade-up">
            Entry-Level NABH Certification: Elevate{" "}
            <span className="text-[#9064EE]">Your Healthcare Standards</span>
          </h2>
        </div>

        
        <div className="flex justify-center mb-10"  data-aos="fade-up">
          <img src={Enterlevel} alt="Entry Level NABH" className="w-full sm:max-w-xl rounded-xl shadow-xl" />
        </div>

        
        <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center"  data-aos="fade-up">
          Achieve excellence in healthcare with Entry-Level NABH Certification, designed for hospitals and healthcare facilities aiming to enhance patient safety and quality of care. This certification serves as the first step towards full NABH accreditation, helping your facility adopt best practices and improve service delivery.
        </p>

        
        <div className="grid grid-cols-1 gap-12 text-left text-gray-800"  data-aos="fade-up">
          
          <div>
            <h3 className="text-2xl font-bold text-[#9064EE] mb-3">Overview</h3>
            <p>
              NABH (National Accreditation Board for Hospitals & Healthcare Providers) is part of the Quality Council of India. It operates accreditation programs to enhance healthcare quality by setting benchmarks and recognizing hospitals that meet them.
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-[#9064EE] mb-3">NABH Accreditation Benefits</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Benchmark quality standards against international best practices</li>
              <li>Improves patient safety and satisfaction</li>
              <li>Minimizes insurance claim denials</li>
              <li>Enhances transparency in pricing and hospital policies</li>
              <li>Attracts both domestic and international patients</li>
              <li>Improves efficiency and resource utilization</li>
              <li>May qualify for government incentives</li>
            </ul>
          </div>

          {/* Procedure */}
          <div>
            <h3 className="text-2xl font-bold text-[#9064EE] mb-3">NABH Accreditation Procedure</h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Submit application with documents and declarations</li>
              <li>Application review and issuance of tracking reference</li>
              <li>Pre-assessment by NABH inspectors</li>
              <li>Final assessment after improvements</li>
              <li>Accreditation valid for 2 years</li>
              <li>Reassessment must be done 6 months before expiry</li>
            </ol>
          </div>

          {/* Document Requirements */}
          <div>
            <h3 className="text-2xl font-bold text-[#9064EE] mb-3">NABH Document Requirements</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hospital registration certificate and photographs</li>
              <li>Staff details and services list</li>
              <li>Bio-medical waste certificate</li>
              <li>Fire and Lift NOCs</li>
              <li>Standard Operating Procedures (SOPs)</li>
            </ul>
          </div>

          {/* Infrastructure Requirements */}
          <div>
            <h3 className="text-2xl font-bold text-[#9064EE] mb-3">NABH Infrastructure Requirements</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Disabled-friendly facilities</li>
              <li>Modular Operation Theaters (OT)</li>
              <li>CSSD and Laminar flow systems</li>
              <li>Dedicated biomedical waste rooms</li>
            </ul>
          </div>

          {/* Mantra Consulting Help */}
          <div>
            <h3 className="text-2xl font-bold text-[#9064EE] mb-3">How Mantra Consulting Helps</h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Fill out the NABH consultation form</li>
              <li>Get in touch with our NABH quality consultants</li>
              <li>We assign account manager and quality team</li>
              <li>We guide in implementation of NABH standards</li>
              <li>Gap analysis and staff training</li>
              <li>Final assessment preparation and certification</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTwo;

