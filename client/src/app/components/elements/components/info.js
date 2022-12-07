import React from 'react'
import { IoLogoInstagram, IoMdMail, IoLogoWhatsapp } from "react-icons/io";

const Info = () => {
  return (
    <div className='text-left d-flex justify-content-center align-items-center'>
      <img src="commerce.png" alt="ecommerce" className='rounded image-element p-2 border-right' />
      <ul className='list-group ml-4'>
        <p className='text-light h4 user-select-none'><u>Contact us</u></p>
        <li className='text-light h5 item-footer'><IoLogoInstagram className='text-light mr-2' />@eCommerce</li>
        <li className='text-light h5 item-footer'><IoMdMail className='text-light mr-2' />ecommerce@gmail.com</li>
        <li className='text-light h5 item-footer'><IoLogoWhatsapp className='text-light mr-2' />11 5555 5555</li>
      </ul>
    </div>
  )
}

export default Info