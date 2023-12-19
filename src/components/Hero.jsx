'use client'
import React from 'react'
import 'animate.css';



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
        <div className='md:flex px-5 md:px-10  dark:bg-gray-900'>
            <div className=" md:w-1/2 md:p-10 dark:text-white">
                <h1 className=' font-mono text-[20px]  text-center md:text-[30px] font-bold animate__animated animate__backInDown'>Hi all, I'm  </h1>

                <h1 className=' lg:text-[60px] text-center md:text-start text-[45px]  font-bold mt-2 font-serif animate__animated animate__backInLeft'>Md Wasik Alam </h1>

                <p className='animate__animated animate__flash text-justify md:text-start md:mt-4 text-[20px] font-light leading-[30px] text-gray-500 dark:text-gray-400' >
                    🚀 Welcome to my digital haven! I'm a Full Stack Architect 💻, sculpting interactive realms with Python, JavaScript, PHP, and orchestrating magic with Laravel, MongoDB, MySQL, Next.js, and <span className='text-sky-800 font-semibold'>Node.js</span>. 🌐 In this code-crafted sanctuary, witness my journey as a relentless Web/App alchemist. Each project is a stroke of innovation, a testament to my dedication. Ready to embark on a virtual adventure? Let the lines of code unfold the story of my passion and proficiency! ✨👨‍💻
                </p>

               
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
