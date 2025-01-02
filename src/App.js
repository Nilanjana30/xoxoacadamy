import React from "react";
import HomePage from "./component/HomePage";
import Advantage from "./Advantage/Advantage";
import CareerProgram from "./CareerProgram/CareerProgram";
import GoalsUI from "./GoalsUI/GoalsUI";
import StuffSection from "./StuffSection/StuffSection";

function App() {
  return (
    <>
      <HomePage />
      <Advantage />
      <CareerProgram />
      <GoalsUI />
      <div className="">
        <StuffSection />
      </div>
    </>
  );
}

export default App;
