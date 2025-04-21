import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Whatsapp } from "../common/icon";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
  const [show, setShow] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
    setShow(false)
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [show]);    

  const handlelink = () => {
    setShow(false)
  }
      

  return (
    <header className="  z-50 top-0  relative">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
          <div className="">
            <h5 className=" text-[26px] text-[#074ba5] font-bold tracking-[1.5px]">MedEmpanel</h5>
            <h6 className=" text-[8px] font-semibold text-[#d30785] mt-[-6px]">HEAlTHCARE & EMPANELMENT CONSULTANCY</h6>
            </div>
          </Link>

          
          <div
            className={`${              
              show ? "shownav" : "hidenav"
            } flex max-lg:absolute max-lg:w-full  max-lg:h-screen max-lg:top-0 max-lg:flex-col max-lg:bg-white max-lg:text-white max-lg:z-10 max-lg:justify-center max-lg:items-center max-lg:transition-all max-lg:right-0 max-lg:duration-300 lg:gap-[215px] items-center`}
          >
            <ul className="flex lg:gap-8 gap-4 max-lg:flex-col max-lg:items-center">
              <li>
                <NavLink
                  to="/"
                  onClick={handlelink}
                  className={({ isActive }) => `block  duration-200 ${isActive ? "text-[#9561ED]" : "text-gray-700"}  hover:bg-gray-50 lg:hover:bg-transparent   lg:p-0`}
                  

                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutas"
                  onClick={handlelink}
                  className={({ isActive }) =>
                    `block  duration-200 ${
                      isActive ? "text-[#9561ED]" : "text-gray-700"
                    }  `
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <div
                  className="lg:relative inline-block text-left"
                  ref={dropdownRef}
                >
                  <button
                    onClick={toggleDropdown}
                    className="  hover:text-purple-600 text-gray-700  lg:hover:bg-transparent   lg:p-0 flex  items-center"
                  >
                    Services
                    <svg
                      class="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="lg:absolute lg:left-0  lg:mt-2 w-80  lg:bg-white rounded-md lg:shadow-lg z-50 py-2 max-lg:mx-[-12px] max-lg:flex max-lg:flex-col max-lg:gap-2 duration-300 ease-linear">
                      <NavLink
                        to="/servicesOne"
                        
                        className="block lg:py-1 px-3 text-black hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        Ayushman empanelment
                      </NavLink>
                      <NavLink
                        to="/servicesTwo"
                        className="block lg:py-1 px-3 text-black hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        Entry level NABH
                      </NavLink>
                      <NavLink
                        to="/servicesThree"
                        className="block lg:py-1 px-3 text-black hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        Full NABH
                      </NavLink>
                      <NavLink
                        to="/servicesFour"
                        className="block lg:py-1 px-3 text-black hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        TPA empanelment
                        
                      </NavLink>
                      <NavLink
                        to="/servicesFive"
                        className="block lg:py-1 px-3 text-black hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        NABL
                        
                      </NavLink>
                      <NavLink
                        to="/servicesSix"
                        className="block lg:py-1 px-3 text-black hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        
                        Hospital Software
                        
                      </NavLink>
                      <NavLink
                        to="/servicesSeven"
                        className="block lg:py-1 px-3 text-black hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        Insurance empanelment
                        
                      </NavLink>
                      <NavLink
                        to="/servicesEight"
                        className="block lg:py-1 px-3 text-black hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        Rohini registration
                      </NavLink>
                      <NavLink
                        to="/servicesNine"
                        className="block lg:py-1 px-3 text-black hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        Staffing & Hospital credential setup info
                      </NavLink>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <NavLink
                  to="/resources"
                  onClick={handlelink}
                  className={({ isActive }) => `block  duration-200 ${isActive ? "text-[#9561ED]" : "text-gray-700"}  hover:bg-gray-50 lg:hover:bg-transparent   lg:p-0`}
                  

                >
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block  duration-200 ${
                      isActive ? "text-[#9561ED]" : "text-gray-700"
                    }  hover:bg-gray-50 lg:hover:bg-transparent  lg:p-0`
                  }
                  onClick={handleClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Contact Us Button */}
            <button className="mt-6 lg:mt-0 bg-[#9561ED] text-white font-bold px-8 py-4 rounded-full font-Plus hover:bg-[#7c4ddb] transition" onClick={handlelink}>
            <a href="tel:+8950960627" class="text-white text-md leading-[24px] fw-normal font-Plus flex gap-2 items-center"> <Whatsapp/> +91 8950960627</a>
            </button>
          </div>

          {/* Hamburger Menu */}
          <div
            className="lg:hidden z-20 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <span
              className={`block w-[30px] h-[3px] bg-[#9561ED] transition-all ease-linear rounded-md ${
                show ? "rotate-45 translate-y-[9px]" : ""
              }`}
            ></span>
            <span
              className={`block w-[30px] h-[3px] bg-[#9561ED] my-[6px] transition-all ease-linear rounded-md ${
                show ? " -translate-x-[50px] duration-300 opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-[30px] h-[3px] bg-[#9561ED] transition-all ease-linear rounded-md ${
                show ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            ></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
