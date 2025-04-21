import React from "react";
import { EmailIcon, PhoneIcon } from "../common/icon";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer class="bg-black overflow-hidden">
      <div class="container">
        <div class="flex flex-row flex-wrap mx-[-12px] md:pt-[91px]  lg:pb-[153px] pt-5 pb-4 pb-md-5">
          <div class="lg:w-4/12 w-full z-1  px-3">
            {/* <img src="./assets/img/footerlogo.svg" alt="logo-image"> */}
            <a href="" className="text-white">
              <div className="">
                <h5 className=" text-[26px] text-[#074ba5] font-bold tracking-[1.5px]">
                  MedEmpanel
                </h5>
                <h6 className=" text-[8px] font-semibold text-[#d30785] mt-[-6px]">
                  HEAlTHCARE & EMPANELMENT CONSULTANCY
                </h6>
              </div>
            </a>
            <h6 class="fw-normal leading-[24px] text-white opacity-75 pt-3  font-Plus">
              Committed to improving your health and well-being with expert care
              and trusted resources. Your health is our priority—providing
              reliable solutions for a healthier, happier life.
            </h6>
            <div class="flex gap-3 pt-4">
              <a
                href="https://www.instagram.com/medempanel?igsh=cW14c29zdDZxOGJx"
                target="_blank"
                class=" hover:shadow-media duration-300 ease-linear hover:scale-105  rounded-full"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    fill="white"
                    fill-opacity="0.16"
                  />
                  <path
                    d="M16.9254 6.65345C17.5821 6.65093 18.2389 6.65753 18.8954 6.67325L19.07 6.67955C19.2716 6.68675 19.4705 6.69575 19.7108 6.70655C20.6684 6.75155 21.3217 6.90274 21.895 7.12504C22.489 7.35363 22.9894 7.66322 23.4898 8.1636C23.9473 8.61323 24.3014 9.15712 24.5274 9.75745C24.7497 10.3307 24.9009 10.985 24.9459 11.9426C24.9567 12.182 24.9657 12.3818 24.9729 12.5833L24.9783 12.7579C24.9943 13.4142 25.0012 14.0706 24.999 14.7271L24.9999 15.3985V16.5774C25.0021 17.2342 24.9952 17.8909 24.9792 18.5474L24.9738 18.722C24.9666 18.9236 24.9576 19.1225 24.9468 19.3628C24.9018 20.3204 24.7488 20.9738 24.5274 21.547C24.3021 22.148 23.9479 22.6923 23.4898 23.1418C23.0397 23.5993 22.4956 23.9533 21.895 24.1795C21.3217 24.4017 20.6684 24.5529 19.7108 24.5979C19.4705 24.6087 19.2716 24.6177 19.07 24.6249L18.8954 24.6303C18.2389 24.6463 17.5821 24.6532 16.9254 24.651L16.254 24.6519H15.0759C14.4192 24.6542 13.7625 24.6473 13.1059 24.6312L12.9313 24.6258C12.7177 24.6181 12.5041 24.6091 12.2905 24.5988C11.333 24.5538 10.6796 24.4008 10.1054 24.1795C9.50485 23.9539 8.96087 23.5997 8.51157 23.1418C8.05352 22.6921 7.6991 22.1478 7.473 21.547C7.25071 20.9738 7.09952 20.3204 7.05452 19.3628C7.04449 19.1493 7.03549 18.9357 7.02752 18.722L7.02302 18.5474C7.00643 17.8909 6.99893 17.2342 7.00052 16.5774V14.7271C6.99801 14.0706 7.00461 13.4142 7.02032 12.7579L7.02662 12.5833C7.03382 12.3818 7.04282 12.182 7.05362 11.9426C7.09862 10.9841 7.24981 10.3316 7.4721 9.75745C7.69833 9.15682 8.05345 8.61308 8.51247 8.1645C8.96146 7.70619 9.5051 7.35144 10.1054 7.12504C10.6796 6.90274 11.3321 6.75155 12.2905 6.70655L12.9313 6.67955L13.1059 6.67505C13.7622 6.65847 14.4186 6.65097 15.075 6.65255L16.9254 6.65345ZM16.0002 11.1533C15.404 11.1449 14.812 11.255 14.2588 11.4773C13.7055 11.6997 13.2019 12.0298 12.7773 12.4484C12.3527 12.867 12.0155 13.3659 11.7854 13.916C11.5552 14.4661 11.4367 15.0564 11.4367 15.6527C11.4367 16.249 11.5552 16.8393 11.7854 17.3894C12.0155 17.9395 12.3527 18.4383 12.7773 18.857C13.2019 19.2756 13.7055 19.6057 14.2588 19.828C14.812 20.0504 15.404 20.1605 16.0002 20.1521C17.1936 20.1521 18.3382 19.678 19.1821 18.8341C20.026 17.9902 20.5001 16.8457 20.5001 15.6522C20.5001 14.4588 20.026 13.3143 19.1821 12.4704C18.3382 11.6265 17.1936 11.1533 16.0002 11.1533ZM16.0002 12.9532C16.3589 12.9466 16.7152 13.0116 17.0485 13.1442C17.3818 13.2769 17.6853 13.4746 17.9412 13.7259C18.1972 13.9772 18.4006 14.2769 18.5394 14.6077C18.6783 14.9384 18.7498 15.2935 18.7499 15.6522C18.7499 16.0109 18.6785 16.3661 18.5398 16.6969C18.401 17.0276 18.1978 17.3275 17.9419 17.5788C17.686 17.8302 17.3826 18.028 17.0493 18.1608C16.7161 18.2936 16.3598 18.3586 16.0011 18.3522C15.2851 18.3522 14.5983 18.0677 14.092 17.5614C13.5857 17.055 13.3012 16.3683 13.3012 15.6522C13.3012 14.9362 13.5857 14.2495 14.092 13.7431C14.5983 13.2368 15.2851 12.9523 16.0011 12.9523L16.0002 12.9532ZM20.7251 9.80334C20.4347 9.81496 20.1601 9.93847 19.9588 10.148C19.7575 10.3575 19.6451 10.6368 19.6451 10.9274C19.6451 11.218 19.7575 11.4973 19.9588 11.7068C20.1601 11.9163 20.4347 12.0398 20.7251 12.0515C21.0234 12.0515 21.3096 11.9329 21.5205 11.722C21.7315 11.511 21.85 11.2249 21.85 10.9265C21.85 10.6281 21.7315 10.342 21.5205 10.131C21.3096 9.92007 21.0234 9.80154 20.7251 9.80154V9.80334Z"
                    fill="url(#paint0_linear_40432_2809)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_40432_2809"
                      x1="9.05352"
                      y1="0.733904"
                      x2="65.1691"
                      y2="49.3014"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="1" stop-color="#A854E9" />
                      <stop offset="1" stop-color="#4F91FC" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/MedEmpanel/61574535964668/?rdid=wMi0Iz0NYa0c3TX3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15p2KXqEPM%2F"
                target="_blank"
                class=" hover:shadow-media duration-300 ease-linear hover:scale-105  rounded-full"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    fill="white"
                    fill-opacity="0.16"
                  />
                  <path
                    d="M18 17.1523H20.5L21.5 13.1523H18V11.1523C18 10.1223 18 9.15234 20 9.15234H21.5V5.79234C21.174 5.74934 19.943 5.65234 18.643 5.65234C15.928 5.65234 14 7.30934 14 10.3523V13.1523H11V17.1523H14V25.6523H18V17.1523Z"
                    fill="url(#paint0_linear_40432_2811)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_40432_2811"
                      x1="12.1979"
                      y1="-0.923701"
                      x2="59.6536"
                      y2="20.639"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="1" stop-color="#A854E9" />
                      <stop offset="1" stop-color="#4F91FC" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
          <div class="lg:w-2/12 sm:w-6/12 w-full pt-4 lg:pt-0 flex justify-start   lg:justify-center px-3">
            <ul class="flex gap-2 flex-col p-0 ">
              <li class="text-white font-bold text-md leading-[24px] font-Plus">
                Services
              </li>
              <li>
                <NavLink to="/servicesOne" className="block text-white ">
                  Ayushman empanelment{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicesTwo" className="block text-white ">
                  {" "}
                  Entry level NABH{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicesThree" className="block text-white ">
                  {" "}
                  Full NABH{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicesFour" className="block text-white ">
                  {" "}
                  TPA empanelment{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicesFive" className="block text-white ">
                  {" "}
                  NABL{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicesSix" className="block text-white ">
                  {" "}
                  Hospital Software{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicesSeven" className="block text-white ">
                  {" "}
                  Insurance empanelment{" "}
                </NavLink>
              </li>

              <li>
                <NavLink to="/servicesEight" className="block text-white ">
                  {" "}
                  Rohini registration{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicesNine" className="block text-white ">
                  Staffing & Hospital credential setup info
                </NavLink>
              </li>
            </ul>
          </div>
          <div class="lg:w-3/12 sm:w-6/12 w-full pt-4 lg:pt-0 flex justify-start  lg:justify-center px-3">
            <ul class="flex gap-2 flex-col p-0 ">
              <li class="text-white font-bold text-md leading-[24px] font-Plus">
                Legal
              </li>
              <li>
                <a
                  href="#"
                  class="text-[#CCCCCC] text-md leading-[24px] fw-normal underline relative font-Plus"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-[#CCCCCC] text-md leading-[24px] fw-normal underline relative font-Plus"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div class="lg:w-3/12 w-full pt-4  lg:pt-0 z-1 px-3">
            <h5 class="text-white font-bold text-md leading-[24px]  font-Plus">
              Contact Info
            </h5>
            <div class="flex gap-3 align-items-center pt-3">
              <a href="tel:+8950960627">
                <PhoneIcon />
              </a>
              <a
                href="tel:+8950960627"
                class="text-[#CCCCCC] text-md leading-[24px] fw-normal font-Plus"
              >
                +8950960627
              </a>
            </div>
            <div class="flex gap-3 align-items-center pt-2">
              <a href="mailto:info@noblemindit.gmail.com">
                <EmailIcon />
              </a>
              <a
                href="mailto:info@noblemindit.gmail.com"
                class="text-[#CCCCCC] text-md leading-[24px] fw-normal font-Plus  "
              >
                info@medempanel.gmail.com
              </a>
            </div>
          </div>
        </div>
        <a
          href=""
          class="text-white py-[25px] block text-center  text-sm leading-[21px] opacity-75  border-t-[1px] border-[#A854E9]  font-Plus"
        >
          © {year} . All Rights Reserved.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
