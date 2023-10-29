import React from 'react'
import ai from '../assets/ai.png'
import people from '../assets/people.png'

const Home = () => {
  return (
   <div className='max-w-[1240px] m-auto my-20 md:grid md:grid-cols-2'>
     <div className=''>
     <h1 class="bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 inline-block text-transparent bg-clip-text text-5xl font-extrabold ml-10 mt-4">Let’s Build Something
amazing with GPT-3
OpenAI</h1>
<p className='text-1xl text-[#686879] md:ml-10  mx-7 my-10'>Yet bed any for travelling assistance
 indulgence unpleasing. Not
 thoughts all exercise blessing.
 Indulgence way everything joy
 alteration boisterous the 
 attachment. Party we years
 to order allow asked of.</p>
 <div className='flex md:my-20 '>
 <input type="text" placeholder='Enter Your Email' className='md:w-[350px] md:h-[60px] w-[200px]  ml-10 text-center bg-[#1a3e6d] text-white '/>
 <button className=' bg-[#EC5800] w-[120px]  text-white h-[60px] text-1xl '>Get Startad</button>


 </div>
 <div className='flex '>
 <img src={people} alt="" className='ml-10 mx-5 md:mt-[-2px] mt-7'/>
 <p className='text-[12px] mx-10  md:mx-3 md:mt-2 text-white mt-7' >1,600 people requested access a visit in last 24 hours</p>
 </div>
</div>
<div className='md:my-10'>
<img src={ai} alt="" className='md:mt-[-50px] mx-5 my-8 md:w-[500px] w-[400px] md:ml-10'/>
</div>
   </div>
  )
}

export default Home