import React from 'react'
import { NavLink } from 'react-router-dom'

function FoodCard({post}) {
  return (
    <div className='p-5 relative'>
                <img src={post.imageUrl} alt='pic' className='w-[280px] h-[300px] rounded-md'/>
                    
                <div className='absolute bottom-0 text-white px-4 text-left'>
                    <p className='text-[30px] font-semibold '>{post.title}</p>
                    <p className='w-[280px]'>{post.shortDesc}</p>
                    <div className='py-10'>
                        <NavLink to={`/food/${post.title.replace(" ", "-")}`}>
                            <button className='bg-pink-500 h-8 w-[100px] font-semibold rounded-md text-richblack-700 hover:scale-110 transition duration-300 ease-in'
                        >Explore</button>
                        </NavLink>
                    </div>
                </div>
            </div>
  )
}

export default FoodCard