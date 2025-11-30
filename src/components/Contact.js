
import { useEffect, useRef, useState } from "react";
export default function Contact(){
   



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
        <div className="bg-black">
            <section ref={sectionRef} className="w-full flex flex-col md:flex-row px-5 md:px-20 py-10" id="contact">

  

  {/* RIGHT TEXT */}
  <div
    className={`
    w-full flex justify-center text-white
    ${isVisible ? "animate-slide-right" : "hidden-animate"}
    flex flex-col items-center
    w-[95%] md:w-[60%] lg:w-[50%]
    mx-auto
    bg-cover bg-center bg-no-repeat
    rounded-xl shadow-xl p-5
  `}
  style={{
    backgroundImage: "url('/contactimage.png')",
    minHeight: "300px"
  }}
  >
    
      
      <h1 className="text-2xl md:text-3xl font-bold border-b-4 border-red-500 mb-4 w-[150px] px-2 mx-auto w-fit">
        Contact
      </h1>

      <p className="px-2  py-2  text-[17px]  text-xl sm:text-base md:text-lg leading-relaxed">
        You want to discuss more in detail, Contact Me
      </p>
      <p><span className="font-bold py-3">Email:</span> madesh77tanjore@gmail.com</p>
      <p><span className="font-bold py-3">Phone:</span> 9944430188</p>
     

    
  </div>

</section>
        </div>



    )
}