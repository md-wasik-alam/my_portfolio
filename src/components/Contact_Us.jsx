'use client'
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Contact_Us = () => {
    const structure={
        name: '',
        email: '',
        message: '',
    }
    const [formData, setFormData] = useState(structure);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to the API route
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                Swal.fire({
                    title: "Message Send",
                    text: formData.email,
                    icon: "success"
                });
                setFormData(structure);
            } else {
                Swal.fire({
                    title: "Message not Send",
                    text: await response.json(),
                    icon: "error"
                });
                // console.error('Error saving contact data:', await response.json());
            }
        } catch (error) {
            Swal.fire({
                title: "Message not Send",
                icon: "error"
            });
        }
    };
    // const test = () => {
    //   if (message!='') {
    //     Swal.fire({
    //         title: "Message Send",
    //         text: message,
    //         icon: "success"
    //       });
    //   }
    //   else{
    //     Swal.fire({
    //         title: "Message is black",
    //         text: message,
    //         icon: "warning"
    //       });
    //   }
    //   }
    return (
        <div id='contact' className="container mt-5 px-5 mb-5 text-center">
            <div className="Toastify"></div>
            <span className="text-6xl font-bold px-1 my-0 border-b-8 border-cyan-500 font-poppins opacity-100">Get In Touch</span>
            <form onSubmit={handleSubmit} className='row  lg:flex md:flex mt-10'>
                <div className="lg:w-1/3 md:w-1/3 flex items-center justify-center">
                    <img src="./assets/Get_in_touch.gif" alt="get in touch" className='dark:hidden' />
                    <img src="./assets/Get_in_dark.gif" className="hidden dark:flex" alt="get in touch" />
                </div>
                <div className="lg:w-2/3 md:w-2/3 md:mt-5 lg:mt-5 mt-5 md:gap-2 lg:gap-2 md:p-4 lg:p-4 gap-4 ">
                    <p className="mb-4 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left font-sarif font-semibild text-base lg:text-lg md:text-lg">Fill up the form below to contact me in a very simple way and I will reply to you ASAP. You can also contact me at <span className="badge bg-gray-300 text-black font-light small font-mono">wasikalam02@gmail.com</span></p>
                    <div className="flex flex-col lg:flex-row  md:flex-row w-full gap-5 mt-5">
                        <input onChange={handleChange} name='name' value={formData.name} type="text" placeholder="Enter your name" className="rounded-xl form-control lg:py-5 md:py-5 py-3 font-light text-sm text-black bg-gray-200 font-poppins md:w-1/2 lg:w-1/2 p-2" />
                        <input onChange={handleChange} name='email' value={formData.email} type="text" placeholder="Enter your email" className="rounded-xl form-control lg:py-5 md:py-5 py-3 font-light text-sm text-black bg-gray-200 font-poppins md:w-1/2 lg:w-1/2 p-2" />
                    </div>
                    <textarea onChange={handleChange} name='message' value={formData.message} rows={5} cols={7} placeholder="Enter your message" className="rounded-lg form-control font-light text-sm text-black bg-gray-200 font-poppins mt-3 w-full p-4"></textarea>
                    <button type='submit' className=" bg-blue-600 hover:bg-blue-800 text-white px-2 py-2 w-full rounded-lg font-semibold font-poppins mt-3"><span>Send Message</span></button>
                </div>
            </form>

        </div>
    )
}

export default Contact_Us
