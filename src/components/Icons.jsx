import React from 'react'
import { FaHtml5,FaCss3Alt,FaReact,FaNpm,FaDatabase,FaDocker,FaAws,FaPython,FaLaravel,FaPhp,FaBootstrap } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiLivewire } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandNextjs,TbBrandTailwind,TbBrandReactNative } from "react-icons/tb";




const Icons = () => {
    return (
        <div className=" flex flex-wrap justify-between text-[12px] pt-5">
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200  flex-col mt-3 ml-3  items-center">
                <FaHtml5 className='w-12 h-12'/>
                <p>html-5</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <FaCss3Alt className='w-12 h-12'/>
                <p>css-3</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <RiJavascriptFill className='w-12 h-12'/>
                <p>JavaScript</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <FaReact className='w-12 h-12'/>
                <p>React</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <FaNode className='w-12 h-12'/>
                <p>Node Js</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <FaNpm className='w-12 h-12'/>
                <p>Npm</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <FaDatabase className='w-12 h-12'/>
                <p>Sql-Database</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <IoLogoFirebase className='w-12 h-12'/>
                <p>Firebase</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <FaDocker className='w-12 h-12'/>
                <p>Docker</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <SiMongodb className='w-12 h-12'/>
                <p>MongoDB</p>
            </div>
            {/* <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <FaAws className='w-12 h-12'/>
                <p>Aws</p>
            </div> */}
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <FaPython className='w-12 h-12'/>
                <p>Python</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <FaLaravel className='w-12 h-12'/>
                <p>Laravel</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <FaPhp className='w-12 h-12'/>
                <p>Php</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <SiLivewire className='w-12 h-12'/>
                <p>live-Wire</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <TbBrandReactNative className='w-12 h-12'/>
                <p>React Native</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <TbBrandCpp className='w-12 h-12'/>
                <p>C++</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <TbBrandNextjs className='w-12 h-12'/>
                <p>NextJS</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <TbBrandTailwind className='w-12 h-12'/>
                <p>Tailwind</p>
            </div>
            <div className="flex hover:text-blue-700 text-gray-600 dark:hover:text-blue-700 dark:text-gray-200 flex-col mt-3 ml-3  items-center">
                <FaBootstrap className='w-12 h-12'/>
                <p>Bootstrap</p>
            </div>
           
        </div>
    )
}

export default Icons
