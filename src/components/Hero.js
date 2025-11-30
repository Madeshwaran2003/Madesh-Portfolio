import madesh from '../assert/firstimage.jpg';
import { CiTwitter,CiYoutube } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export default function Hero(){
    return(
<section className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-20 mt-10 md:mt-20">

  {/* LEFT TEXT SECTION */}
  <div className="w-full md:w-1/2 text-center md:text-left animate-slide-in-left">

    <p className="text-white text-xl md:text-3xl hero-font2">Hi,</p>

    <h1 className="text-white text-2xl md:text-5xl font-bold hero-font m-1">
      I am <span className="text-red-600">M</span>adeshwaran
    </h1>

    <h2 className="text-teal-300 text-xl md:text-4xl font-semibold hero-font2 m-1">
      Full-Stack
    </h2>

    <h2 className="text-teal-300 text-xl md:text-4xl font-semibold hero-font2 m-1">
      Web Developer
    </h2>

    {/* SOCIAL ICONS */}
    <div className="flex justify-center md:justify-start gap-4 mt-4 text-white text-xl md:text-2xl">
       <a href="https://x.com/" className="hover:text-red-500"><CiTwitter /></a> 
       <a href="https://www.youtube.com/watch?v=TRFz22o4Bvc" className="hover:text-red-500"><CiYoutube /></a> 
       <a href="https://github.com/Madeshwaran2003" className="hover:text-red-500"><FaGithub /></a>
        <a href="www.linkedin.com/in/madeshwaran-n-0aa133291" className="hover:text-red-500"><FaLinkedin /></a>
    </div>

  </div>

  {/* RIGHT IMAGE */}
  <div className="mt-8 md:mt-0 flex justify-center md:w-1/2 animate-slide-in-right">

    <img
      src={madesh}

      /* increased desktop image size */
      className="w-80 sm:w-80 md:w-[430px] lg:w-[500px] rounded-2xl border-4 border-white shadow-xl  transition-transform duration-300 hover:scale-95"

      alt="Madeshwaran"
    />
  </div>

</section>


    )
}