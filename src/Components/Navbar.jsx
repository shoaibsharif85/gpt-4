import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [toggel, setToggel] = useState( );
    return (
        <div className=' p-3'>
            <div className='max-w-[1240px] px-2 py-[10px] items-center  mx-auto flex justify-between'>
                <div data-aos="fade-right" className='text-3xl font-bold mx-5 text-white font-[mv boli]'>Gpt-3 </div>

                {
                    toggel ?
                        <AiOutlineClose onClick={() => setToggel(!toggel)} className='text-white text-2xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggel(!toggel)} className='text-white text-2xl md:hidden block' />
                }



                <ul  className='md:flex hidden text-white gap-10   ' >
                    <li className='text-[18px] my-2 '>
                       <a href=""> Home</a>
                    </li>
                    <li className='text-[18px] my-2'><a href="">About uS</a></li>
                    <li className='text-[18px] my-2'><a href="">Skill</a></li>
                    <li className='text-[18px] my-2'><a href="">Project</a></li>
                    <li className='text-[18px] my-2'><a href="">Contact us</a></li>
                    <button className='ml-40 font-semibold'>Register</button>
                    <button className='font-semibold bg-[#EC5800] p-[10px] w-[100px] rounded '>Log in</button>
                </ul>
               
                {/* Responsive */}
                <ul  className={` md:hidden text-white fixed w-full left-0 h-[60vh] px-2  bg-[#000]  top-[80px]  ${ toggel ? "left-[0]" : "left-[-100%]"}`} >
                <li className='text-[18px] mx-10 py-5'>
                       <a href=""> Home</a>
                    </li>
                    <li className='text-[18px] mx-10 py-5'><a className=''href="">About uS</a></li>
                  
                    <li className='text-[18px] mx-10 py-5'><a className=''href="">Skill</a></li>
                    <li className='text-[18px] mx-10 py-5'><a className=''href="">Project</a></li>
                    <li className='text-[18px] mx-10 py-5'><a className='' href="">Contact us</a></li>

                    <button className='ml-20 font-semibold mx-5'>Register</button>
                    <button className='font-semibold bg-[#e97b4f] p-[10px] w-[100px] rounded '>Log in</button>
                    
            </ul>
         
        </div>
    </div >
  )
}

export default Navbar