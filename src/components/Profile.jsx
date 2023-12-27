import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Profile = () => {
  return (
    <div className="container mx-auto px-4">
      {/* <!-- Profile Header --> */}
      <div className="relative p-4 rounded-md overflow-hidden">
        {/* <!-- Background Image --> */}
        <div className="relative h-[250px]  mb-4 animate__animated animate__fadeInDown">
          <img className="object-fill w-full h-full rounded-md" src="./assets/banner.webp" alt="Background Image" />
        </div>
        {/* <!-- Profile Picture --> */}
        <div className="relative flex justify-center  -mt-[120px] animate__animated animate__bounceInUp">
          <div className="object-cover z-20 h-[150px] sm:h-[200px] w-[150px] sm:w-[200px]   border-4 border-cyan-700 to-red-600 from-amber-700 rounded-full relative">
            <img className="object-cover border-image-clip-path w-full z-20 h-full rounded-full " src="./assets/profile.webp" alt="Profile Picture" />
            {/* <div className="absolute inset-0 rounded-full overflow-hidden border-rainbow-gradient"></div> */}
          </div>
        </div>
        {/* <!-- User Info --> */}
        <div className="text-center mt-4">
          <div className=" flex space-x-2 mt-6 justify-center  animate__animated animate__rubberBand">
            {/* <div class="tooltip-container">
              <span class="tooltip">Discover</span>
              <span class="text">
                <div class="borde-back">
                  <div class="icon">
                    <svg
                      viewBox="0 0 16 16"
                      class="bi bi-discord"
                      height="23"
                      width="23"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </span>
            </div>
            <div class="tooltip-container">
              <span class="tooltip">Discover</span>
              <span class="text">
                <div class="borde-back">
                  <div class="icon">
                    <svg
                      viewBox="0 0 16 16"
                      class="bi bi-discord"
                      height="23"
                      width="23"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </span>
            </div> */}

            <a className='github' href="https://github.com/md-wasik-alam" target='_blank'><VscGithub className='h-10 w-10 text-gray-800 dark:text-gray-600 hover:text-gray-950 ' /></a>
            <a href="https://www.linkedin.com/in/md-wasik-alam" target='_blank' className='h-10 w-10 rounded-full text-white bg-blue-800 hover:bg-gray-950 flex items-center justify-center text-center'><FaLinkedinIn className='text-[20px]' /></a>
            <a href="mailto :wasikalam02@gmail.com" target='_blank' className='h-10 w-10 rounded-full text-white bg-orange-800 hover:bg-blue-950 flex items-center justify-center text-center'><MdEmail className='text-[20px]' /></a>
            <a href="https://www.facebook.com/md.wasikalam.54" target='_blank' className='h-10 w-10 rounded-full text-white bg-blue-700 hover:bg-gray-950 flex items-center justify-center text-center'><FaFacebookF className='text-[20px]' /></a>
            <a href="https://www.instagram.com/md_wasik_alam/" target='_blank' className='h-10 w-10 rounded-full text-white bg-pink-700 hover:bg-pink-800 flex items-center justify-center text-center'><FaInstagram className='text-[20px]' /></a>

            <a href="https://twitter.com/mdwasikalam1?lang=en" target='_blank' className='h-10 w-10 rounded-full  bg-white border-2 hover:bg-gray-100 flex items-center justify-center text-center'><svg viewBox="0 0 24 24" aria-label="X" role="img" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-18jsvk2 r-16y2uox r-lwhw9o w-6 "><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg></a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile
