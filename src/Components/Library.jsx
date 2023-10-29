import React from 'react'
import blog01 from '../assets/blog01.png'
import blog02 from '../assets/blog02.png'
import blog03 from '../assets/blog03.png'
import blog04 from '../assets/blog04.png'
import blog05 from '../assets/blog05.png'

const Library = () => {
    return (
        <div className='max-w-[1240px] m-auto '>
            <h1 className='bg-gradient-to-r from-blue-100 via-pink-500 to-yellow-400 inline-block text-transparent bg-clip-text text-5xl font-bold mx-20 my-20'>A lot is happening, <br />
                We are blogging about it.</h1>
            <div className='md:grid md:grid-cols-2 mx-10 md:mx-20'>
                <div className=' w-[300px] h-[600px]  '>
                    <img src={blog01} alt="" />
                    <div className='bg-[#204d80] h-[320px] '>
                        <p className='text-white mx-5 py-5'>Sep 26, 2021</p>
                        <h1 className='text-white text-2xl font-bold mx-5'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                        <p className='text-white mt-10 mx-5'>Read Full Article</p>
                    </div>

                </div>
                <div className=' mx-10 md:ml-[-150px] md:grid md:grid-cols-2'>
                   
                 <div className='mx-5 w-[200px] md:my-1  my-10'>   <img src={blog02} alt="" className='h-[120px] w-[400px]'/>
                 <div className='w-[200px] h-[120px] bg-[#204d80] '>
                    <p className=' mx-5 text-white'>Sep 26, 2021</p>
                    <h1 className='mx-5 text-1xl font-bold text-white'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                    <p className='ml-20 text-[13px] text-white'>Read Full Article</p>
                 </div>
                 </div>
                 <div className='mx-5 w-[200px] md:my-1   my-10'>   <img src={blog03} alt="" className='h-[120px] w-[400px]'/>
                 <div className='w-[200px] h-[120px] bg-[#204d80] '>
                    <p className=' mx-5 text-white'>Sep 26, 2021</p>
                    <h1 className='mx-5 text-1xl font-bold text-white'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                    <p className='ml-20 text-[13px] text-white'>Read Full Article</p>
                 </div>
                 </div>
                 <div className='mx-5 w-[200px] mt-[-10px] md:my-1  my-10 '>   <img src={blog04} alt="" className='h-[120px] w-[400px]'/>
                 <div className='w-[200px] h-[120px] bg-[#204d80]  '>
                    <p className=' mx-5 text-white'>Sep 26, 2021</p>
                    <h1 className='mx-5 text-1xl font-bold text-white'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                    <p className='ml-20 text-[13px] text-white'>Read Full Article</p>
                 </div>
                 </div>
                 <div className='mx-5 w-[200px] mt-[-10px] md:my-1  my-10'>   <img src={blog05} alt="" className='h-[120px] w-[400px]'/>
                 <div className='w-[200px] h-[120px] bg-[#204d80] '>
                    <p className=' mx-5 text-white'>Sep 26, 2021</p>
                    <h1 className='mx-5 text-1xl font-bold text-white'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                    <p className='ml-20 text-[13px] text-white'>Read Full Article</p>
                 </div>
                 </div>


                     </div>


            </div>
        </div>
    )
}

export default Library