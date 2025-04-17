import React from 'react'
import Ellipes4 from '../assets/img/Ellipes4.svg'
import Ellips3 from '../assets/img/Ellips3.svg'
// import Heroimg from '../assets/img/containeer.png'
// import Heroimg from '../assets/img/Hero.jpeg'
import Heroimg from '../assets/img/Heroimg.jpeg'
import Hero from '../assets/img/Hero.jpeg'
import About from './About'
import Services from './Services'
import AyushmanInfo from './AyushmanInfo'
import Ellipes22 from '../assets/img/Ellipes22.svg';

const Home = () => {
  return (
    <section className="relative">
      {/* <img src={Ellipes22} alt="" className="absolute left-0 top-[-10%]" /> */}
      <div className="container  ">
        <div className="flex flex-col items-center text-center">
          <h1
            className="pt-11 lg:text-fs4xl text-[48px]   font-bold   lg:leading-[100px] text-black font-Plus"
            id="home"
          >
            Empowering Healthcare Solutions 
            <span className="text-[#906 4EE] text-[#9562EE] block">for  Your Needs</span>
          </h1>

          <h6 className="text-[#4C4C4C] pt-3 max-w-3xl text-base leading-6 font-normal font-Plus">
          Discover a range of comprehensive healthcare services designed to enhance patient care and streamline hospital operations. From insurance and TPA empanelment to staffing solutions, we are here to support your healthcare journey.
          </h6>

          <div className="relative w-full pt-6 lg:pt-16 pb-6 lg:pb-12">
            
            <div className=" rounded-xl overflow-hidden">
              <div className=" ">
            <img src={Heroimg} alt="" className='w-full max-h-[400px] object-fit-contain' />

              </div>
            {/* <img src={Hero} alt="" className='w-full' /> */}
            </div>
            <div className="hidden lg:block absolute top-[4%] left-[-4%] z-[-1]">
              <img src={Ellips3} alt="ellipse" />
            </div>
            <div className="hidden lg:block absolute bottom-[-1%] right-[-4%] z-[-1]">
              <img src={Ellipes4} alt="ellipse" />
            </div>
          </div>

          <button className="text-md text-white font-bold rounded-full bg-[#9562EE] px-8 py-3 mb-6 lg:mb-12 font-Plus hover:bg-[#7a4dd7] transition duration-300">
            Get Started
          </button>

          
        </div>
      </div>    
    </section>
  )
}

export default Home
