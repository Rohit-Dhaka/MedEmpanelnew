import React from "react";
import Certificate from '../assets/img/Certificate_page-0001.webp'
import Certificate2 from '../assets/img/HR Certificate.pdf-2_page-0001.jpg'
import Dirimg from '../assets/img/Dirimg.png'

const Aboutas = () => {
  return (
    <section>
      <div className="container">
        <div className=" pt-10 lg:pt-36 pb-10  ">
          
            <h2 className="text-3xl lg:text-4xl text-center font-bold leading-[52px] text-black font-sans flex items-center justify-center gap-2" data-aos="fade-up">
                <span className="w-16 h-1 bg-[#9064EE] block"></span>
              About <span className="text-[#9064EE]">Us</span>
                <span className="w-16 h-1 bg-[#9064EE] block"></span>
            </h2>
            <div className="flex justify-center">
            <p className="text-[16px] text-[#4C4C4C] pt-3 leading-[24px]  text-justify font-Plus " data-aos="fade-up">
              Medempanel is one of the best leading medical consultancy solution
              engaged in empanelment in all over india, here we are effective
              link between the hospitals and empanelment of all the types With a
              strong focus on Ayushman, TPA coordination, NABH accreditation
              consultancy, healthcare compliance, and hospital administration
              support, we act as a bridge between healthcare providers,
              patients, and regulatory bodies—ensuring smooth, efficient, and
              ethical operations. Our expert team brings years of industry
              experience in navigating complex healthcare systems, documentation
              processes, accreditation standards, and patient-centric services.
              Whether you're setting up a new hospital or streamlining existing
              operations, we offer customized solutions tailored to your
              needs.Currently we have worked in 100 + hospitals
            </p>
            </div>
          </div>
        
        <div className="flex flex-row flex-wrap-reverse mx-[-12px]   items-center lg:pb-[180px] sm:pb-[100px] pb-16 ">
          <div className="lg:w-7/12 w-full px-3" data-aos="fade-up">
              <strong className="font-Plus text-[25px] font-bold ">Director:- </strong>
              
          
            <p className="text-[16px] text-[#4C4C4C] pt-3 leading-6 text-justify  font-Plus max-lg:pt-[60px] tracking-[1px] "><span className=" font-bold">Mr Ankit Bansal</span> is working as a founder and director of the
              company having 2+ year of experience in the consultancy company
              and Hospitals. </p>
            <p className="text-[16px] text-[#4C4C4C] pt-3 leading-6 text-justify  font-Plus max-lg:pt-6 tracking-[1px] ">He has completed his MBA in human resource and
              hospital administration from Maharishi Markandeshwar University,
              situated in Mullana (Ambala). He has expertise in Auditing, like
              Ayushman Empanelment, NABH Accredidaition Management in
              superspeciality Hospitals .</p>
            <p className="text-[16px] text-[#4C4C4C] pt-3 leading-6 text-justify  font-Plus max-lg:pt-6 tracking-[1px] "> He has a team of extremely talented
              sincere devoted And efficient professional specialized in
              Recommending suitable steps for hospital benifits. </p>
            <p className="text-[16px] text-[#4C4C4C] pt-3 leading-6 text-justify  font-Plus max-lg:pt-6tracking-[1px] "> He believes in
              building Long-Term Relationships with Our Clients, based on the
              Best Professional’s Ethics & Providing Quality Services –
              Economical and Efficient.</p>
          </div>
          <div className="lg:w-5/12 w-full px-3 " data-aos="fade-up">
            <img src={Dirimg} alt="img" className="w-full" />
          </div>
        </div>
        
        <div className=" lg:pb-[160px] sm:pb-[100px] pb-16 flex justify-center" data-aos="fade-up">
            <div className="sm:w-[80%] ">
                <img src={Certificate} alt="" className="w-full sm:h-[80vh] rounded-2xl" />
            </div>
        </div>
        <div className=" lg:pb-[160px] sm:pb-[100px] pb-16 flex justify-center" data-aos="fade-up">
            <div className="sm:w-[80%] ">
                <img src={Certificate2} alt="" className="w-full sm:h-[80vh] rounded-2xl" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutas;
