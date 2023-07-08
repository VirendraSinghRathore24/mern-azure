import React from 'react'
import { NavLink } from 'react-router-dom'


function Card({post}) {
  return (
    <div>
         <div className='relative pointer-events-auto '>
                <img src={post.imageUrl} className='w-[600px] h-[400px] rounded-md'/>
                    
                <div className='absolute text-white bottom-0 px-4  text-left'>
                    <p className='text-[40px] font-semibold '>{post.title}</p>
                    <p className='w-[280px]'>{post.shortDesc}</p>
                    <div className='py-10'>
                    <NavLink to={`/${post.title}`}>
                        <button className='bg-pink-500 h-10 w-[100px] font-semibold rounded-md text-richblack-700 hover:scale-110 transition duration-300 ease-in'
                        >Explore</button>
                        </NavLink>
                    </div>
                </div>
            </div>  
    </div>
  )
}

export default Card