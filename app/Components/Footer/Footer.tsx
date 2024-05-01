import React from 'react'
import logo from '@/public/blog-logo.png'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className='container flex flex-col  justify-between'>
        <div className='footer-title flex justify-center py-16'>
          <Image alt='logo' src={logo} width={150} height={40} />

        </div>
        <div className='footer-description'>
          <span className='w-full text-center block'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span>
        </div>
        <div className='footer-social flex justify-center my-8'>
          <span className='w-8 h-8 rounded-full flex mx-2 justify-center items-center bg-blue-700 p-1'>
            <FaFacebookF size={18} color='#fff' />
          </span>
          <span className='w-8 h-8 rounded-full justify-center mx-2 flex items-center bg-blue-700 p-1'>
            <FaTwitter size={18} color='#fff' />
          </span>
          <span className='w-8 h-8 rounded-full justify-center mx-2  flex items-center bg-blue-700 p-1'><FaLinkedin size={18} color='#fff' /></span>
          <span className='w-8 h-8 rounded-full justify-center mx-2 flex items-center bg-blue-700 p-1'> <FaGooglePlusG size={18} color='#fff' /></span>


        </div>
        <div className='footer-bottom border-t w-full mt-4'>
          <span className='w-full  text-center block'>  بهار 1403 </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer