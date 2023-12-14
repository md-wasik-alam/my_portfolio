'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <section id='Skills' className="md:flex-row-reverse md:flex mt-[40px] px-10">
             <div className="md:w-1/2">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus iusto assumenda qui, cum, corporis officiis id exercitationem voluptate nostrum tempore alias nulla delectus suscipit fuga in ducimus quas aliquam.
            </div>
            <div ref={ref} className={`md:w-1/2 items-center flex justify-center animate__animated ${inView ? 'animate__rotateInDownLeft' : ''}`}>
                <img src="./assets/hand_coding.gif" className='dark:hidden' alt="" />
                <img src="./assets/hand_coding_dark.gif" className='dark:flex hidden' alt="" />
            </div>
           


        </section>

    )
}

export default Skills
