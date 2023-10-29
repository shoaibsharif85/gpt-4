import React from 'react'
import slack from '../assets/slack.png'
import google from '../assets/google.png'
import dropbox from '../assets/dropbox.png'
import shopify from '../assets/shopify.png'
import atlassian from '../assets/atlassian.png'

const Brand = () => {
  return (
    <div className='md:flex mx-40 my-10 md:justify-center m-10'>
        <img src={slack} alt="" className='md:mx-5 my-10'/>
        <img src={google} alt="" className='md:mx-5 my-10'/>
        <img src={dropbox} alt="" className='md:mx-5 my-10'/>
        <img src={shopify} alt="" className='md:mx-5 my-10'/>
        <img src={atlassian} alt="" className='md:mx-5 my-10'/>
    </div>
  )
}

export default Brand