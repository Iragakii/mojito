import React from 'react';
import {ScrollTrigger , SplitText} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);



const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <div className="text-red-100 text-xl">
                   Iragaki
      </div>
      
    </div>
  );
};

export default App;
