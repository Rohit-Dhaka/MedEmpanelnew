import React from "react";
// import GraphicOne from "../assets/images/GraphicOne.jpeg";
// import GraphicTwo from "../assets/images/GraphicTwo.jpeg";



const AyushmanInfo = () => {
  return (
    <section className="bg-gradient-to-r from-[#EBE0F9] via-white to-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-700 mb-12">
          Ayushman Bharat Empanelment Highlights
        </h2>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-3 gap-8 bg-white rounded-2xl p-8 shadow-md mb-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center border-r md:border-r border-gray-300 pr-4 md:pr-6">
            <div className="bg-red-100 p-4 rounded-full mb-3">
              
            </div>
            <div className="flex items-end">
              {/* <Counter targetNumber={15000} duration={1000} /> */}
              <span className="text-2xl font-bold text-gray-800 ml-1">+</span>
            </div>
            <p className="text-gray-600 mt-2">All India hospitals empanelled</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center border-r md:border-r border-gray-300 pr-4 md:pr-6">
            <div className="bg-red-100 p-4 rounded-full mb-3">
              
            </div>
            <div className="flex items-end">
              
              <span className="text-2xl font-bold text-gray-800 ml-1">Cr</span>
            </div>
            <p className="text-gray-600 mt-2">Ayushman cards created</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-red-100 p-4 rounded-full mb-3">
              
            </div>
            <h3 className="text-2xl font-bold text-gray-800">PMJAY</h3>
            <p className="text-gray-600 mt-2 text-sm text-center">
              Under Ayushman Bharat Pradhan Mantri Jan Arogya Yojana
            </p>
          </div>
        </div>

        {/* Image 1 */}
        <div className="bg-white rounded-xl shadow-md mb-8">
          {/* <img src={GraphicOne} alt="Graphic One" className="w-full rounded-lg" /> */}
        </div>

        {/* Services List */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <p className="font-semibold text-lg text-gray-800 mb-2">MedEmpanel Services:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Guiding institutions through empanelment</li>
            <li>Smooth and hassle-free registration</li>
            <li>Affordable, quality healthcare to millions</li>
            <li>Fast-tracking approvals & compliance</li>
          </ul>
          <p className="mt-4 text-blue-600 font-medium">
            Contact: +91 89509-60627 | www.medempanel.com
          </p>
        </div>

        {/* Image 2 */}
        <div className="bg-white rounded-xl shadow-md">
          {/* <img src={GraphicTwo} alt="Graphic Two" className="w-full rounded-lg" /> */}
        </div>
      </div>
    </section>
  );
};

export default AyushmanInfo;
