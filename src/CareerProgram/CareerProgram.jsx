import React from "react";
import CopyofxoxoEDU from "../Assets/CopyofxoxoEDU.png";

function CareerProgram() {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-purple-50 to-purple-200">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{
          backgroundImage: `url(${CopyofxoxoEDU})`,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse max-w-6xl gap-20 px-6 mt-5 text-center lg:flex-row lg:text-left lg:gap-16 ">
        {/* Left Section */}
        <div className="p-6 text-xl lg:w-1/2 mt-[-140px] lg:mt-2 ">
          <h1 className="mt-12 mb-4 text-4xl font-bold text-purple-900 lg:text-4xl ">
            KICKSTART YOUR
            <br />
            <span className="text-black">LEARNING</span>{" "}
            <span className="text-purple-900"> AND</span>{" "}
            <span className="text-black">CAREER</span> {""}
            WITH US TODAY!
            <br />
          </h1>
          <p className="text-purple-900 ">
            Get exclusive access to our{" "}
            <span className="font-bold text-yellow-500">Gold</span> Learning
            suite. It includes a{" "}
            <span className="font-bold">Personalised Program</span> with live
            training sessions led by global experts,{" "}
            <span className="font-bold">24/7 Training Support</span>, access to
            your <span className="font-bold">Personal Dashboard</span>. Unlock
            opportunities for internships and career growth as you build a
            strong foundation.
          </p>
          <p className="mt-4 text-purple-900">
            Take the first step toward shaping your career with us today!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between p-6 mt-2 text-white rounded-md shadow-lg lg:w-2/2 bg-gradient-to-r from-purple-800 to-black lg:ml-44 ">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              3 MONTH <br />
              CERTIFICATE <br />
              PROGRAM
            </h2>
            <ul className="space-y-2 list-disc list-inside ">
              <li>Choice of Subject in the core syllabus</li>
              <li>Study and Project materials</li>
              <li>Online and Offline Classes based on schedule</li>
              <li>Guaranteed Work Opportunity</li>
              <div className="absolute left-0 right-0 2xl:w-[360px] 2xl:h-1 2xl:ml-[769px] bg-white  2xl:bottom-48   "></div>
            </ul>
          </div>

          {/* Pricing Section */}
          <div className="mt-6 text-center lg:text-left ">
            <p className="text-sm text-gray-300">
              30% off for a limited time only
            </p>

            <p className="text-xl text-gray-300 line-through">₹13799/month</p>
            <p className="text-4xl font-bold">
              ₹<span className="text-green-400">10799</span>/month
            </p>

            <button className="px-6 py-3 mt-6 font-bold text-purple-900 bg-green-500 rounded-lg hover:bg-green-600">
              CHOOSE YOUR SYLLABUS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerProgram;
