import React from "react";
import Ellipes31 from "../assets/img/Ellipes31.svg";
import Ellipes32 from "../assets/img/Ellipse32.svg";
import { Link } from "react-router-dom";
import PMJAY from "../assets/img/PMJAY-logo.png";
import Enterlevel from "../assets/img/Enterlevel.jpeg";
import Nabhlogo from "../assets/img/Nabhlogo.png";
import Tpa from '../assets/img/tpa-logo.jpg'
import RohiniLogo from '../assets/img/RohiniLogo.jpg'
import Medical from '../assets/img/Medical.jpeg'
import Hrservers from '../assets/img/Hrservers.jpeg'
import Nabl from '../assets/img/Nabl.jpeg'
import Sofware from '../assets/img/sofware.png'
const Services = () => {
  return (
    <section class="bg-[#EFEFEF] relative overflow-hidden ">
      {/* <img src={Ellipes31} alt="" class=" absolute z-0  right-0 top-0 puls" /> */}

      {/* <img src={Ellipes32} alt="" class=" absolute z-0 bottom-0 left-0 puls" /> */}

      <div class="container z-2">
        <h2 class=" text-fs2xl font-bold  leading-[52px] lg:pt-[119px] max-sm:py-16 pt-5 md:pt-[80px] text-center  color-change1 z-2 font-Plus">
          Our
          <span class="text-[#9064EE]  color-change2"> Services</span>
        </h2>

        <div class="flex flex-row flex-wrap mx-[-12px] lg:pt-[52px] md:pt-[40px] pt-4   lg:pb-[122px] pb-5 md:pb-[80px]">
          <div class="lg:w-4/12 sm:w-6/12 px-3 w-full">
            <Link to="/servicesOne">
              <div class="card h-full pb-[44px] pt-[20px] px-[20px] border-[1px] border-solid border-gray-600 bg-[#EFEFEF]  duration-300 ease-linear  rounded-[16px] h-100 hover:border-transparent hover:shadow-[0px_9px_50px_0px_#0000001F] group">
                <div class="min-box flex items-center justify-center  rounded-full w-[72px] h-[72px] bg-[#E0D9EF] transition-all duration-[900ms] ease-linear group-hover:scale-105 overflow-hidden  ">
                  <img src={PMJAY} alt="" />
                </div>
                <h5 class="text-black text-xl font-bold  pt-5 pb-2 leading-[33px] font-Plus ">
                  Ayushman
                </h5>
                <h6 class="fw-normal leading-[24px] text-md  text-[#4C4C4C] font-Plus">
                  Ayushman Empanelment: Partner with Us to Provide Quality
                  Healthcare
                </h6>
              </div>
            </Link>
          </div>
          <div class="lg:w-4/12 sm:w-6/12 px-3 w-full md:pt-0 pt-6">
            <Link to="/servicesTwo">
              <div class="card h-full pb-[44px] pt-[20px] px-[20px] border-[1px] border-solid border-gray-600 bg-[#EFEFEF]  duration-300 ease-linear  rounded-[16px] h-100 hover:border-transparent hover:shadow-[0px_9px_50px_0px_#0000001F] group">
                <div class="min-box flex items-center justify-center  rounded-full w-[72px] h-[72px] bg-[#E0D9EF] transition-all duration-[900ms] ease-linear group-hover:scale-105 overflow-hidden ">
                  <img src={Enterlevel} alt="" />
                </div>
                <h5 class="text-black text-xl font-bold  pt-5 pb-2 leading-[33px] font-Plus ">
                  Entry level nabh
                </h5>
                <h6 class="fw-normal leading-[24px] text-md  text-[#4C4C4C] font-Plus">
                  Entry-Level NABH Certification: Elevate Your Healthcare
                  Standards
                </h6>
              </div>
            </Link>
          </div>
          <div class="lg:w-4/12 sm:w-6/12 px-3 w-full lg:pt-0 pt-6">
            <Link to="/servicesThree">
              <div class="card h-full pb-[44px] pt-[20px] px-[20px] border-[1px] border-solid border-gray-600 bg-[#EFEFEF]  duration-300 ease-linear  rounded-[16px] h-100 hover:border-transparent hover:shadow-[0px_9px_50px_0px_#0000001F] group">
                <div class="min-box flex items-center justify-center  rounded-full w-[72px] h-[72px] bg-[#E0D9EF] transition-all duration-[900ms] ease-linear  group-hover:scale-105 overflow-hidden ">
                  <img src={Nabhlogo} alt="" />
                </div>
                <h5 class="text-black text-xl font-bold  pt-5 pb-2 leading-[33px] font-Plus ">
                  Healthcare
                </h5>
                <h6 class="fw-normal leading-[24px] text-md  text-[#4C4C4C] font-Plus">
                  we are on a mission to revolutionize the field of Healthcare
                  through cutting-edge innovation.
                </h6>
              </div>
            </Link>
          </div>
          <div class="lg:w-4/12 sm:w-6/12 px-3 w-full pt-6">
            <Link to="/servicesFour">
              <div class="card h-full pb-[44px] pt-[20px] px-[20px] border-[1px] border-solid border-gray-600 bg-[#EFEFEF]  duration-300 ease-linear  rounded-[16px] h-100 hover:border-transparent hover:shadow-[0px_9px_50px_0px_#0000001F] group">
                <div class="min-box flex items-center justify-center  rounded-full w-[72px] h-[72px] bg-[#E0D9EF] transition-all duration-[900ms] ease-linear group-hover:scale-105 overflow-hidden  ">
                  <img src={Tpa} alt="" />
                </div>
                <h5 class="text-black text-xl font-bold  pt-5 pb-2 leading-[33px] font-Plus ">
                Tpa 
                </h5>
                <h6 class="fw-normal leading-[24px] text-md  text-[#4C4C4C] font-Plus">
                TPA Empanelment: Partner with Trusted Third-Party Administrators
                </h6>
              </div>
            </Link>
          </div>
          <div class="lg:w-4/12 sm:w-6/12 px-3 w-full pt-6">
            <Link to="/servicesFive">
              <div class="card h-full pb-[44px] pt-[20px] px-[20px] border-[1px] border-solid border-gray-600 bg-[#EFEFEF]  duration-300 ease-linear  rounded-[16px] h-100 hover:border-transparent hover:shadow-[0px_9px_50px_0px_#0000001F] group">
                <div class="min-box flex items-center justify-center  rounded-full w-[72px] h-[72px] bg-[#E0D9EF] transition-all duration-[900ms] ease-linear group-hover:scale-105 overflow-hidden ">
                  <img src={Nabl} alt="" />
                </div>
                <h5 class="text-black text-xl font-bold  pt-5 pb-2 leading-[33px] font-Plus ">
                Nabl
                </h5>
                <h6 class="fw-normal leading-[24px] text-md  text-[#4C4C4C] font-Plus">
                NABL Accreditation: Ensuring Excellence in Laboratory Standards
                </h6>
              </div>
            </Link>
          </div>
          <div class="lg:w-4/12 sm:w-6/12 px-3 w-full pt-6">
            <Link to="/servicesSix">
              <div class="card h-full pb-[44px] pt-[20px] px-[20px] border-[1px] border-solid border-gray-600 bg-[#EFEFEF]  duration-300 ease-linear  rounded-[16px] h-100 hover:border-transparent hover:shadow-[0px_9px_50px_0px_#0000001F] group">
                <div class="min-box flex items-center justify-center  rounded-full w-[72px] h-[72px] bg-[#E0D9EF] transition-all duration-[900ms] ease-linear  group-hover:scale-105 overflow-hidden ">
                  <img src={Sofware} alt="" />
                  
                </div>
                <h5 class="text-black text-xl font-bold  pt-5 pb-2 leading-[33px] font-Plus ">
                Hospital software
                </h5>
                <h6 class="fw-normal leading-[24px] text-md  text-[#4C4C4C] font-Plus">
                Advanced Hospital Software: Streamline Your Healthcare Operations
                </h6>
              </div>
            </Link>
          </div>
          <div class="lg:w-4/12 sm:w-6/12 px-3 w-full pt-6">
            <Link to="/servicesSeven">
              <div class="card h-full  pb-[44px] pt-[20px] px-[20px] border-[1px] border-solid border-gray-600 bg-[#EFEFEF]  duration-300 ease-linear  rounded-[16px] h-100 hover:border-transparent hover:shadow-[0px_9px_50px_0px_#0000001F] group">
                <div class="min-box flex items-center justify-center  rounded-full w-[72px] h-[72px] bg-[#E0D9EF] transition-all duration-[900ms] ease-linear group-hover:scale-105 overflow-hidden  ">
                  <img src={Medical} alt="" />
                </div>
                <h5 class="text-black text-xl font-bold  pt-5 pb-2 leading-[33px] font-Plus ">
                Insurance empanelment
                </h5>
                <h6 class="fw-normal leading-[24px] text-md  text-[#4C4C4C] font-Plus">
                Insurance Empanelment: Expand Your Healthcare Reach
                </h6>
              </div>
            </Link>
          </div>
          <div class="lg:w-4/12 sm:w-6/12 px-3 w-full pt-6">
            <Link to="/servicesEight">
              <div class="card h-full  pb-[44px] pt-[20px] px-[20px] border-[1px] border-solid border-gray-600 bg-[#EFEFEF]  duration-300 ease-linear  rounded-[16px] h-100 hover:border-transparent hover:shadow-[0px_9px_50px_0px_#0000001F] group">
                <div class="min-box flex items-center justify-center  rounded-full w-[72px] h-[72px] bg-[#E0D9EF] transition-all duration-[900ms] ease-linear group-hover:scale-105 overflow-hidden ">
                  <img src={RohiniLogo} alt="" />
                </div>
                <h5 class="text-black text-xl font-bold  pt-5 pb-2 leading-[33px] font-Plus ">
                Rohini registration
                </h5>
                <h6 class="fw-normal leading-[24px] text-md  text-[#4C4C4C] font-Plus">
                Rohini Registration: Simplify Your Healthcare Facility Registration
                </h6>
              </div>
            </Link>
          </div>
          <div class="lg:w-4/12 sm:w-6/12 px-3 w-full pt-6">
            <Link to="/servicesNine">
              <div class="card h-full pb-[44px] pt-[20px] px-[20px] border-[1px] border-solid border-gray-600 bg-[#EFEFEF]  duration-300 ease-linear  rounded-[16px] h-100 hover:border-transparent hover:shadow-[0px_9px_50px_0px_#0000001F] group">
                <div class="min-box flex items-center justify-center  rounded-full w-[72px] h-[72px] bg-[#E0D9EF] transition-all duration-[900ms] ease-linear  group-hover:scale-105 overflow-hidden ">
                  <img src={Hrservers} alt="" />
                </div>
                <h5 class="text-black text-xl font-bold  pt-5 pb-2 leading-[33px] font-Plus ">
                Staffing and hospital credientail information
                </h5>
                <h6 class="fw-normal leading-[24px] text-md  text-[#4C4C4C] font-Plus">
                Staffing & Hospital Credential Setup: Building a Competent Healthcare Team

                </h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
