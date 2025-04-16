import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Whatsapp } from "../common/icon";

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

  // Close dropdown if clicked outside
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
    <header className="  z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            Logo
          </Link>

          {/* Nav Menu */}
          <div
            className={`${
              show ? "right-0" : "right-[-100%]"
            } flex max-lg:absolute max-lg:w-full max-lg:h-screen max-lg:top-0 max-lg:flex-col max-lg:bg-gray-800 max-lg:text-white max-lg:z-10 max-lg:justify-center max-lg:items-center max-lg:transition-all max-lg:duration-300 lg:gap-[215px] items-center`}
          >
            <ul className="flex gap-8 max-lg:flex-col max-lg:items-center">
              <li>
                <NavLink
                  to="/"
                  onClick={handlelink}
                  className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#9561ED]" : "text-gray-700"}  hover:bg-gray-50 lg:hover:bg-transparent   lg:p-0`}
                  

                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={handlelink}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#9561ED]" : "text-gray-700"
                    }  hover:bg-gray-50 lg:hover:bg-transparent   lg:p-0`
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
                    <div className="lg:absolute lg:left-0 w-80 mt-2  lg:bg-white rounded-md shadow-lg z-50 py-5">
                      <NavLink
                        to="/servicesOne"
                        
                        className="block py-1 px-3 hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        Ayushman empanelment
                      </NavLink>
                      <NavLink
                        to="/servicesTwo"
                        className="block py-1 px-3 hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        Entry level NABH
                      </NavLink>
                      <NavLink
                        to="/servicesThree"
                        className="block py-1 px-3 hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        Full NABH
                      </NavLink>
                      <NavLink
                        to="/servicesFour"
                        className="block py-1 px-3 hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        Insurance empanelment
                      </NavLink>
                      <NavLink
                        to="/servicesFive"
                        className="block py-1 px-3 hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        TPA empanelment
                      </NavLink>
                      <NavLink
                        to="/servicesSix"
                        className="block py-1 px-3 hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        NABL
                      </NavLink>
                      <NavLink
                        to="/servicesSeven"
                        className="block py-1 px-3 hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        Hospital Software
                      </NavLink>
                      <NavLink
                        to="/servicesEight"
                        className="block py-1 px-3 hover:bg-purple-200 duration-300"
                        onClick={handleClick}
                      >
                        Rohini registration
                      </NavLink>
                      <NavLink
                        to="/servicesNine"
                        className="block py-1 px-3 hover:bg-purple-200 duration-300"
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
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#9561ED]" : "text-gray-700"
                    }  hover:bg-gray-50 lg:hover:bg-transparent  lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Contact Us Button */}
            <button className="mt-6 lg:mt-0 bg-[#9561ED] text-white font-bold px-8 py-4 rounded-full font-Plus hover:bg-[#7c4ddb] transition" onClick={handlelink}>
            <a href="tel:+8950960627" class="text-white text-md leading-[24px] fw-normal font-Plus flex gap-2 items-center"> <Whatsapp/> +8950960627</a>
            </button>
          </div>

          {/* Hamburger Menu */}
          <div
            className="lg:hidden z-20 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <span
              className={`block w-[30px] h-[3px] bg-[#9561ED] transition-all ease-linear ${
                show ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-[30px] h-[3px] bg-[#9561ED] my-[6px] transition-all ease-linear ${
                show ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-[30px] h-[3px] bg-[#9561ED] transition-all ease-linear ${
                show ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
