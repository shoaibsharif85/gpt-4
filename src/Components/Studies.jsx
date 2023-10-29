import React from 'react'
import possibility from '../assets/possibility.png'

const Studies = () => {
  return (
    <div className='max-w-[1240px] m-auto'>
 <div className='md:grid md:grid-cols-2 mt-10'>
    <div className=''> 
    <img src={possibility} alt="" className='md:w-[400px] w-[300px] h-[300px] md:h-[400px] mx-10'/>
    </div>
    <div className=''>
        <p className='mx-10 pt-10 text-orange-300 mt-3'>Request Early Access to Get Started</p>
        <h1 className='bg-gradient-to-r from-blue-100 via-pink-500 to-yellow-400 inline-block text-transparent bg-clip-text text-5xl font-bold my-10 ml-10 mt-4 mx-5'>The possibilities are beyond your imagination</h1>
        <p className='text-[13px] mx-10 text-[#a7c5c3]'>Yet bed any for travelling assistance indulgence 
            unpleasing. Not thoughts all exercise blessing.
             Indulgence way everything joy alteration 
             boisterous the attachment. Party we years
              to order allow asked of.</p>


              <p className='mx-10 pt-10 text-orange-300 mt-3'>Request Early Access to Get Started</p>
         </div>

 </div>
 <div className='md:flex py-5 justify-center bg-gradient-to-r rounded  mt-20 from-[#803072] md:mx-[150px] mx-10 rounded-2xl  to-yellow-600 md:w-[900px] w-[300px] h-[40vh] md:h-[150px]' > 
 <div>
  <p className='md:px-1 px-5 md:py-1 pt-5 py-5 font-semibold' >Request Early Access to Get Started</p>
  <h1 className='md:px-1 px-5 md:py-1 py-5 text-2xl font-bold'>Register today & start exploring the endless possiblities.</h1></div>
 <button className='md:mx-10 mx-20 my-10 text-white bg-black  rounded-full h-[50px] p-[10px] w-[150px]'>Register</button>
 </div>
    </div>
  )
}

export default Studies