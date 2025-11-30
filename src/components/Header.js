import { Bars3Icon } from '@heroicons/react/24/solid';
import{useState} from 'react';
export default function Header(){
        const handleLinkClick = () => {
        setToggleMenu(false); 
    };
    const[toggleMenu,setToggleMenu]=useState(false);
    return(
       <header className="flex justify-between" id="home" >
            <a  className="font-bold " href="#"><span className="text-red-600">M</span>adeshwaran</a>
           
            <nav className="hidden md:block">
                <ul className="flex">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#project">PROJECTS</a></li>
                    <li><a href="#resume">RESUME</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
            {toggleMenu && (
                <nav className="fixed top-16 left-0 w-full bg-black/90 text-white md:hidden z-50 rounded-b-2xl py-6">
                    <ul className="flex flex-col items-center gap-6 text-lg font-semibold">
                    <li><a href="#home" onClick={handleLinkClick} >HOME</a></li>
                    <li><a href="#about" onClick={handleLinkClick}>ABOUT</a></li>
                    <li><a href="#skills" onClick={handleLinkClick}>SKILLS</a></li>
                    <li><a href="#project" onClick={handleLinkClick}>PROJECTS</a></li>
                    <li><a href="#resume" onClick={handleLinkClick}>RESUME</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>CONTACT</a></li>
                   
                    </ul>
                </nav>
                )}
            <button className="block md:hidden" onClick={()=>setToggleMenu(!toggleMenu)}><Bars3Icon className="text-white h-7"/></button>
       </header>
       
    )
}