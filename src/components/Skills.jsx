'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import Icons from './Icons';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (

        <section id='Skills' className="md:flex-row-reverse md:flex mt-[40px] px-10 ">
            <div ref={ref} className={`mt-8 md:w-1/2 md:pr-5 text-justify   ${inView ? 'animate__rotateInDownRight' : ''}`}>
                <h1 className='text-6xl '>What I know</h1>
                <p className='text-[25px] mt-5 dark:text-gray-100  text-gray-700'>

                    I know some programming languages, although it's limited. But every day, I try to learn something new.
                </p>
                <Icons />
            </div>
            <div ref={ref} className={`md:w-1/2 items-center flex justify-center  ${inView ? 'animate__rotateInDownLeft' : ''}`}>
                <img src="./assets/hand_coding.gif" className='dark:hidden' alt="" />
                <img src="./assets/hand_coding_dark.gif" className='dark:flex hidden' alt="" />
            </div>



        </section>

    )
}

export default Skills
