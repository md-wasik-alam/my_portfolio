import React from 'react'
import 'animate.css';
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn ,FaFacebookF,FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Hero = () => {
    return (
        <div className='md:flex px-5 md:px-10 mt-5 dark:bg-gray-900'>
            <div className=" md:w-1/2 md:p-10 dark:text-white">
                <h1 className=' font-mono text-[20px] text-center lg:text-start md:text-[30px] font-bold animate__animated animate__backInDown'>Hi all, I'm  </h1>
                <h1 className=' lg:text-[60px] text-center md:text-start text-[45px]  font-bold mt-2 font-serif animate__animated animate__backInLeft'>Md Wasik Alam </h1>
                <p className='animate__animated animate__flash text-center md:text-start md:mt-4 text-[20px] font-light leading-[30px] text-gray-500' >
                    🚀 Welcome to my digital haven! I'm a Full Stack Architect 💻, sculpting interactive realms with Python, JavaScript, PHP, and orchestrating magic with Laravel, MongoDB, MySQL, Next.js, and <span className='text-sky-800 font-semibold'>Node.js</span>. 🌐 In this code-crafted sanctuary, witness my journey as a relentless Web/App alchemist. Each project is a stroke of innovation, a testament to my dedication. Ready to embark on a virtual adventure? Let the lines of code unfold the story of my passion and proficiency! ✨👨‍💻
                </p>
                <div className=" flex space-x-2 mt-6 justify-center md:justify-start">
                    <a href="https://github.com/md-wasik-alam" target='_blank'><VscGithub className='h-10 w-10 text-gray-800 hover:text-gray-950 ' /></a>
                    <a href="https://www.linkedin.com/in/md-wasik-alam" target='_blank' className='h-10 w-10 rounded-full text-white bg-blue-800 hover:bg-gray-950 flex items-center justify-center text-center'><FaLinkedinIn className='text-[20px]' /></a>
                    <a href="mailto :wasikalam02@gmail.com" target='_blank' className='h-10 w-10 rounded-full text-white bg-orange-800 hover:bg-blue-950 flex items-center justify-center text-center'><MdEmail className='text-[20px]' /></a>
                    <a href="https://www.facebook.com/md.wasikalam.54" target='_blank' className='h-10 w-10 rounded-full text-white bg-blue-700 hover:bg-gray-950 flex items-center justify-center text-center'><FaFacebookF className='text-[20px]' /></a>
                    <a href="https://www.instagram.com/md_wasik_alam/" target='_blank' className='h-10 w-10 rounded-full text-white bg-pink-700 hover:bg-pink-800 flex items-center justify-center text-center'><FaInstagram  className='text-[20px]' /></a>
                </div>
               <div className="flex justify-center">
               <div className="flex justify-between px-8 md:px-1 w-full md:w-1/2 mt-10  ">
                    <button className='bg-fuchsia-700 font-semibold hover:bg-white  hover:text-fuchsia-700 hover:border hover:border-fuchsia-700 rounded-lg text-white px-3 py-2 border-white border dark:border-gray-950'>Contact me</button>
                    <button className='bg-fuchsia-700 font-semibold hover:bg-white hover:text-fuchsia-700 hover:border hover:border-fuchsia-700 rounded-lg text-white px-3 py-2 border-white border dark:border-gray-950'>Resume</button>
                </div>
               </div>
            </div>
            <div className="md:w-1/2 mt-5  flex justify-center">

                <img src="./assets/Development-dark.gif" className='bg-transparent hidden dark:flex' alt="logo" />
                <img src="./assets/Development.gif" className='bg-transparent  dark:hidden' alt="logo" />

            </div>
        </div>
    )
}

export default Hero
