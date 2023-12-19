'use client'
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Contact_Us = () => {
    const [message,setMessage]=useState('');
    const test = () => {
        Swal.fire({
          title: "Message Send",
          text: message,
          icon: "success"
        });
      }
    return (
        <div className="container mt-5 px-5 mb-5 text-center">
            <div className="Toastify"></div>
            <span className="text-6xl font-bold px-1 my-0 border-b-8 border-cyan-500 font-poppins opacity-100">Get In Touch</span>
            <div className='row  lg:flex md:flex mt-10'>
                <div className="lg:w-1/3 md:w-1/3 flex items-center justify-center">
                    <img  src="./assets/Get_in_touch.gif" alt="get in touch" className='dark:hidden' />
                    <img  src="./assets/Get_in_dark.gif" className="hidden dark:flex" alt="get in touch" />
                </div>
                <div className="lg:w-2/3 md:w-2/3 md:mt-5 lg:mt-5 mt-5 md:gap-2 lg:gap-2 md:p-4 lg:p-4 gap-4 ">
                    <p className="mb-4 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left font-sarif font-semibild text-base lg:text-lg md:text-lg">Fill up the form below to contact me in a very simple way and I will reply to you ASAP. You can also contact me at <span className="badge bg-gray-300 text-black font-light small font-mono">wasikalam02@gmail.com</span></p>
                    <div className="flex flex-col lg:flex-row  md:flex-row w-full gap-5 mt-5">
                        <input type="text" placeholder="Enter your name" className="rounded-xl form-control lg:py-5 md:py-5 py-3 font-light text-sm bg-gray-200 font-poppins md:w-1/2 lg:w-1/2 p-2" />
                        <input  type="text" placeholder="Enter your email" className="rounded-xl form-control lg:py-5 md:py-5 py-3 font-light text-sm bg-gray-200 font-poppins md:w-1/2 lg:w-1/2 p-2" />
                    </div>
                    <textarea onChange={(e)=>setMessage(e.target.value)} rows={5} cols={7} placeholder="Enter your message" className="rounded-lg form-control font-light text-sm bg-gray-200 font-poppins mt-3 w-full p-4"></textarea>
                    <button onClick={test} className="btn bg-black text-white px-2 py-2 w-full rounded-lg font-semibold font-poppins mt-3"><span>Send Message</span></button>
                </div>
            </div>

        </div>
    )
}

export default Contact_Us
