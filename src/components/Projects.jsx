import Link from 'next/link';
import React from 'react'


const ProjectCard = ({ href, imageSrc, title, technologies }) => {
    return (
        <div  className=" hover:cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={href} target='_blank' passHref>
              
                    <img className="rounded-t-lg w-full h-[200px]" src={imageSrc} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {technologies}
                        </p>
                    </div>
             
            </Link>
        </div>
    );
};

const Projects = () => {
    return (
    <div id='projects' className='text-center'>
        <span className="text-6xl font-bold px-1  my-0 border-b-8 border-cyan-500 font-poppins opacity-100">Project</span>
        <div className='px-5 sm:px-20 my-10 flex flex-col md:justify-center'>


            <div className="md:px-10  mb-2 mt-10 grid gap-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                <ProjectCard
                    href="https://novafix.in"
                    imageSrc="./assets/servixc.webp"
                    title="Novafix"
                    technologies="Laravel, Php, Js, MySql, Livewire, Bootstrap, Css"
                    
                />
                <ProjectCard
                    href="https://mandalenglishhouse.com"
                    imageSrc="./assets/mandal.webp"
                    title="Mandal English House"
                    technologies="Laravel, Php, Js, MySql, Livewire, Bootstrap, Css, Tailwind"
                    
                />
                <ProjectCard
                    href="https://chatapp-purnea.netlify.app/"
                    imageSrc="./assets/chatapp.webp"
                    title="Chat App"
                    technologies="ReactJs, NodeJs, Express, Tailwind, Socket"
                    
                />
                <ProjectCard
                    href="https://github.com/md-wasik-alam/foodeev2"
                    imageSrc="./assets/food.webp"
                    title="Foodies"
                    technologies="ReactJs, NodeJs, Express, Tailwind, MongoDB"
                    
                />
                {/* Add more ProjectCard components for additional projects */}
            </div>

        </div>
    </div>

    )
}

export default Projects
