import React from 'react'
import icon from '../assets/Icon.png'

const Footer = () => {
  return (
    <div className='footer_container '>

     <div className='flex justify-between p-6'>
     <div className='footer_one'>
           <div className='flex gap-2 items-center'>
           <img src={icon} alt="" />
           <h1 className='text-xl font-bold'>E-Comm</h1>
           </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facilis aliquid assumenda quibusdam eligendi.!</p>
        </div>

        <div className='hidden_footer footer_two footer_one'>
           <h1 className='text-xl font-bold'>Follow Us</h1>
          <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
        </div>


        <div className='hidden_footer footer_three footer_one'>
           <h1 className='text-xl font-bold'>Follow Us</h1>
          <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
        </div>

     </div>


        <div className='flex justify-between p-6'>

        <div className=''>
            <h1 className='text-xl font-bold'>Information</h1>
            
            <div className='text-sm mt-2'>
                <p>About Us</p>
                <p>Information</p>
                <p>Privacy Policy</p>
                <p>Terms and Condition</p>
            </div>
      </div>

      <div className='hidden_footer'>
            <h1 className='text-xl font-bold'>Service</h1>
            
            <div className='text-sm mt-2'>
                <p>About Us</p>
                <p>Information</p>
                <p>Privacy Policy</p>
                <p>Terms and Condition</p>
            </div>
      </div>

      <div className=''>
            <h1 className='text-xl font-bold'>My Account</h1>
            
            <div className='text-sm mt-2'>
                <p>About Us</p>
                <p>Information</p>
                <p>Privacy Policy</p>
                <p>Terms and Condition</p>
            </div>
      </div>

      <div className=''>
            <h1 className='text-xl font-bold'>Our Offers</h1>
            
            <div className='text-sm mt-2'>
                <p>About Us</p>
                <p>Information</p>
                <p>Privacy Policy</p>
                <p>Terms and Condition</p>
            </div>
      </div>



        </div>

        <hr />

        <div className='p-6'>
            <p className='text-gray-400'>© 2018 Ecommerce theme by www.bisenbaev.com</p>
        </div>


    </div>
  )
}

export default Footer