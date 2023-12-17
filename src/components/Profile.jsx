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
    <div className="relative flex justify-center md:justify-start -mt-[120px] animate__animated animate__bounceInUp">
      <div className="object-cover z-20 h-[150px] sm:h-[200px] w-[150px] sm:w-[200px]   border-4 border-cyan-700 to-red-600 from-amber-700 rounded-full relative">
        <img className="object-cover border-image-clip-path w-full z-20 h-full rounded-full " src="./assets/profile.webp" alt="Profile Picture" />
        {/* <div className="absolute inset-0 rounded-full overflow-hidden border-rainbow-gradient"></div> */}
      </div>
    </div>
    {/* <!-- User Info --> */}
    <div className="text-center mt-4">
    <div className=" flex space-x-2 mt-6 justify-center md:justify-start animate__animated animate__rubberBand">
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
