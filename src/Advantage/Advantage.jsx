import React from "react";
import img18 from "../Assets/18.png";
import img20 from "../Assets/20.png";
import img22 from "../Assets/22.png";
import Footerimg from "../component/Footerimg/Footerimg";

function Advantage() {
  return (
    <>
      <div className="relative min-h-screen p-6 text-white bg-purple-900">
        {/* Title Section */}
        <div className="flex justify-center mt-10 ">
          <h1
            className="grid-rows-3 text-3xl font-medium text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)" }}
          >
            Get The{" "}
            <span
              className="text-customGreen"
              style={{ textShadow: "2px 2px 4px rgba(0, 255, 0, 0.8)" }}
            >
              XOXO
            </span>{" "}
            Advantage
          </h1>
        </div>

        {/* Image Row with Paragraphs */}
        <div className="flex flex-col items-center justify-center gap-0 mt-10 lg:flex-row lg:gap-20 xl:gap-24 xl:mt-20 2xl:gap-6 ">
          {/* Image and Paragraph 1 */}
          <div className="flex flex-row text-center lg:flex-col gap-x-0 ">
            <img
              src={img18}
              alt="Image 18"
              className="object-cover mx-auto w-[200px] h-[200px] sm:w-[200px] sm:h-[200px]
               md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[350px] xl:h-[350px] 2xl:w-[600px] 2xl:h-[600px] "
            />
            <p
              className="lg:mt-[-45px] text-2xl  font-bold sm:text-base md:text-lg 
            lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mt-[-90px] 2xl:mb-10 mr-10 "
            >
              Personalised learning <br />
              programs and syllabus <br />
              for all ages
            </p>
          </div>

          {/* Image and Paragraph 2 */}
          <div className="flex flex-row-reverse text-center lg:flex-col">
            <img
              src={img20}
              alt="Image 20"
              className="object-cover mx-auto w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] 
              md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[350px] xl:h-[350px] 2xl:w-[600px] 2xl:h-[600px]"
            />
            <p
              className="lg:mt-[-45px]  text-2xl font-bold sm:text-base md:text-lg 
            lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mt-[-90px] 2xl:mb-10 ml-12 "
            >
              Interactive online <br />
              sessions with concept <br />
              clarity
            </p>
          </div>

          {/* Image and Paragraph 3 */}
          <div className="flex flex-row text-center lg:flex-col">
            <img
              src={img22}
              alt="Image 22"
              className="object-cover mx-auto w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[250px]
               md:h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[350px] xl:h-[350px] 2xl:w-[600px] 2xl:h-[600px]"
            />
            <p
              className="lg:mt-[-45px] text-2xl  font-bold sm:text-base md:text-lg lg:text-xl
             xl:text-2xl 2xl:text-3xl md:mb-8 sm:mb-8 2xl:mt-[-90px] 2xl:mb-10 mr-10 "
            >
              Guaranteed work and <br />
              support for career <br />
              growth
            </p>
          </div>
        </div>
        {/* Footer Section */}
        <div className="bg-purple-900">
          <Footerimg />
        </div>
      </div>
    </>
  );
}

export default Advantage;
