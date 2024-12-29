import React from "react";
import img2 from "../../Assets/2.png";

export default function Footerimg() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 ">
      <div className="flex items-center justify-center py-4 mb-[-300px]">
        <img src={img2} alt="Footer Decoration" className="w-full h-[650px] " />
      </div>
    </footer>
  );
}
