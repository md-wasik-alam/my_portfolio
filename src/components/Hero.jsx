'use client'
import React from 'react'
import 'animate.css';
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Hero = () => {
    const openPDF = () => {
        // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
        const pdfPath = './assets/resume.pdf';

        // Open the PDF file in a new browser window or tab
        window.open(pdfPath, '_blank');
    };
    const initiatePhoneCall = () => {
        // Replace '1234567890' with the actual phone number you want to call
        const phoneNumber = '+919955015651';

        // Use the 'tel:' URI scheme to initiate a phone call
        window.open(`tel:${phoneNumber}`);
    };

    return (
        <div className='md:flex px-5 md:px-10 mt-5 dark:bg-gray-900'>
            <div className=" md:w-1/2 md:p-10 dark:text-white">
                <h1 className=' font-mono text-[20px] text-center md:text-left md:text-[30px] font-bold animate__animated animate__backInDown'>Hi all, I'm  </h1>

                <h1 className=' lg:text-[60px] text-center md:text-start text-[45px]  font-bold mt-2 font-serif animate__animated animate__backInLeft'>Md Wasik Alam </h1>

                <p className='animate__animated animate__flash text-justify md:text-start md:mt-4 text-[20px] font-light leading-[30px] text-gray-500 dark:text-gray-400' >
                    🚀 Welcome to my digital haven! I'm a Full Stack Architect 💻, sculpting interactive realms with Python, JavaScript, PHP, and orchestrating magic with Laravel, MongoDB, MySQL, Next.js, and <span className='text-sky-800 font-semibold'>Node.js</span>. 🌐 In this code-crafted sanctuary, witness my journey as a relentless Web/App alchemist. Each project is a stroke of innovation, a testament to my dedication. Ready to embark on a virtual adventure? Let the lines of code unfold the story of my passion and proficiency! ✨👨‍💻
                </p>

                <div className=" flex space-x-2 mt-6 justify-center md:justify-start">
                    <a className='github' href="https://github.com/md-wasik-alam" target='_blank'><VscGithub className='h-10 w-10 text-gray-800 hover:text-gray-950 ' /></a>
                    <a href="https://www.linkedin.com/in/md-wasik-alam" target='_blank' className='h-10 w-10 rounded-full text-white bg-blue-800 hover:bg-gray-950 flex items-center justify-center text-center'><FaLinkedinIn className='text-[20px]' /></a>
                    <a href="mailto :wasikalam02@gmail.com" target='_blank' className='h-10 w-10 rounded-full text-white bg-orange-800 hover:bg-blue-950 flex items-center justify-center text-center'><MdEmail className='text-[20px]' /></a>
                    <a href="https://www.facebook.com/md.wasikalam.54" target='_blank' className='h-10 w-10 rounded-full text-white bg-blue-700 hover:bg-gray-950 flex items-center justify-center text-center'><FaFacebookF className='text-[20px]' /></a>
                    <a href="https://www.instagram.com/md_wasik_alam/" target='_blank' className='h-10 w-10 rounded-full text-white bg-pink-700 hover:bg-pink-800 flex items-center justify-center text-center'><FaInstagram className='text-[20px]' /></a>

                    <a href="https://twitter.com/mdwasikalam1?lang=en" target='_blank' className='h-10 w-10 rounded-full  bg-white border-2 hover:bg-gray-100 flex items-center justify-center text-center'><svg viewBox="0 0 24 24" aria-label="X" role="img" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-18jsvk2 r-16y2uox r-lwhw9o w-6 "><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg></a>
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-between px-8 md:px-1 w-full md:w-1/2 mt-10  ">


                        <button onClick={initiatePhoneCall}
                            className="w-28 h-12 text-white font-semibold hover:bg-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
                        >
                            Contact me
                        </button>
                        <button onClick={() => openPDF()}
                            className="w-28 h-12 text-white font-semibold hover:bg-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
                        >
                            Resume
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 mt-5  flex justify-center">

                <img src="./assets/Development-dark.gif" className=' hidden dark:flex' alt="logo" />
                <img src="./assets/Development.gif" className='dark:hidden' alt="logo" />

            </div>
        </div>
    )
}

export default Hero
