import React from 'react'

const Footeer = () => {
  return (
    <div className='bg-[#050518] h-[50vh] md:h-[100vh] w-full'>
        
        <h1 className='md:text-center md:ml-80 mt-20 mx-10  bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 inline-block text-transparent bg-clip-text md:text-5xl text-3xl font-bold '>Do you want to step in to the <br /> future before others</h1>
        <div className='md:justify-center md:ml-[600px] mt-10'>
        <button className='border mx-20 md:mx-0 text-white h-[50px] w-[200px] border-white border-[2px] justify-center'>Request Early Access</button>
        
        </div>
        <div className='md:ml-[150px] mx-10 mt-10 md:mt-36'>
            <h1 className='text-white text-3xl font-bold '>Gpt-3</h1>
            <p className='text-white text-[10px] my-5'>Crechterwoord K12 182 DK<br/> Alknjkcb, All Rights Reserved</p>
            <div className='text-white ml-[400px] mt-[-100px] md:flex hidden'>
           
            <ul className='md:mx-20'>
            <h1 className='text-2xl font-bold md:mt-[-60px]  '>links</h1>
            <li className='my-5'>Overons</li>
                <li className='my-5'>Social Media</li>
                <li className='my-5'>Counters</li>
                <li className='my-5'>Contact</li>
            </ul>
          
            <ul className='mx-20'>
            <h1 className='text-2xl font-bold md:mt-[-60px]  '>Company</h1>
                <li className='my-5'>Crechterwoord K12 182 DK Alknjkcb</li>
                <li className='my-5'>085-132567</li>
                <li className='my-5'>info@payme.net</li>
                
                
            </ul>
          
            <ul className='mx-20'>
            <h1 className='text-2xl font-bold md:mt-[-60px]  '>Get in touch</h1>
                <li className='my-5'>Terms & Conditions</li>
                <li className='my-5'>Privacy Policy</li>
                <li className='my-5'>Contact</li>
              
            </ul>
        </div>
        </div>
       
    </div>
  )
}

export default Footeer