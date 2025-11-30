import resume from '../assert/resume.png';
import { useEffect, useRef, useState } from "react";
export default function Resume(){
   



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
<section ref={sectionRef} className="w-full flex flex-col md:flex-row px-5 md:px-20 py-10" id="resume">

  {/* LEFT IMAGE */}
  <div
    className={`w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 
    ${isVisible ? "animate-slide-left" : "hidden-animate"}`}
  >
    <img
      src={resume}
      className="w-[280px] sm:w-72 sm:h-[160px] md:w-80 lg:w-[600px] lg:h-[350px] rounded-2xl shadow-xl border-4 border-black object-cover"
      alt="Resume"
    />
  </div>

  {/* RIGHT TEXT */}
  <div
    className={`w-full md:w-1/2 flex justify-center text-white
    ${isVisible ? "animate-slide-right" : "hidden-animate"}`}
  >
    <div className="flex flex-col justify-center max-w-xl">
      
      <h1 className="text-2xl md:text-3xl font-bold border-b-4 border-red-500 mb-4 w-[150px] px-2 mx-auto w-fit">
        Resume
      </h1>

      <p className="px-2 text-sm sm:text-base md:text-lg leading-relaxed">
        You can view my Resume<a    href="/newresume.pdf" download="Madeshwaran_Resume.pdf" className="buttonanime">Downlode</a>
      </p>

     

    </div>
  </div>

</section>


    )
}