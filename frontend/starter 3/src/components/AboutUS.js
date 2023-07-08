import React from 'react'
import { Link } from 'react-router-dom'

function AboutUS() {
  return (
    <div className=''>
    <p className='p-2'><strong>Home</strong> / About</p>
    <p className='ml-10 text-3xl text-blue-400'>About Me</p>
    <div className='flex'>
        <div className='flex flex-col ml-10 p-5 w-7/12 items-center justify-evenly'>
            
            <p className='leading-10 text-xl font-light'>Hello!!! Thanks for visiting my space and taking the time to read about me. I am Sanju from Rajasthan and I live in Bangalore. I am working in IT industry as a software engineer for 10 years. I am mother of Rudransh Rathore and during this time I found my passion! Yes it's cooking and clicking, and so this blog!
 
 Though I am fond of food and like to taste different varieties, but started my own cooking after my marriage as I never entered into the kitchen because of my lovable mom and only had the opportunity to enjoy her yummy food. But after marriage, I started cooking vigorously. My husband is a best critic, and that helps me to improve my cooking.</p>
        
        <br/>
        <p className='leading-10 text-xl font-light'>The recipes posted here are tried and tasted in my kitchen,traditional native recipes from my mom, baby foods which I feed my baby and few other recipes tried from friends, cookbooks or other food blogs.Being a health-conscious person, most of my recipes are focuses on health. (Some are exceptional though)</p>
        </div>

        <div className='p-5'>
            <img src='https://res.cloudinary.com/dixqxdivr/image/upload/v1688706322/sanju_xiwiyn.jpg' className='w-[300px] h-[480px] rounded-md'/>
       </div>
    </div>
    <div className='shadow-md bg-slate-100'>
    <div className='p-5'>
        <p className='text-3xl text-center w-screen'>Join Our Community</p>
        <p className='text-xl text-center font-normal p-2'>To stay connected with Sanju and receive updates on the latest post, you can connect on the following platforms</p>
       <div className='flex justify-evenly gap-x-8 py-5'>
        <Link to="https://www.instagram.com/mumma_and_rudransh/">
            <img src='https://res.cloudinary.com/dixqxdivr/image/upload/v1688708911/instagram-1581266_1280_fwpbeq.jpg' alt='instagram' className='w-[100px] h-[100px]'/>
        </Link>
        <Link to="https://www.youtube.com/@MommyGK">
            <img src='https://res.cloudinary.com/dixqxdivr/image/upload/v1688707836/youtube-1837872_1280_oicf29.png' alt='youtube' className='w-[70px] h-[70px] mt-4'/>
        </Link>
        <Link to="https://www.linkedin.com/in/sanju-shekhawat-59344b44/">
            <img src='https://res.cloudinary.com/dixqxdivr/image/upload/v1686808399/Viren/linkedin.png.png' alt='linkedin' className='w-[70px] h-[70px] mt-4'/>
        </Link>
        </div>
    </div>
       </div>
    </div>
  )
}

export default AboutUS