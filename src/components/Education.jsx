import React from 'react'

const Education = () => {
    return (
    <>
    <div className='text-center mt-12'>
        <span className="text-6xl font-bold px-1  my-0 border-b-8 border-cyan-500 font-poppins opacity-100">Edudation</span>
     </div>
        <div className=' px-5 md:px-[120px  ] my-10 flex flex-col md:justify-center'>
            {/* <h1 className='text-6xl'>Edudation</h1> */}
            <div className="w-full flex flex-col dark:bg-gray-800 dark:shadow-gray-400 mt-10 gap-10 border px-2 py-2 rounded-md shadow-md md:hover:shadow-xl  md:flex-row items-center">
                <div className="w-32 h-32">
                    <img src="https://upload.wikimedia.org/wikipedia/en/f/ff/Purnea_University_logo.png" alt="" />
                </div>
                <div className="flex flex-col ">
                    <h1 className="font-semibold text-center md:text-left md:text-4xl">Purnea University</h1>
                    <h1 className="font-semibold text-center md:text-left md:text-2xl">Bachelor of Science in Computer Science</h1>
                    <p className="text-center md:text-left">September 2019 - January 2023</p>
                </div>

            </div>
        </div>
    </>

    )
}

export default Education
