import Aboutimg from '../assert/secondimage.png';
 import { useEffect, useRef, useState } from "react";
export default function About(){
   



  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 } // 30% visible triggers animation
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

    return(
      <div className="bg-black my-2">
        <section ref={sectionRef} className="w-full flex flex-col md:flex-row px-5 md:px-20 py-10" id="about">

  {/* LEFT IMAGE */}
  <div
    className={`w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 
    ${isVisible ? "animate-slide-left" : "hidden-animate"}`}
  >
    <img
      src={Aboutimg}
      className="w-75 sm:w-72 md:w-80 lg:w-[600px] rounded-2xl shadow-xl border-4 border-white"
      alt="About"
    />
  </div>

  {/* RIGHT TEXT */}
  <div
    className={`w-full md:w-1/2 flex justify-center text-white
    ${isVisible ? "animate-slide-right" : "hidden-animate"}`}
  >
    <div className="flex flex-col justify-center max-w-xl">
      
      <h1 className="text-2xl md:text-3xl font-bold border-b-4 border-red-500 mb-4 w-[150px] px-2 mx-auto w-fit">
        About Me
      </h1>

      <p className="px-2 text-sm sm:text-base md:text-lg leading-relaxed">
        I'm a Full-Stack Developer skilled in building responsive and modern UIs using React, and developing efficient backend systems with Node.js and MongoDB.
      </p>

      <p className="px-2 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
       I enjoy creating smooth, user-friendly web applications and continuously improving my development skills
      </p>

    </div>
  </div>

</section>
      </div>



    )
}