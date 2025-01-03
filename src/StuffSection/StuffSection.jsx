import React from "react";
import img1 from "../Assets/1.png";

const StuffSection = () => {
  return (
    <div className="text-purple-900">
      {/* Heading */}
      <div className="py-10 text-center bg-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          Some of the <span className="text-green-400">cool stuff</span> you’ll
          be
          <br />
          able to do in our program
        </h1>
      </div>

      {/* Videos Section */}
      <div className="flex px-4 py-8 bg-purple-900 sm-hidden">
        <div className="w-full max-w-[400px] aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID_1"
            title="NBA Vision Pro Demonstration"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full max-w-[400px] aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID_2"
            title="Realtime Object Download Test Demo"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full max-w-[400px] aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID_3"
            title="Centipede VR Official Trailer"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Description Section */}
      <div className="px-4 py-6 text-center text-purple-700 bg-white">
        <p className="text-lg font-semibold md:text-xl">
          We do not just teach our students, we get them ready to be Creators.
          Ready to be <br /> active and solve problems with a strong emphasis on
          Career building and Strong <br /> Fundamental Knowledge.
        </p>
      </div>

      {/* Footer */}
      <div className="relative py-6 text-center bg-purple-900 md:py-4">
        <img
          src={img1}
          alt="Logo"
          className="w-40 h-40 mx-auto sm:w-60 sm:h-60 md:w-80 md:h-80 md:mt-[-100px] mt-[-50px]"
        />

        <p className="text-sm text-white md:mt-[-80px] mt-[-40px]">
          Copyright © 2024 XOXO Studios ® All rights reserved
        </p>
      </div>
    </div>
  );
};

export default StuffSection;
